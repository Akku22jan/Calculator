const digits = Array.from(document.getElementsByClassName("numbers"));
const operators = Array.from(document.getElementsByClassName("operator"));
const display = document.getElementById("display");
const reset = document.getElementById("reset");
const del = document.getElementById('del');

/********    Typing in the calculator through keys */
window.addEventListener("keydown", () => {
    let key = event.key;

    if (key === '1' || key === '2' || key === '3' || key === '4' 
        || key === '5' || key === '6' || key === '7' || key === '8' 
        || key === '9' || key === '0' || key === '.' || key === '+' 
        || key === '-' || key === '*' || key === '/' || key === '=') {
        display.innerHTML += key;
    }

    if(key === '='){
            const expression = display.innerHTML.slice(1, length - 1); //getting rid of equal to sign
            const func = new Function("return " + expression);
            const result = func();
            display.innerHTML += `<p>${result}</p>`;
    }
     if(key ==='Enter'){
        let length = display.innerHTML.length;
        const expression = display.innerHTML.slice(1,length); //getting rid of equal to sign
            //result = math.evaluate(expression);
            console.log(expression);
            const func = new Function("return " + expression);
            const result = func();
            display.innerHTML += `<p>${result}</p>`;
     }
     /*** delete the last character */
     if(key === 'Backspace'){
        let length = display.innerHTML.length;
        display.innerHTML = display.innerHTML.slice(0, length - 1);
     }

});


/****To display the number in the display section when the buttons are clicked ******/

digits.forEach(accessButton);

function accessButton(digit) {
    digit.addEventListener("click", function displayNumber() {
        display.innerHTML += digit.innerHTML;
    });
}

/****To display the operator in the display section when the buttons are clicked ******/

operators.forEach(accessOperator);

function accessOperator(operator) {
    operator.addEventListener("click", function operatorFunction() {
        if (operator.id === "multiply") {
            display.innerHTML += "*";
        } else {
            display.innerHTML += operator.innerHTML;
        }

        /* Evaluation of the expression */

        if (operator.id === "result") {
            const expression = display.innerHTML.slice(1, length - 1); //getting rid of equal to sign
            const func = new Function("return " + expression);
            const result = func();
            display.innerHTML += `<p>${result}</p>`;
        }
    });
}

/****** reset the display on clicking the reset button *******/

reset.addEventListener("click", () => {
    display.innerHTML = "0";
})


/****** delete last character ********/

del.addEventListener("click", () => {
    let length = display.innerHTML.length;
    display.innerHTML = display.innerHTML.slice(0, length - 1);
});
