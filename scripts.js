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
      results = subtract(a, b);        // This function probably need to refractor
      break;                           // Maybe not 
    case 'x':                          // Time will tell
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
    if(firstDisplay.textContent === `${firstNumbers} ${operator}`) {
      if(e.target.textContent === '0') {        // This is wrong
        secondNumbers = e.target.textContent;
        firstDisplay.textContent = e.target.textContent;
      }
      else {
        secondNumbers += e.target.textContent;
        firstDisplay.textContent += e.target.textContent;
      }
    }
    else if(firstDisplay.textContent === '0') {
      firstNumbers = e.target.textContent;
      firstDisplay.textContent = e.target.textContent;
    }
    else if(firstDisplay.textContent !== '0') {
      firstNumbers += e.target.textContent;
      firstDisplay.textContent += e.target.textContent;
    }
    console.log('This is first',firstNumbers);
    console.log('This is second',secondNumbers);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener('click', function(e) {
    operator = e.target.textContent;
    let results = '';
    if(firstDisplay.textContent === firstNumbers) {
      firstDisplay.textContent = `${firstNumbers} ${operator}`;
      console.log("It's Works"); // This might be wrong 
    }
  })
})