////////////////////////////////////////////////////////
// VARIABLES
////////////////////////////////////////////////////////

let fistNumber;
let operator;
let secondNumber;

////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////

const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const multiply = function (num1, num2) {
  return num1 * num2;
};

const divide = function (num1, num2) {
  return num1 / num2;
};

const clear = function () {
  fistNumber = 0;
  operator = null;
  secondNumber = 0;
};

const operate = function (num1, operator, num2) {
  switch (operator) {
    case "+": {
      return add(num1, num2);
    }
    case "-": {
      return subtract(num1, num2);
    }
    case "*": {
      return multiply(num1, num2);
    }
    case "/": {
      return divide(num1, num2);
    }
  }
};
