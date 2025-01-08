# Exercise 2: JavaScript Loops

Welcome to the second exercise of the JavaScript Learning Course! In this exercise, you will practice working with JavaScript loops.

## Instructions

1. Create a `for` loop that prints the numbers from 1 to 10 to the console.
2. Create a `while` loop that prints the numbers from 10 to 1 to the console.
3. Create a `for` loop that iterates over an array of numbers and prints each number to the console.
4. Create a `while` loop that iterates over an array of strings and prints each string to the console.

## Example

Here is an example of how to complete the exercise:

```javascript
// Step 1
for (let i = 1; i <= 10; i++) {
  console.log(i); // Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

// Step 2
let j = 10;
while (j >= 1) {
  console.log(j); // Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
  j--;
}

// Step 3
let numbers = [1, 2, 3, 4, 5];
for (let k = 0; k < numbers.length; k++) {
  console.log(numbers[k]); // Output: 1, 2, 3, 4, 5
}

// Step 4
let strings = ["Hello", "World", "JavaScript"];
let l = 0;
while (l < strings.length) {
  console.log(strings[l]); // Output: Hello, World, JavaScript
  l++;
}
```

## Conclusion

In this exercise, you practiced working with JavaScript loops, including `for` loops and `while` loops. You learned how to use loops to iterate over numbers and arrays, and print values to the console.
