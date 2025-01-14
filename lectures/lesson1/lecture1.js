console.log("Привіт, JavaScript!");

// ВСТУПНА ЧАСТИНА
// JavaScript — це мова програмування, яка дозволяє створювати динамічні веб-сторінки.
// Вона використовується для додавання інтерактивності, наприклад: реагування на події, динамічної зміни контенту тощо.

// ВИКОНАННЯ JAVASCRIPT
// Код JavaScript можна виконувати в консоль розробника браузера. 
// Приклад (вставте цей код у консоль браузера):
console.log("Привіт, JavaScript!");

// Інші способи виконання:
// - Вбудований скрипт у HTML: <script>console.log("Hello!");</script>
// - Зовнішній файл: Підключення через <script src="script.js"></script>

// КОМЕНТУВАННЯ КОДУ
// Однорядковий коментар пояснює один рядок
/* Багаторядковий коментар
   використовується для пояснення
   кількох рядків */

// ЗМІННІ

// ОГОЛОШЕННЯ ЗМІННИХ
var globalVar = "Це var — глобальна змінна"; // Застарілий спосіб, уникайте використання
let localVar = "Це let — локальна змінна"; // Більш сучасний спосіб
const constantVar = "Це const — константа"; // Константа, значення не можна змінити

// Чутливість до регістру
let myVariable = "CamelCase"; // camelCase — для змінних
let MyVariable = "PascalCase"; // PascalCase — для класів
let my_variable = "snake_case"; // snake_case — іноді використовується в специфічних завданнях
const MY_CONSTANT = "UPPER_CASE"; // UPPER_CASE — для констант

// ОПЕРАТОР ПРИСВОЄННЯ
let a = 5; // Присвоюємо значення 5 змінній a
a = a + 1; // Оновлюємо значення: тепер a дорівнює 6

// ІНІЦІАЛІЗАЦІЯ ЗМІННИХ
let initialized = "Ініціалізована змінна"; // Одночасне оголошення і присвоєння значення
let uninitialized; // Змінна оголошена, але не має значення
console.log(uninitialized); // Виведе: undefined

// ТИПИ ДАНИХ

// Примітивні типи
let numberType = 42; // number
let stringType = "Привіт!"; // string
let booleanType = true; // boolean
let undefinedType; // undefined
let nullType = null; // null
let symbolType = Symbol("унікальний"); // symbol
let bigintType = 123456789012345678901234567890n; // bigint

// Складний тип
let objectType = { key: "value" }; // object
let arrayType = [1, 2, 3]; // масив (array)
let functionType = function () {
  console.log("Це функція");
}; // функція (function)

// Динамічна типізація
let dynamicVariable = 10; // number
console.log(typeof dynamicVariable); // Виведе: number
dynamicVariable = "Тепер це рядок";
console.log(typeof dynamicVariable); // Виведе: string

// Оператор typeof
console.log(typeof 42); // Виведе: number
console.log(typeof "JavaScript"); // Виведе: string
console.log(typeof true); // Виведе: boolean
console.log(typeof undefined); // Виведе: undefined
console.log(typeof null); // Виведе: object (особливість мови!)
console.log(typeof Symbol("id")); // Виведе: symbol
console.log(typeof 123n); // Виведе: bigint
console.log(typeof {}); // Виведе: object
console.log(typeof []); // Виведе: object
console.log(typeof function () {}); // Виведе: function

// Add event listener for the button with id 'myFirstButtonId'
document.getElementById("myFirstButtonId").onclick = function(event) {
  event.preventDefault(); // Зупиняє стандартну дію події
  alert("Hello World!");
};
