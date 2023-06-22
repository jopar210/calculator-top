////////////////////////////////////////////////////////
// VARIABLES
////////////////////////////////////////////////////////

let fistNumber;
let operator;
let secondNumber;

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

const remainder = function (num1, num2) {
  return num1 % num2;
};

const clearScreen = function () {
  fistNumber = 0;
  operator = null;
  secondNumber = 0;
};

const deleteLastInput = function () {
  // DELETE LAST INPUT
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
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
});

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    console.log(num.id);
    return num;
  });
});
