let firstNumbers = '';
let secondNumbers = '';
const operator = {
  add: '+',
  subtract: '-',
  multiply: '*',
  divide: '/',
};

function add(a, b) {
  console.log(a + b);
};

function subtract(a, b) {
  console.log(a - b);
};

function multiply(a, b) {
  console.log(a * b);
};

function divide(a, b) {
  console.log(a / b);
};

function operate(a, operation, b) {
  switch(operation) {
    case '+':
      add(a, b);
      break;
    case '-':
      subtract(a, b);
      break;
    case '*':
      multiply(a, b);
      break;
    case '/':
      divide(a, b);
  }
}

const secondDisplay = document.querySelector('.second_display');
const numberButtons = document.querySelectorAll('.numbers');

numberButtons.forEach((button) => {
  button.addEventListener('click', function(e) {
    firstNumbers += e.target.textContent;
    if(secondDisplay.textContent === '0') {
      secondDisplay.textContent = firstNumbers;
    }
    else if(secondDisplay !== '0') {
      secondDisplay.textContent += e.target.textContent;
    }
    console.log(firstNumbers);
  });
});
