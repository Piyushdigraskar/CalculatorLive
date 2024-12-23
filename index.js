const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

let firstValue = '';
let currentOperator = null;
let shouldResetDisplay = false;

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

buttons.forEach((button)=>{
       button.addEventListener('click', ()=>{
              const value = button.textContent;
              if(!isNaN(value)){
                     addToDisplay(value);
              }else if(value === "AC"){
                     clearDisplay();
              }
       })
})


function setOperator(operator){
       if(currentOperator !== null){
              //calculate() //yet to make
       }
       firstValue = display.textContent;
       currentOperator = operator;
       shouldResetDisplay = true;
}

function resetDisplay(){
       display.textContent = '';
    shouldResetDisplay = false;
}



