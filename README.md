# JavaScript Learning Course

Welcome to the JavaScript Learning Course! This course is designed to help students learn JavaScript from the basics to advanced topics. The course materials include lectures, exercises, and projects to provide a comprehensive learning experience.

## Table of Contents

1. [Lectures](#lectures)
   - [Lecture 1: JavaScript Basics](lectures/lecture1.md)
   - [Lecture 2: JavaScript Functions](lectures/lecture2.md)
2. [Exercises](#exercises)
   - [Exercise 1: JavaScript Variables](lectures/lesson1/exercise1.md)
   - [Exercise 2: JavaScript Loops](lectures/lesson1/exercise2.md)
3. [Projects](#projects)
   - [Project 1: Building a Simple JavaScript Application](projects/project1.md)

## Lectures

The lectures cover various topics in JavaScript, starting from the basics and progressing to more advanced concepts. Each lecture includes explanations, examples, and code snippets to help you understand the concepts better.

- [Lecture 1: JavaScript Basics](lectures/lecture1.md)
- [Lecture 2: JavaScript Functions](lectures/lecture2.md)

## Exercises

The exercises are designed to help you practice and reinforce the concepts you learn in the lectures. Each exercise includes instructions, examples, and tasks for you to complete.

- [Exercise 1: JavaScript Variables](lectures/lesson1/exercise1.md)
- [Exercise 2: JavaScript Loops](lectures/lesson1/exercise2.md)

## Projects

The projects provide an opportunity for you to apply your knowledge and skills to build real-world applications. Each project includes requirements, examples, and guidelines to help you complete the project successfully.

- [Project 1: Building a Simple JavaScript Application](projects/project1.md)

## Additional Information

For additional information and resources, please refer to the following:

- [MDN Web Docs: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [W3Schools: JavaScript Tutorial](https://www.w3schools.com/js/)

## Detailed Course Content

### Variables

- **Declaration of Variables**: Explanation of `var`, `let`, and `const` keywords for declaring variables, and the differences between them (scope, reassignment, etc.).
- **Case Sensitivity**: camelCase (variable and function names), PascalCase (classes), snake_case, UPPER_CASE (constants), kebab-case (file names, CSS classes).
- **Assignment Operator**: How the `=` operator is used to store values in variables. Explanation of basic assignment principles, including updating existing values.
- **Initialization of Variables**: Declaring a variable and assigning a value to it simultaneously. Best practices to avoid errors.
- **Data Types**: Primitive types: number, string, boolean, undefined, null, symbol, bigint. Complex type: object (including Functions, Arrays). Dynamic typing. Operator: `typeof`.

### Operators

- **Basic Math**: Addition, subtraction, multiplication, and division. Order of operations. Using `++` and `--` operators to increment or decrement a variable by 1.
- **Decimal Numbers**: Working with floating-point numbers. Explanation of potential precision issues when performing operations with decimal numbers. Multiplication and division using decimal numbers.
- **Remainder Operator**: Explanation of the `%` operator for finding the remainder of a division.
- **Shortened Operators**: Using shortened operators like `+=`, `-=`, `*=`, `/=` to update variable values.

### Strings

- **Working with Strings**: Basics of working with strings: creation, concatenation, inserting variables into strings. Square brackets for accessing string characters by index.
- **Escaping Characters in Strings**: How to avoid issues with special characters like quotes using the escape character (`\`). Escape sequences. Using quotes. Escape sequences allow inserting special characters into strings.
- **String Methods**: Using built-in methods to determine the length of a string and create new strings.
- **String Immutability**: In JavaScript, strings are immutable, meaning they cannot be changed after creation. Any change to a string creates a new string, while the original remains unchanged.
- **Finding the Nth Character**: Using the character index to find any character in a string. Indexes start at zero, meaning the first character has an index of 0.
- **Word Blanks**: Inserting variables into text templates allows creating dynamic sentences. This is used to create interactive text applications or games.

### Logical Operators and Conditional Statements

- **Boolean Values**: Boolean values are two possible values: true or false, used to check conditions. They are the basis for controlling the flow of program execution.
- **Conditional Operators (if else statements)**: The `if` operator allows executing code if a certain condition is true. The `else` operator specifies an alternative block of code to be executed if the condition in `if` is false.
- **Equality Operators**: Equality operators (`==` and `===`) are used to compare values. `==` checks only the value, while `===` also checks the data type.
- **AND / OR Operators**: The `&&` (AND) and `||` (OR) operators allow combining multiple conditions. `&&` returns true if all conditions are true, while `||` returns true if at least one condition is true.
- **Logical Order in if-else Statements**: Conditions in an if-else statement are checked from top to bottom, so it's important to place them in a logically correct order to ensure proper code execution.
- **Ternary Operator**: The ternary operator (`? :`) allows shortening an if-else statement to a single line. It is used to return one of two values depending on the condition.
- **Switch Statements**: The switch statement allows checking one variable against multiple possible values. Instead of many if-else statements, a more compact structure is used.
- **Return Early Pattern for Functions**: The return early pattern allows terminating the function execution if a condition is met. This improves performance and makes the code more understandable.

### Functions

- **Functions**: Functions allow creating reusable blocks of code that can be called multiple times. This helps simplify the program structure and reduce code duplication.
- **Arguments**: Arguments are values passed to a function when it is called. They allow customizing the function's behavior based on the passed data.
- **Default Parameters**: Default parameters allow setting values for function parameters if they were not passed during the call. This ensures reliability and prevents errors.

### Scope

- **Global Scope**: Variables declared outside functions (var) have a global scope. They are available for use in any part of the program.
- **Local Scope**: Variables declared inside a function (let) have a local scope. They are available only within that function and disappear after it completes.
- **Global vs Local Scope in Functions**: When a function has variables with the same name existing in both global and local scope, the local variable takes precedence.
- **Return a Value from a Function**: Functions can return values using the return operator. This value can be used outside the function for further calculations or actions. Functions that do not contain a return operator return undefined by default. This indicates the absence of a returned value.

### Arrays

- **Nested Arrays**: Arrays can contain other arrays as their elements, forming multidimensional structures. This is convenient for representing tables, matrices, or complex data.
- **Access Array Data**: Array elements are accessible by their indexes, starting from zero. This allows retrieving or using the values stored in the array.
- **Modify Array Data**: Array elements can be changed by assigning a new value to an index. This allows updating information without creating a new array.
- **Access Multi-Dimensional Arrays**: To access elements of nested arrays, multiple indexes are used. The first index points to the array, and the second to the element in that nested array.
- **Basic Methods**: `push()` adds one or more elements to the end of an array. `pop()` removes the last element from an array and returns it. `shift()` removes the first element of an array, and the remaining elements shift one position to the left. `unshift()` adds one or more elements to the beginning of an array, shifting all other elements to the right. Array Iteration Methods: `map`, `filter`, or `reduce`.

### DOM Basics

- **DOM (Document Object Model)**: DOM is a programming interface model for HTML documents that represents the structure of a web page as a tree of objects. JavaScript can use the DOM to manipulate page elements, create, change, or delete them in real-time. DOM is a way to represent an HTML document as a tree, where each page element is a node. Through the DOM, JavaScript accesses HTML and allows changing both the page structure and its styles or content.
- **Basic Actions with DOM**: Accessing Elements: `document.querySelector`: Selects the first element that matches the specified selector (class, id, tag). `document.querySelectorAll`: Selects all elements that match the specified selector and returns a NodeList. `getElementById`: Selects an element by its unique identifier. `getElementsByClassName` / `getElementsByTagName`: Select elements by class or tag.
- **Changing Content**: `innerHTML`: Changes the entire HTML content of an element. `textContent`: Changes the text content of an element without HTML formatting.
- **Adding and Removing Elements**: `createElement`: Creates a new element. `appendChild`: Adds a new element as a child to an existing one. `removeChild`: Removes an element from the page.

### Events in DOM

- **Events**: Events allow responding to user actions (e.g., clicks, text input) or system events. Adding Event Handlers: `addEventListener`: Adds an event listener to an element. For example, responding to clicks, mouse hover, content change.
- **Typical Events**: `click` — Clicking on an element. `mouseover` — Hovering the mouse cursor over an element. `keydown` — Pressing a key on the keyboard. `input` — Changing the text content in a form.

### Attributes and Styles

- **Working with Attributes**: `getAttribute` / `setAttribute`: Getting or setting an attribute value. `removeAttribute`: Removing an attribute.
- **Changing Styles**: `style`: Changing the inline styles of an element. `classList`: Allows adding, removing, or toggling classes (add, remove, toggle).

### Interaction with Forms

- **value**: Getting or changing the value of form elements (text fields, checkboxes, etc.). Events like `submit`: Used to process data entered in forms.

### Navigation DOM

- **DOM Navigation**: DOM allows moving between page nodes. `parentNode`: Gets the parent element. `childNodes` / `children`: Access to child nodes. `nextSibling` / `previousSibling`: Getting adjacent nodes.

### Conclusion

Working with the DOM is the foundation for creating dynamic and interactive web applications. The DOM provides tools for selecting elements, managing events, and changing the page structure, making web applications interactive and flexible.

### Loops

- **Loops in JavaScript**: Loops are used to perform repetitive actions, such as iterating over arrays or executing code until a certain condition is met.
- **while Loop**: Executes code as long as the specified condition remains true. If the condition becomes false, the loop stops.
- **do...while Loop**: Executes code at least once, regardless of the condition, and checks it only after the first iteration.
- **for Loop**: A loop with a defined number of iterations, including initialization, condition check, and variable updates in each iteration.
- **for...of Loop**: Used to iterate over elements of arrays or other iterable objects, providing convenient access to values.
- **for...in Loop**: Iterates over object keys, allowing working with all its properties.
- **Note on Using Loops**: Choose the type of loop depending on the task: while for an undefined number of iterations, for for a known number of iterations, for...of for working with values, and for...in for objects. For complex iterative tasks, instead of loops, you can use array methods like map, filter, or reduce.

### Error Handling

- **Error Handling**: Error handling ensures code stability and reliability, even if something goes wrong. `try…catch`: A construct for handling errors that allows executing certain code and responding to errors. `console.error`: Used to output error messages to the console. Standard Errors: Handling typical JavaScript errors like SyntaxError, ReferenceError, and others.

### Queue

- **Queue**: A queue is a data structure where the first element added is the first to be removed (FIFO). Using arrays and functions, you can model a queue by adding elements to the end and removing them from the beginning.

### Debugging Approach

- **Effective Debugging**: Effective debugging helps find and fix errors in the code. Developer Tools: Available in most browsers, these tools allow viewing HTML, CSS, and JavaScript, setting breakpoints, and viewing variables in real-time. Console: Use `console.log`, `console.error` to display data and errors during code execution. Debugger: The `debugger` keyword pauses code execution at the desired location.

### Asynchronous Programming

- **Asynchronous Programming**: Asynchronous programming allows performing operations without blocking the main code flow. This is important for working with timers, server requests, and other long-running operations. `setTimeout`: Used to execute code after a certain period. `Promise`: A structure for managing asynchronous operations with the ability to handle successful and unsuccessful results. `async/await`: Modern syntax for writing asynchronous code, making it readable and easy to use.

### Objects

- **Building Objects**: Objects are a data structure that stores values in key-value pairs. They allow modeling real objects with their properties and behavior.
- **Dot Notation**: Dot notation is used to access object properties by their names. This is the most convenient way to work with simple objects.
- **Bracket Notation**: Bracket notation allows accessing object properties using dynamic or string keys. It is used when keys are stored in variables or contain special characters.
- **Variables as Keys**: Variables can store object key names, allowing dynamic access to values. This is especially useful for working with data obtained during program execution.
- **Updating Object Properties**: Existing object properties can be changed by assigning them a new value. This allows updating data without creating a new object.
- **Add New Properties to Object**: New properties can be added to an object using dot or bracket notation. This allows dynamically expanding objects.
- **Delete Properties from Object**: Object properties can be deleted using the `delete` operator. This is useful for removing unnecessary or temporary data.
- **Objects for Lookups**: Objects are used as "dictionaries" where keys correspond to concepts, and values to their definitions. This provides quick access to information.
- **Testing Objects for Properties**: The `hasOwnProperty()` method or the `in` operator allows checking if a certain property exists in an object. This prevents errors when accessing non-existent properties.
- **Manipulating Complex Objects**: Complex objects can contain arrays, nested objects, or both simultaneously. Their manipulation requires step-by-step access to the desired properties or elements.
- **Nested Objects**: Objects can contain other objects as their properties. This allows representing complex data, such as hierarchical structures. Dot or bracket notation is used to access nested properties.

### Class Syntax

- **Class Syntax**: Class syntax in JavaScript is a modern way to create objects with shared properties and methods. It allows using an object-oriented approach in programming, providing a clear structure for creating reusable and organized code components.
- **Key Points**:
  1. **Class as a Template**: A class is a "template" for creating objects with the same sets of properties (attributes) and methods (functions).
  2. **Constructor**: Classes use the `constructor` method, which is automatically called when a new object is created and allows setting initial property values.
  3. **Class Methods**: Methods declared inside a class can be called by objects created from that class.
  4. **Inheritance**: Classes allow creating new classes that inherit properties and methods from another class. This ensures code reuse.
  5. **Readability and Structure**: Class syntax makes code more readable and structured, facilitating project maintenance and expansion.

### Useful Features

- **Random Fractions and Whole Numbers**: JavaScript allows creating random fractional numbers using `Math.random()`. To get random whole numbers, use `Math.floor()` along with `Math.random()` to round the result.
- **parseInt Function**: The `parseInt()` function converts a string to an integer. It can take a second argument to specify the numeral system (e.g., decimal, binary).
- **Prevent Object Mutation**: The `Object.freeze()` method makes an object immutable, blocking the addition, deletion, or modification of its properties. This is useful for creating constant data structures.
- **Rest Operator**: The rest operator (`...`) collects all "extra" function arguments into an array. It is used to work with an undefined number of parameters or to distribute data.
- **Spread Operator**: The spread operator (`...`) allows splitting an array or object into individual elements. It is used for copying, merging data, or passing values to functions.
- **Destructuring Assignment**: Destructuring allows conveniently extracting values from arrays or objects and assigning them to variables. This simplifies data access and makes the code more readable.
- **Template Literals**: Template literals (````) allow creating strings that include variables and expressions using interpolation `${}`. They also support multiline strings.
- **Simple Fields**: Simple fields in objects allow reducing syntax when the property name matches the variable name containing the value.
- **Declarative Functions**: Functions can be declared without binding to variables inside an object. This reduces the amount of code and makes it easier to read.
- **Arrow Functions, Destructuring, Template Strings**: Using arrow functions to simplify syntax. Introducing `let` and `const` keywords, destructuring, template strings, and other new ES6 features.

### Working with JSON

- **JSON Basics**: JSON (JavaScript Object Notation) is a text format for storing and exchanging data between the server and the client. `JSON.parse`: Converts a JSON string to a JavaScript object. Used to work with data received from servers. `JSON.stringify`: Converts a JavaScript object to a JSON string for storing or transmitting data.

### Modules

- **Modules**: How to split code into files using import and export modules. Explanation of the benefits of a modular approach for organizing projects.
