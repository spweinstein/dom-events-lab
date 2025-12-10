// CONSTANTS
const buttons = document.querySelectorAll(".button");
const display = document.querySelector("div.display");

// VARIABLES
let total = 0;
let inputVal;
let operation = null;

function calculate(input1, input2, operation) {
  if (operation === "+") {
    return input1 + input2;
  } else if (operation === "-") {
    return input1 - input2;
  } else if (operation === "*") {
    return input1 * input2;
  } else if (operation === "/") {
    if (input2 === 0) {
      return "ERROR";
    }
    return input1 / input2;
  }
}

function updateDisplay(val) {
  display.textContent = val;
}

function handleClearInput() {
  // console.log("Clearing display");
  updateDisplay("0");
  total = 0;
  operation = null;
}

function handleNumberInput(input) {
  // If the display reads 0, set it to the number inputted
  // Otherwise, add number inputted to the display
  if (display.textContent === "0") {
    display.textContent = input;
  } else {
    display.textContent += input;
  }
}

function handleOperationInput(input) {
  // If we're already doing an operation, compute it, change to new operation and clear display
  // Otherwise, set operation to the input and clear the display
  if (operation !== null) {
    console.log(`Changing operation ${operation} to ${input}`);
    handleCompute();
    updateDisplay("0");
    operation = input;
  } else {
    total = display.textContent * 1;
    console.log(`Now doing operation ${input}`);
    operation = input;
    updateDisplay("0");
  }
}

function handleCompute() {
  total = calculate(total, display.textContent * 1, operation);
}

function handleEqualsInput() {
  // If there is no current operation, do nothing
  // Otherwise, do the operation with the value of the number in the display and the total and update operation to null
  if (operation === null) {
    console.log(`No operation - doing nothing`);
  } else {
    console.log(`Computing operation ${operation}`);
    handleCompute();
    display.textContent = total;
    operation = null;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    //console.log(`${event.target.innerText} pressed`);
    // Future logic to capture the button's value would go here...
    const numbers = "0123456789".split("");
    const operators = ["/", "*", "-", "+"];
    const input = event.target.innerText;
    console.log(`Clicked ${input}.`);

    if (numbers.includes(input)) {
      handleNumberInput(input);
    } else if (operators.includes(input)) {
      handleOperationInput(input);
    } else if (input === "=") {
      handleEqualsInput();
    } else if (input === "C") {
      handleClearInput();
    }
    console.log(`Total is ${total}. Display holds ${display.textContent}.`);
  });
});

clearInput();
