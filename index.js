const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

let firstValue = '';
let currentOperator = null;
let shouldResetDisplay = false;

function add(a, b) {
       return a + b;
}

function subtract(a, b) {
       return a - b
}
function multiply(a, b) {
       return a * b;
}
function divide(a, b) {
       if (b === 0) {
              alert("Cannot divide by 0");
              return;
       }
       return a / b;
}

function operate(operator, a, b) {
       switch (operator) {
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

function clearDisplay() {
       display.textContent = "0";
       firstValue = '';
       currentOperator = null;
       shouldResetDisplay = false;
}

function addToDisplay(value) {
       if (display.textContent === "0") {
              display.textContent = value;
       }
       else {
              display.textContent += value;
       }
}

buttons.forEach((button) => {
       button.addEventListener('click', () => {
              const value = button.textContent;
              if (!isNaN(value)) {
                     if (shouldResetDisplay) resetDisplay();
                     addToDisplay(value);
              } else if (value === "AC") {
                     clearDisplay();
              } else if (['+', '-', '*', '/'].includes(value)) {
                     // Handle operators
                     setOperator(value);
              }
              else if (value === '=') {
                     calculate(); // Perform the calculation
                 }
                 else if(value === "+/-"){
                     toggleSign();
                 }
       })
})


function setOperator(operator) {
       if (currentOperator !== null&& !shouldResetDisplay) {
              calculate();
       }
       firstValue = display.textContent;
       currentOperator = operator;
       shouldResetDisplay = true;
}

function resetDisplay() {
       display.textContent = '';
       shouldResetDisplay = false;
}
function toggleSign() {
       const currentValue = display.textContent;
       if(currentValue === 0) return;
       if(currentValue.startsWith('-')){
              display.textContent = currentValue.slice(1);
       }else{
              display.textContent = `-${currentValue}`;
       }
   }


function calculate() {
       if (currentOperator === null || shouldResetDisplay) return;

       const secondValue = display.textContent;
       if (currentOperator === '/' && secondValue === '0') {
              alert("Cannot divide by zero!");
              clearDisplay(); // Reset the calculator
              return;
       }
       const result = operate(
              currentOperator,
              parseFloat(firstValue),
              parseFloat(secondValue)
          );
       display.textContent = result;
       firstValue = result;
       currentOperator = null;
}