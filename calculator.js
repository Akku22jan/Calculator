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
            updateExpressionOnOperators(key);
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
    digit.addEventListener("click", () => {
            updateExpressionOnNumbers(digit.innerHTML);
    });
}

/****To display the operator in the display section when the buttons are clicked ******/

operators.forEach(accessOperator);

function accessOperator(operator) {
    operator.addEventListener("click", () => {
        if(operator.id !== "result"){
            if (operator.id === "multiply") {
                updateExpressionOnOperators('*');
            } else {
                updateExpressionOnOperators(operator.innerHTML);
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

function updateExpressionOnOperators(keys){
        expression += keys;
        expression = expression.replace(/\*\-[\*\/\+\-]/,'*-');
        expression = expression.replace(/\/\-[\*\/\+\-]/,'/-');
        expression = expression.replace(/[\+\*\-\/.]\*/ ,'*');
        expression = expression.replace(/[\+\*\-\/.]\// ,'/');
        expression = expression.replace(/[\+\*\-\/.]\+/ ,'+');
        expression = expression.replace(/[\+.]\-/ ,'-');
        expression = expression.replace(/\-\-/ ,'+');

        displayExpression.innerHTML = expression.replaceAll('*', ` &times; `).replaceAll('/', ` &divide; `).replaceAll('+', ` + `).replaceAll('-', ` - `);
        displayAns.style.visibility = 'visible';
        displayAns.innerHTML = `Ans = ${result}`;
}

function evaluateExpression(){
        displayExpression.innerHTML += '=';
        const func = new Function("return " + expression);
        result = func();
        displayAns.innerHTML = displayExpression.innerHTML;
        displayExpression.innerHTML = result;
        displayAns.classList.add("animate"); /* add the animation class */
        displayExpression.classList.add("animate"); /* add the animation class */
        setTimeout(() => {
            displayAns.classList.remove('animate');
            displayExpression.classList.remove('animate');
        }, 200) /* Trigger a reflow to reset the animation */
        
        expression = `${result}`;
}

function updateOnDelKey(){
    displayAns.innerHTML = `Ans = ${result}`;
    let length = expression.length;
    expression = expression.slice(0,length-1);
    displayExpression.innerHTML = expression.replaceAll('*', ` &times; `).replaceAll('/', ` &divide; `).replaceAll('+', ` + `).replaceAll('-', ` - `);
    if(displayExpression.innerHTML === ""){
        displayExpression.innerHTML = '0';
        expression = '0';
    }
}
