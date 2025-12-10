/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let firstNumber = "";
let secondNumber = "";
let currentOperator = false;

// keep track of the operator

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const clickedButton = event.target;
    const buttonText = clickedButton.innerText;

    if (clickedButton.classList.contains("number")) {
      handleNumberClick(buttonText);
    }

    if (clickedButton.classList.contains("operator")) {
      // we are dealing with an operator
      console.log("You are an operator");
    }

    if (clickedButton.classList.contains("equals")) {
      // we are dealing with the equal sign
      console.log("You are the equal sign");
    }
  });
});

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
function updateDisplay(text) {
  display.innerText = text;
}

function handleNumberClick(numberText) {
  if (currentOperator === false) {
    // no operator selected, must fill first number
    firstNumber = firstNumber + numberText;
    updateDisplay(firstNumber);
  } else {
    secondNumber = secondNumber + numberText;
    updateDisplay(secondNumber);
  }
}
