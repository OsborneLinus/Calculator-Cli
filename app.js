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

function handleOperationButton(operationType) {
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
  operation = operationType;
}

addButton.addEventListener("click", () => handleOperationButton("add"));
subtractButton.addEventListener("click", () =>
  handleOperationButton("subtract")
);
multiplyButton.addEventListener("click", () =>
  handleOperationButton("multiply")
);
divideButton.addEventListener("click", () => handleOperationButton("divide"));

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

//Dark Mode
let isDark = false
function darkMode(){

  if(isDark == false){

    document.body.classList.add("bg-zinc-900");
    document.querySelectorAll(".textToWhite").forEach(e =>
      e.classList.add("text-white")
    )
    document.querySelectorAll(".borderToWhite").forEach(e =>
      e.classList.add("border-white")
    )

    //DarkMode button
    document.querySelector(".darkModeBtn").classList.add("bg-zinc-900")
    document.querySelector(".darkModeBtn").classList.add("hover:bg-white")
    document.querySelector(".darkModeBtn").classList.add("hover:text-black")

    //Calculator Buttons
    document.querySelector(".bg-slate-600").classList.add("bg-neutral-900")
    document.querySelector(".bg-slate-600").classList.remove("bg-slate-600")

    document.querySelectorAll(".bg-slate-500").forEach(e => {
      e.classList.add("bg-neutral-800")
      e.classList.remove("bg-slate-500")
      e.classList.add("hover:bg-neutral-900")
      e.classList.remove("hover:bg-slate-600")
    })

    document.querySelectorAll(".bg-slate-400").forEach(e => {
      e.classList.add("bg-neutral-700")
      e.classList.remove("bg-slate-400")
      e.classList.add("hover:bg-neutral-800")
      e.classList.remove("hover:bg-slate-500")
    })

    document.querySelectorAll(".bg-orange-500").forEach(e => {
      e.classList.add("bg-orange-800")
      e.classList.remove("bg-orange-500")
      e.classList.add("hover:bg-orange-900")
      e.classList.remove("hover:bg-orange-600")
    })
    isDark = true
  }
  else{
    document.body.classList.remove("bg-zinc-900");
    document.querySelectorAll(".textToWhite").forEach(e =>
      e.classList.remove("text-white")
    )
    document.querySelectorAll(".borderToWhite").forEach(e =>
      e.classList.remove("border-white")
    )

    //DarkMode button
    document.querySelector(".darkModeBtn").classList.remove("bg-zinc-900")
    document.querySelector(".darkModeBtn").classList.remove("hover:bg-white")
    document.querySelector(".darkModeBtn").classList.remove("hover:text-black")

    //Calculator Buttons
    document.querySelector(".bg-neutral-900").classList.add("bg-slate-600")
    document.querySelector(".bg-neutral-900").classList.remove("bg-neutral-900")

    document.querySelectorAll(".bg-neutral-800").forEach(e => {
      e.classList.remove("bg-neutral-800")
      e.classList.add("bg-slate-500")
      e.classList.remove("hover:bg-neutral-900")
      e.classList.add("hover:bg-slate-600")
    })

    document.querySelectorAll(".bg-neutral-700").forEach(e => {
      e.classList.remove("bg-neutral-700")
      e.classList.add("bg-slate-400")
      e.classList.remove("hover:bg-neutral-800")
      e.classList.add("hover:bg-slate-500")
    })

    document.querySelectorAll(".bg-orange-800").forEach(e => {
      e.classList.remove("bg-orange-800")
      e.classList.add("bg-orange-500")
      e.classList.remove("hover:bg-orange-900")
      e.classList.add("hover:bg-orange-600")
    })
    isDark = false
  }
}