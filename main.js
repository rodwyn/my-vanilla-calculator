import './style.css'
// =======
// Live Coding Exercise
//
// In this exercise you will implement some functionalities of a simple 
// calculator in ES6+ Javascript. You have some starter code that
// sets up listeners for events when keys are presed and updates the display section with the number key pressed

// ========
// The challenge:
// 1. Implement the calculate function to support addition, subtraction,
//    multiplication, and division
// 2. Implement the clear function (AC)
// 3. Apply some CSS styling to every key in the calculator when the key is clicked.
// 4. What are JS hygiene can you apply to this file? 


// === Starter code
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')

keys.addEventListener('click', event => {
 if (event.target.matches('button')) {
   const key = event.target
   const action = key.dataset.action
   const keyContent = key.textContent
   const displayedNum = display.textContent   
   const previousKeyType = calculator.dataset.previousKeyType

   if (!action) {
      console.log('number key!')

      if (displayedNum === '0' || previousKeyType == 'operator') {
        display.textContent = keyContent
        calculator.dataset.previousKeyType = undefined
        
      } else {
        display.textContent = displayedNum + keyContent
      }
   }
 
   if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      console.log('operator key!')
      calculator.dataset.previousKeyType = 'operator'
      calculator.dataset.firstValue = displayedNum
      calculator.dataset.operator = action
    }
   
   
    if (action === 'decimal') {
      display.textContent = displayedNum + '.'
    }
   
    
    if (action === 'calculate') {
      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      const secondValue = displayedNum

      console.log({firstValue, operator, secondValue });

      if(!firstValue || !operator) return;
      display.textContent = mathOperator[operator](firstValue, secondValue);
    }

    if (action === 'clear') {
      calculator.dataset.firstValue = 0;
      calculator.dataset.operator = '';
      display.textContent = 0;
    }
 }
})

const mathOperator = {
  'add' : (firstValue, secondValue) =>  firstValue + secondValue,
  'subtract' : (firstValue, secondValue) =>  firstValue - secondValue,
  'multiply' : (firstValue, secondValue) =>  firstValue * secondValue,
  'divide': (firstValue, secondValue) =>  firstValue / secondValue
};
