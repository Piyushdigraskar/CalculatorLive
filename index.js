const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

function clearDisplay () {
       display.textContent = "0";
}

function addToDisplay(value){
       if(display.textContent === "0"){
              display.textContent = value;
       }
       else{
              display.textContent += value;
       }
}



function add(a, b){
       return a + b;
}

function subtract(a, b){
       return a - b
}
function multiply(a, b){
       return a * b;
}
function divide(a, b){
       if(b === 0) {
              alert("Cannot divide by 0");
              return;
       }
       return a/b;
}

function operate(operator, a, b){
       switch(operator){
              case '+':
                     return add(a, b);
              case '-':
                     return subtract(a, b);
              case '*':
                     return multiply(a, b);
              case '/':
                     return divide(a, b);
              default:
                     return "Invalid Operator";
       }
}

