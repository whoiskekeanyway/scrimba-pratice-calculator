function grabNums() {
  num1 = parseFloat(document.getElementById("num1-el").value);
  num2 = parseFloat(document.getElementById("num2-el").value);
}

let sumEl = document.getElementById("sum-el");

// Create four functions: add(), subtract(), divide(), multiply()
function add() {
  grabNums();
  const result = num1 + num2;
  sumEl.textContent = `Result: ${result}`;
  console.log(result);
}

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

// Call the correct function when the user clicks on one of the buttons

// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
