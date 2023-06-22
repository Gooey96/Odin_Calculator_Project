let firstNumbers = '';
let secondNumbers = '';
let operator = '';

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
    }
    else if(secondDisplay.textContent === '0' && firstDisplay.textContent === '') {
      firstDisplay.textContent = secondDisplay.textContent + ` ${e.target.textContent}`;
      secondDisplay.textContent = '0';
    }
    else if(secondDisplay.textContent !== '0' && firstDisplay.textContent !== '0') {
      
    }
    console.log('This is when you press the operator button',firstNumbers);
  })
})