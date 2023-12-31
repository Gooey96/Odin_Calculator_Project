// There is still some bugs left that need to fix
// but i think it good enough as is and will come
// back and fix it later if i remember that is 

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
const deleteButton = document.querySelector('.delete_btn');
const clearButton = document.querySelector('.clear_btn');

function containOperator(opr) {
  return /[x/+-]/.test(opr);
};

function containEqual(eql) {
  return /=/.test(eql);
};

function containPointer(point) {
  return /./.test(point);
}

clearButton.addEventListener('click', function() {
  firstDisplay.textContent = '0';
  secondDisplay.textContent = '';
  firstNumbers = '0';
  secondNumbers = '';
  operator = '';
});

deleteButton.addEventListener('click', function() {
  if(firstDisplay.textContent === '0') { // Bug: need to press twice for space
    firstDisplay.textContent = '0'             
  }     // The delete button need to press twice when there is a space  
  else if(firstDisplay.textContent !== '0') {
    firstDisplay.textContent = firstDisplay.textContent.toString().slice(0, -1);
    firstNumbers = firstNumbers.toString().slice(0, -1);
    return;
  }
});

numberButtons.forEach((button) => { // This is also finished :D
  button.addEventListener('click', function(e) {
    if(containOperator(firstDisplay.textContent) && !containEqual(firstDisplay.textContent)) {
      if(secondNumbers === ('' || '0')) {
        secondNumbers = e.target.textContent;
        firstDisplay.textContent = `${firstNumbers} ${operator} ${secondNumbers}`;
        console.log('This is second',secondNumbers);
      }          // Bug: number can have more than one pointer 
      else {     // Reminder that the pointer can have more than one
        secondNumbers += e.target.textContent;
        firstDisplay.textContent = `${firstNumbers} ${operator} ${secondNumbers}`;
        console.log('This is second',secondNumbers);
      }
    }           // So i need to fix it before since it is a bug
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
    if(secondDisplay.textContent !== '' && containEqual(firstDisplay.textContent)) {
      firstNumbers = secondDisplay.textContent;
      secondNumbers = '';            // This statement become true when
      secondDisplay.textContent = '';// secondDisplay is not empty
      firstDisplay.textContent = `${firstNumbers} ${e.target.textContent}`;
    }
    else if(secondDisplay.textContent === '' && secondNumbers !== '') {
      let first = +firstNumbers;  // This statement become true when secondDisplay is 
      let second = +secondNumbers;// empty and secondNumbers is empty
      results = Math.round(operate(first, operator, second) * 10) / 10;
      firstDisplay.textContent = `${results} ${e.target.textContent}`;
      firstNumbers = results;
      secondNumbers = '';
    }
    if(containOperator(firstDisplay.textContent) || firstDisplay.textContent === firstNumbers) {                   // This statement become true when firstDisplay
      operator = e.target.textContent;// have an operator or firstNumber = firstDisplay
      firstDisplay.textContent = `${firstNumbers} ${operator}`;
      secondDisplay.textContent = '';
      console.log("This the operator:",operator)
    }
  });
});

equalButton.addEventListener('click', function(e) { // This is finished :D
  if(containOperator(firstDisplay.textContent) && secondNumbers) {
    let first = +firstNumbers;
    let second = +secondNumbers;
    let results = Math.round(operate(first, operator, second) * 10) / 10;
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