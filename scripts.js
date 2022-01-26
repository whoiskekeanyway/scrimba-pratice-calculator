// Function to grab the numbers valua via the input fields
// parseFloat is used to convert the string to a number

function grabNums() {
  num1 = parseFloat(document.getElementById("num1-el").value);
  num2 = parseFloat(document.getElementById("num2-el").value);
}

// sumEl is the element that displays the result
let sumEl = document.getElementById("sum-el");

// textContent is used to display the result in the element
// Create four functions: add(), subtract(), divide(), multiply()

// result is the result of the operation
function add() {
  grabNums();
  const result = num1 + num2;
  sumEl.textContent = `Result: ${result}`;
  console.log(result);
}

// Backtickls are used to insert variables into strings

function subtract() {
  grabNums();
  const result = num1 - num2;
  sumEl.textContent = `Result: ${result}`;
  console.log(result);
}

function multiply() {
  grabNums();
  const result = num1 * num2;
  sumEl.textContent = `Result: ${result}`;
  console.log(result);
}

function divide() {
  grabNums();
  const result = num1 / num2;
  sumEl.textContent = `Result: ${result.toFixed(7)}`;
  console.log(result);
}

