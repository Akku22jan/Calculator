const digits = Array.from(document.getElementsByClassName("numbers"));
const operators = Array.from(document.getElementsByClassName("operator"));
const display = document.getElementById("display");
const reset = document.getElementById("reset");
const del = document.getElementById('del');
let expression;
let numbers=[];
let result;
let seperator;

/****To display the number in the display section when the buttons are clicked ******/

digits.forEach(accessButton);

function accessButton(digit){
    digit.addEventListener("click",function displayNumber(){
        display.innerHTML += digit.innerHTML;
    });
}

/****To display the operator in the display section when the buttons are clicked ******/

operators.forEach(accessOperator);

function accessOperator(operator){
    operator.addEventListener("click",function operatorFunction(){
        display.innerHTML += operator.innerHTML;
        
        /**** perform the operator *****/
        if(operator.id ==="add"){ 
            seperator = "+";
        }

        if(operator.id ==="subtract"){ 
            seperator = "-";
        }

        if(operator.id ==="multiply"){ 
            seperator = "x";
        }

        if(operator.id ==="divide"){ 
            seperator = "/";
        }

        /* Evaluation of the expression */
        expression = display.innerHTML.slice(0,length-1); //getting rid of equal to sign
        if(operator.id === "result"){
            numbers = expression.split(seperator); // removing +, -, x, /, just getting array of all the numbers

            if(seperator === "+"){
                result = numbers.reduce(addition,0);
            } else if(seperator === "-"){
                result = numbers.reduce(subtraction);
            } else if(seperator === "x"){
                result = numbers.reduce(multiplication,1);
            } else if(seperator === "/"){
                result = numbers.reduce(division);
            }



            /*addition */
            function addition(result,num){
                num = parseFloat(num);
                return result + num;
            }

            /*subtraction */
            function subtraction(result,num){
                num = parseFloat(num);
                return result - num;
            }

            /*multiplication */
            function multiplication(result,num){
                num = parseFloat(num);
                return result * num;
            }

            /*division */
            function division(result,num){
                num = parseFloat(num);
                return result / num;
            }

            display.innerHTML += `<p>${result}</p>`;
        }
    });
}



/****** reset the display on clicking the reset button *******/

reset.addEventListener("click",() => {
    display.innerHTML = "0";
})


/****** delete last character ********/

del.addEventListener("click",() => {
    let length = display.innerHTML.length;
    display.innerHTML = display.innerHTML.slice(0,length-1);
});
