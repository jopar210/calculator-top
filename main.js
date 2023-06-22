////////////////////////////////////////////////////////
// VARIABLES
////////////////////////////////////////////////////////

let fistNumber = "";
let operator = "";
let secondNumber = "";
let result = "";

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
  if (num2) {
    return Number(num1) + Number(num2);
  } else {
    secondNumber = "";
  }
};

const subtract = function (num1, num2) {
  if (num2) {
    return num1 - num2;
  } else {
    secondNumber = "";
  }
};

const multiply = function (num1, num2) {
  if (num2) {
    return num1 * num2;
  } else {
    secondNumber = "";
  }
};

const divide = function (num1, num2) {
  if (num2) {
    return num1 / num2;
  } else {
    secondNumber = "";
  }
};

const remainder = function (num1, num2) {
  if (num2) {
    return num1 % num2;
  } else {
    secondNumber = "";
  }
};

const clearInputs = function () {
  fistNumber = "";
  operator = "";
  secondNumber = "";
};

const clearScreen = function () {
  clearInputs();
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
      if (num.id === "." && fistNumber.includes(".")) {
        // Ignore if "." is already present in firstNumber
        return;
      }
      fistNumber += num.id;
      display.textContent = fistNumber.slice(0, 7); // Limit display to 7 characters
    } else {
      if (num.id === "." && secondNumber.includes(".")) {
        // Ignore if "." is already present in firstNumber
        return;
      }
      secondNumber += num.id;
      display.textContent = secondNumber.slice(0, 7);
    }
  });
});

operators.forEach((op) => {
  op.addEventListener("click", () => {
    if (operator !== "") {
      if (operator === "/" && secondNumber === "0") {
        // Division by zero error
        display.textContent = "Error: Infinity";
        clearInputs();
        return;
      }
      result = operate(fistNumber, operator, secondNumber);
      display.textContent = result.toString().slice(0, 7);
      fistNumber = "";
      secondNumber = "";
      operator = op.id;
      fistNumber = result;
    } else if (fistNumber !== "") {
      operator = op.id;
      display.textContent = operator;
    }
  });
});

clear.addEventListener("click", clearScreen);

equal.addEventListener("click", () => {
  if (fistNumber === "" || secondNumber === "" || operator === "") {
    // Ignore if any of the required inputs are missing
    return;
  }
  if (operator === "/" && secondNumber === "0") {
    // Division by zero error
    display.textContent = "Error: Infinity";
    clearInputs();
    return;
  }

  result = operate(fistNumber, operator, secondNumber);
  let roundedResult = result.toString();

  if (roundedResult.length > 7) {
    roundedResult = result.toExponential(4); // Convert to scientific notation with 4 decimal places
  }

  display.textContent = roundedResult;
  clearInputs();
  fistNumber = roundedResult;
});

backspace.addEventListener("click", deleteLastInput);
