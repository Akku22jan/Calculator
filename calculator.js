const digits = Array.from(document.getElementsByClassName("numbers"));
const operators = Array.from(document.getElementsByClassName("operator"));
const displayExpression = document.getElementById("displayexpression");
const displayAns = document.getElementById("displayans");
const reset = document.getElementById("reset");
const del = document.getElementById('del');
let expression = displayExpression.innerHTML;
let result = 0;

/********    Typing in the calculator through keys */
window.addEventListener("keydown", () => {
    let key = event.key;

    /***** what happens on pressing the number keys */
    if (key === '1' || key === '2' || key === '3' || key === '4' 
        || key === '5' || key === '6' || key === '7' || key === '8' 
        || key === '9' || key === '0' || key === '.') {
            updateExpressionOnNumbers(key);
    }

    /**** what happens on pressing operators and decimal point */
    if( key === '+' || key === '-' || key === '*' || key === '/'){
        if(key === '*'){
            updateExpressionOnOperators(key, '&times;');
        } else if(key === '/'){
            updateExpressionOnOperators(key,'&divide;');
        } else{
            updateExpressionOnOperators(key, key);
        }
        
        
    }

    /**** what happens on pressing = or enter */
    if(key === '=' || key === 'Enter'){
        evaluateExpression();
        
    }

     /*** delete the last character */
     if(key === 'Backspace'){
        updateOnDelKey();
     }

});


/****To display the number in the display section when the buttons are clicked ******/

digits.forEach(accessButton);

function accessButton(digit) {
    digit.addEventListener("click", function displayNumber() {
            updateExpressionOnNumbers(digit.innerHTML);
    });
}

/****To display the operator in the display section when the buttons are clicked ******/

operators.forEach(accessOperator);

function accessOperator(operator) {
    operator.addEventListener("click", function operatorFunction() {
        if(operator.id !== "result"){
            if (operator.id === "multiply") {
                updateExpressionOnOperators('*',operator.innerHTML);
            } else if(operator.id === 'divide'){
                updateExpressionOnOperators(operator.innerHTML,'&divide;');
            } else {
                updateExpressionOnOperators(operator.innerHTML, operator.innerHTML);
            }
        }
        

        /* Evaluation of the expression when = is clicked*/

        else {
            evaluateExpression();
        }
    });
}

/****** reset the display on clicking the reset button *******/

reset.addEventListener("click", () => {
    displayExpression.innerHTML = "0";
    displayAns.style.visibility = "hidden";
    result = '0';
    expression = '0';
})


/****** delete last character ********/

del.addEventListener("click", () => {
    updateOnDelKey();
});


function updateExpressionOnNumbers(keys){
    if(expression === `${result}` || displayExpression.innerHTML==='0'){
        if(keys !== '.') {
            expression = keys;
            displayExpression.innerHTML = keys;
        } else{
            expression += keys;
            displayExpression.innerHTML += keys;
        }
        
        displayAns.style.visibility = 'visible';
        displayAns.innerHTML = `Ans = ${result}`;

    } else{
        expression += keys;
        displayExpression.innerHTML += keys;
    }
}

function updateExpressionOnOperators(keys,displayKeys){
        expression += keys;
        expression = expression.replace(/\*\-[\*\/\+\-]/,'*-');
        expression = expression.replace(/\/\-[\*\/\+\-]/,'/-');
        expression = expression.replace(/[\+\*\-\/.]\*/ ,'*');
        expression = expression.replace(/[\+\*\-\/.]\// ,'/');
        expression = expression.replace(/[\+\*\-\/.]\+/ ,'+');
        expression = expression.replace(/[\+.]\-/ ,'-');
        expression = expression.replace(/\-\-/ ,'+');

        displayExpression.innerHTML += ` ${displayKeys} `;
        
        //displayExpression.innerHTML = displayExpression.innerHTML.replace(`/\s\u00d7 \s-\s[+-\u00d7]/u`,` &multiply; -`);
        //displayExpression.innerHTML = displayExpression.innerHTML.replace(/\/\-[\*\/\+\-]/,'/-');
        //displayExpression.innerHTML = displayExpression.innerHTML.replace(/[\+\*\-\/.]\*/ ,'*');
        //displayExpression.innerHTML = displayExpression.innerHTML.replace(/[\+\*\-\/.]\// ,'/');
        //displayExpression.innerHTML = displayExpression.innerHTML.replace(/[\+\*\-\/.]\+/ ,'+');
        //displayExpression.innerHTML = displayExpression.innerHTML.replace(/[\+.]\-/ ,'-');
        //displayExpression.innerHTML = displayExpression.innerHTML.replace(/\-\-/ ,'+');

        displayAns.style.visibility = 'visible';
        displayAns.innerHTML = `Ans = ${result}`;
}

function evaluateExpression(){
        displayExpression.innerHTML += '=';
        const func = new Function("return " + expression);
        result = func();
        displayAns.innerHTML = displayExpression.innerHTML;
        displayExpression.innerHTML = result;
        expression = `${result}`;
}

function updateOnDelKey(){
    displayAns.innerHTML = `Ans = ${result}`;
    let length = expression.length;
    expression = expression.slice(0,length-1);
    displayExpression.innerHTML = expression;
    if(displayExpression.innerHTML === ""){
        displayExpression.innerHTML = '0';
        expression = '';
    }
}
