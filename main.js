////////////////////////////////////////////////////////
// VARIABLES
////////////////////////////////////////////////////////

let fistNumber = "";
let operator = "";
let secondNumber = "";

let isDark = true;
const body = document.querySelector("body");
const themeToggleBtn = document.querySelector(".theme-toggler");
const toggleIcon = document.querySelector(".toggler-icon");
const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
const equal = document.querySelector("#equal");
const backspace = document.querySelector("#backspace");
const clear = document.querySelector("#clear");
const numbers = document.querySelectorAll(".btn-number");
const operators = document.querySelectorAll(".btn-operator");

////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////

const add = function (num1, num2) {
  return Number(num1) + Number(num2);
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

const remainder = function (num1, num2) {
  return num1 % num2;
};

const clearScreen = function () {
  fistNumber = "";
  operator = "";
  secondNumber = "";
  display.textContent = "";
};

const deleteLastInput = function () {
  if (operator === "") {
    fistNumber = fistNumber.slice(0, -1);
    initialInput = display.textContent;
    display.textContent = initialInput.slice(0, -1);
  } else if (operator !== "" && secondNumber === "") {
    operator = operator.slice(0, -1);
    initialInput = display.textContent;
    display.textContent = initialInput.slice(0, -1);
  } else {
    secondNumber = secondNumber.slice(0, -1);
    initialInput = display.textContent;
    display.textContent = initialInput.slice(0, -1);
  }
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
    case "%": {
      return remainder(num1, num2);
    }
  }
};

////////////////////////////////////////////////////////
// EVENTS
////////////////////////////////////////////////////////

themeToggleBtn.addEventListener("click", () => {
  calculator.classList.toggle("dark");
  body.classList.toggle("dark");
  display.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
});

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    if (operator === "") {
      fistNumber += num.id;
      display.textContent = fistNumber;
      console.log(fistNumber);
    } else {
      secondNumber += num.id;
      display.textContent = secondNumber;
      console.log(fistNumber);
      console.log(secondNumber);
    }
  });
});

operators.forEach((op) => {
  op.addEventListener("click", () => {
    operator = op.id;
    display.textContent = operator;
    console.log(operator);
  });
});

clear.addEventListener("click", clearScreen);

equal.addEventListener("click", () => {
  display.textContent = display.textContent = operate(
    fistNumber,
    operator,
    secondNumber
  );
  console.log(operate(fistNumber, operator, secondNumber));
});

backspace.addEventListener("click", deleteLastInput);
