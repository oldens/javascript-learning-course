# Project 1: Building a Simple JavaScript Application

Welcome to the first project of the JavaScript Learning Course! In this project, you will build a simple JavaScript application that allows users to perform basic arithmetic operations (addition, subtraction, multiplication, and division) on two numbers.

## Project Requirements

1. Create an HTML file with a form that allows users to input two numbers and select an arithmetic operation.
2. Create a JavaScript file that handles the form submission, performs the selected arithmetic operation, and displays the result.
3. Use appropriate HTML elements, such as input fields, buttons, and select dropdowns, to create the form.
4. Use JavaScript to validate the user input and ensure that the input values are valid numbers.
5. Display the result of the arithmetic operation on the web page.

## Example

Here is an example of what the HTML file might look like:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Arithmetic Application</title>
  <script src="app.js" defer></script>
</head>
<body>
  <h1>Simple Arithmetic Application</h1>
  <form id="arithmetic-form">
    <label for="number1">Number 1:</label>
    <input type="number" id="number1" name="number1" required>
    <br>
    <label for="number2">Number 2:</label>
    <input type="number" id="number2" name="number2" required>
    <br>
    <label for="operation">Operation:</label>
    <select id="operation" name="operation" required>
      <option value="add">Addition</option>
      <option value="subtract">Subtraction</option>
      <option value="multiply">Multiplication</option>
      <option value="divide">Division</option>
    </select>
    <br>
    <button type="submit">Calculate</button>
  </form>
  <h2>Result: <span id="result"></span></h2>
</body>
</html>
```

Here is an example of what the JavaScript file might look like:

```javascript
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("arithmetic-form");
  const resultSpan = document.getElementById("result");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const operation = document.getElementById("operation").value;

    if (isNaN(number1) || isNaN(number2)) {
      resultSpan.textContent = "Please enter valid numbers.";
      return;
    }

    let result;
    switch (operation) {
      case "add":
        result = number1 + number2;
        break;
      case "subtract":
        result = number1 - number2;
        break;
      case "multiply":
        result = number1 * number2;
        break;
      case "divide":
        if (number2 === 0) {
          resultSpan.textContent = "Cannot divide by zero.";
          return;
        }
        result = number1 / number2;
        break;
      default:
        resultSpan.textContent = "Invalid operation.";
        return;
    }

    resultSpan.textContent = result;
  });
});
```

## Conclusion

In this project, you built a simple JavaScript application that allows users to perform basic arithmetic operations on two numbers. You learned how to create an HTML form, handle form submissions with JavaScript, validate user input, and display the result on the web page. This project helps you apply your knowledge of JavaScript and HTML to create a functional web application.
