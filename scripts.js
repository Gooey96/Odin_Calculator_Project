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

numberButtons.forEach((button) => {    // Probably ok now i don't know (old comment)
  button.addEventListener('click', function(e) {  // It's still not ok (new comment)
    if(containOperator(firstDisplay.textContent) && !containEqual(firstDisplay.textContent)) {
       if(secondNumbers === ('' || '0')) {
        secondNumbers = e.target.textContent;
        firstDisplay.textContent = `${firstNumbers} ${operator} ${secondNumbers}`;
        console.log('This is second',secondNumbers);
      }       // Reminder that when zero is one the secondDisplay after pressing equal
      else {  // if you insert a different number and press one of the operator buttons
              // then it gonna take the secondDisplay (0) as the firstNumber or any 
              // numbers that is on the secondDisplay.
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

operatorButtons.forEach((button) => {  // Finally finished :D
  button.addEventListener('click', function(e) {
    let results = '';
    if(secondDisplay.textContent !== '') {
      firstNumbers = secondDisplay.textContent;
      secondNumbers = '';
      secondDisplay.textContent = '';
      firstDisplay.textContent = `${firstNumbers} ${e.target.textContent}`;
    }
    else if(secondDisplay.textContent === '' && secondNumbers !== '') {
      let first = +firstNumbers;
      let second = +secondNumbers;
      results = operate(first, operator, second);
      firstDisplay.textContent = `${results} ${e.target.textContent}`;
      firstNumbers = results;
      secondNumbers = '';
    }
    if(containOperator(firstDisplay.textContent) || firstDisplay.textContent === firstNumbers) {
      operator = e.target.textContent;
      firstDisplay.textContent = `${firstNumbers} ${operator}`;
      console.log("This the operator:",operator)
    }
  })
});

equalButton.addEventListener('click', function(e) { // I think this is finished maybe.
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
    firstDisplay.textContent = `${firstNumbers} ${'='}`
    secondDisplay.textContent = `${firstNumbers}`;
  }
});