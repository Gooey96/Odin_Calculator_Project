let firstNumbers = '';
let secondNumbers = '';
let operator = '';

function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
};

function operate(a, operation, b) {
  let results = '';
  switch(operation) {
    case '+':
      results = add(a, b);
      break;
    case '-':
      results = subtract(a, b);
      break;
    case '*':
      results = multiply(a, b);
      break;
    case '/':
      results = divide(a, b);
  }
  return results;
}

const firstDisplay = document.querySelector('.first_display');
const secondDisplay = document.querySelector('.second_display');
const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operator');

numberButtons.forEach((button) => {
  button.addEventListener('click', function(e) {
    if(secondDisplay.textContent === '0') {
      secondDisplay.textContent = e.target.textContent;
      firstNumbers = e.target.textContent;
    }
    else if(secondDisplay.textContent !== '0') {
      secondDisplay.textContent += e.target.textContent;
      firstNumbers += e.target.textContent;
    }
    console.log(firstNumbers);
  });
});

operatorButtons.forEach((button) => { // Work in Progress :)
  button.addEventListener('click', function(e) {
    if(secondDisplay.textContent !== '0' && firstDisplay.textContent === '') {
      firstDisplay.textContent = secondDisplay.textContent + ` ${e.target.textContent}`;
      secondDisplay.textContent = '0';
      operator = e.target.textContent;
    }
    else if(secondDisplay.textContent === '0' && firstDisplay.textContent === '') {
      firstDisplay.textContent = secondDisplay.textContent + ` ${e.target.textContent}`;
      secondDisplay.textContent = '0';
      operator = e.target.textContent;
    }
    else if(secondDisplay.textContent !== '0' && firstDisplay.textContent !== '0') {
      let firstOperand = Number(firstNumbers);
      let secondOperand = Number(secondNumbers = secondDisplay.textContent);
      let results = operate(firstOperand, operator, secondOperand);

      secondDisplay.textContent = `${results}`;
      console.log(results);
    }
    console.log('This is when you press the operator button',firstNumbers);
    console.log('This is the secondNumber values', secondNumbers);
    console.log('This is the operator symbol is', operator)
  })
})