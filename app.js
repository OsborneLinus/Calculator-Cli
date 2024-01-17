const numberButtons = document.querySelectorAll(".number-button");
const insertPlace = document.querySelector("#output");
let currentNumber = "";
let firstNumber = null;
let operation = null;
let result = null;

function handleNumberInput(number) {
  const newSpan = document.createElement("span");
  if (number === ",") {
    currentNumber += ".";
    newSpan.innerText = ".";
  } else {
    currentNumber += number;
    newSpan.innerText = number;
  }
  insertPlace.appendChild(newSpan);
  console.log("Pressed Number is: ", number);
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const number = button.innerText;
    handleNumberInput(number);
  });
});
window.addEventListener("keydown", (event) => {
  const key = event.key;
  const number = parseInt(key);
  if (!isNaN(number)) {
    handleNumberInput(number.toString());
  } else if (key === "+") {
    handleOperationButton.bind(addButton, "add")();
  } else if (key === "-") {
    handleOperationButton.bind(subtractButton, "subtract")();
  } else if (key === "*") {
    handleOperationButton.bind(multiplyButton, "multiply")();
  } else if (key === "/") {
    handleOperationButton.bind(divideButton, "divide")();
  }
});
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const calculateButton = document.getElementById("calculate");
const clearButton = document.getElementById("clear");

function handleOperationButton(event) {
  const operation = event.target.dataset.operation;
  if (firstNumber === null) {
    firstNumber = parseFloat(currentNumber);
    currentNumber = "";
    insertPlace.innerText = "";
  } else if (currentNumber !== "") {
    performCalculation();
    currentNumber = "";
    insertPlace.innerText = "";
  }
  insertPlace.innerText = "";
  this.operation = operation;
}

addButton.addEventListener("click", handleOperationButton);
subtractButton.addEventListener("click", handleOperationButton);
multiplyButton.addEventListener("click", handleOperationButton);
divideButton.addEventListener("click", handleOperationButton);

calculateButton.addEventListener("click", () => {
  if (firstNumber !== null && currentNumber !== "") {
    performCalculation();
  }
});
clearButton.addEventListener("click", () => {
  firstNumber = null;
  currentNumber = "";
  insertPlace.innerText = "";
});

function performCalculation() {
  const secondNumber = parseFloat(currentNumber);
  switch (operation) {
    case "add":
      result = firstNumber + secondNumber;
      break;
    case "subtract":
      result = firstNumber - secondNumber;
      break;
    case "multiply":
      result = firstNumber * secondNumber;
      break;
    case "divide":
      result = firstNumber / secondNumber;
      break;
  }
  console.log("Result: ", result);
  firstNumber = result;
  currentNumber = "";
  insertPlace.innerText = result;
}
