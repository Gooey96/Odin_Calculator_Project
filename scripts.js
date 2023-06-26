let firstNumbers = '0';
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
    case 'x':                          
      results = multiply(a, b);
      break;
    case '/':
      if(b === 0) return 'Kabooom'
      else results = divide(a, b);
  }
  return results;
};

const firstDisplay = document.querySelector('.first_display');
const secondDisplay = document.querySelector('.second_display');
const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');

function containOperator(opr) {
  return /\D/.test(opr);
};

function containEqual(eql) {
  return /=/.test(eql);
};

numberButtons.forEach((button) => {    
  button.addEventListener('click', function(e) {
    if(containOperator(firstDisplay.textContent) && !containEqual(firstDisplay.textContent)) {
       if(secondNumbers === ('' || '0')) {
        secondNumbers = e.target.textContent;
        firstDisplay.textContent = `${firstNumbers} ${operator} ${secondNumbers}`;
        console.log('This is second',secondNumbers);
      }
      else {
        secondNumbers += e.target.textContent;
        firstDisplay.textContent = `${firstNumbers} ${operator} ${secondNumbers}`;
        console.log('This is second',secondNumbers);
      } 
    }
    else if(containEqual(firstDisplay.textContent) || firstDisplay.textContent === '0') {
      secondNumbers = '';
      firstNumbers = e.target.textContent;
      firstDisplay.textContent = e.target.textContent;
      console.log('This is first',firstNumbers);
    }
    else if(firstDisplay.textContent !== '0') {
      secondNumbers = '';
      firstNumbers += e.target.textContent;
      firstDisplay.textContent += e.target.textContent;
      console.log('This is first',firstNumbers);
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener('click', function(e) {
    let results = '';
    if(containOperator(firstDisplay.textContent) || firstDisplay.textContent === firstNumbers) {
      operator = e.target.textContent;
      firstDisplay.textContent = `${firstNumbers} ${operator}`;
      console.log("This the operator:",operator)
    }
    else if(containOperator(firstDisplay.textContent)) {
    
    }
  })
});

equalButton.addEventListener('click', function(e) { // Not finish yet
  if(containOperator(firstDisplay.textContent) && secondNumbers) {
    let first = +firstNumbers;
    let second = +secondNumbers;
    let results = operate(first, operator, second);
    firstDisplay.textContent = `${firstNumbers} ${operator} ${secondNumbers} ${'='}`
    secondDisplay.textContent = results;
    console.log(typeof(first));
    console.log(typeof(second));
  }
  else if(firstDisplay.textContent === firstNumbers) {
    secondDisplay.textContent = `${firstNumbers}`;  // This is also not finish yet
  }
});