const buttons = document.querySelectorAll(".button");
console.log(buttons);
let total = 0;
let operation;
const display = document.querySelector("div.display");

function calculate(input1, input2, operation) {
  if (operation === "+") {
    return input1 + input2;
  } else if (operation === "-") {
    return input1 - input2;
  } else if (operation === "*") {
    return input1 * input2;
  } else if (operation === "/") {
    return input1 / input2;
  }
}

function clearInput() {
  display.textContent = "";
}

function inputNumber(input) {
  //   console.log(input);
  //   console.log(display);
  display.textContent += input;
}

function startOperation(input) {
  total = display.textContent * 1;
  operation = input;
  clearInput();
  console.log(`Now doing operation ${operation} to ${total}`);
}

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    //console.log(`${event.target.innerText} pressed`);
    // Future logic to capture the button's value would go here...
    const numbers = "0123456789".split("");
    const operators = ["/", "*", "-", "+"];

    const input = event.target.innerText;

    if (numbers.includes(input)) {
      console.log("inputted number");
      inputNumber(input);
    } else if (operators.includes(input)) {
      console.log(`starting operation ${input}`);
      startOperation(input);
    } else if (input === "=") {
      total = calculate(total, display.textContent * 1, operation);
      display.textContent = total;
      console.log(total);
    } else if (input === "C") {
      clearInput();
    }
  });
});
