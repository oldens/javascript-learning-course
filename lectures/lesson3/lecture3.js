console.log("Лекція 3: Функції, Аргументи, Параметри за замовчуванням, Область видимості та Повернення значень");

// ФУНКЦІЇ
// Функції дозволяють створювати повторно використовувані блоки коду, які можна викликати багаторазово.
// Це сприяє спрощенню структури програми та зменшенню дублювання коду.

console.log("Виклик функції greeting");
function greeting() {
  console.log("Привіт, світ!");
}

greeting(); // Виведе: Привіт, світ!

// АРГУМЕНТИ (ARGUMENTS)
// Аргументи — це значення, які передаються функції під час її виклику.
// Вони дозволяють налаштовувати поведінку функції залежно від переданих даних.

console.log("Виклик функції greetingWithName з аргументом 'Аліса'");
function greetingWithName(name) {
  console.log("Привіт, " + name + "!");
}

greetingWithName("Аліса"); // Виведе: Привіт, Аліса!

// ПАРАМЕТРИ ЗА ЗАМОВЧУВАННЯМ (DEFAULT PARAMETERS)
// Параметри за замовчуванням дозволяють задавати значення для параметрів функції, якщо вони не були передані під час виклику.
// Це забезпечує надійність та запобігає помилкам.

console.log("Виклик функції greetingWithDefaultParameter без аргументів");
function greetingWithDefaultParameter(name = "Світ") {
  console.log("Привіт, " + name + "!");
}

greetingWithDefaultParameter(); // Виведе: Привіт, Світ!
greetingWithDefaultParameter("Боб"); // Виведе: Привіт, Боб!

// ОБЛАСТЬ ВИДИМОСТІ
// ГЛОБАЛЬНА ОБЛАСТЬ ВИДИМОСТІ (GLOBAL SCOPE)
// Змінні, оголошені поза функціями (var), мають глобальну область видимості. Вони доступні для використання у будь-якій частині програми.

var globalVariable = "Я глобальна";

console.log("Виклик функції showGlobalVariable");
function showGlobalVariable() {
  console.log(globalVariable);
}

showGlobalVariable(); // Виведе: Я глобальна

// ЛОКАЛЬНА ОБЛАСТЬ ВИДИМОСТІ (LOCAL SCOPE)
// Змінні, оголошені всередині функції (let), мають локальну область видимості. Вони доступні лише в межах цієї функції та зникають після її завершення.

console.log("Виклик функції localFunction");
function localFunction() {
  let localVariable = "Я локальна";
  console.log(localVariable);
}

localFunction(); // Виведе: Я локальна
// console.log(localVariable); // Викличе помилку, оскільки localVariable не доступна поза функцією

// ГЛОБАЛЬНА VS ЛОКАЛЬНА ОБЛАСТЬ ВИДИМОСТІ У ФУНКЦІЯХ (GLOBAL VS LOCAL SCOPE IN FUNCTIONS)
// Коли у функції є змінні з однаковою назвою, що існують у глобальній і локальній області, пріоритет має локальна змінна.

var variable = "Глобальна змінна";

console.log("Виклик функції showVariable");
function showVariable() {
  let variable = "Локальна змінна";
  console.log(variable);
}

showVariable(); // Виведе: Локальна змінна
console.log(variable); // Виведе: Глобальна змінна

// ПОВЕРНЕННЯ ЗНАЧЕННЯ З ФУНКЦІЇ (RETURN A VALUE FROM A FUNCTION)
// Функції можуть повертати значення за допомогою оператора return. Це значення можна використовувати поза межами функції для подальших обчислень або дій.

console.log("Виклик функції add з аргументами 5 і 3");
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result); // Виведе: 8

// Функції, які не містять оператора return, повертають undefined за замовчуванням. Це вказує на відсутність повернутого значення.

console.log("Виклик функції noReturn");
function noReturn() {
  console.log("Ця функція нічого не повертає");
}

let resultNoReturn = noReturn(); // Виведе: Ця функція нічого не повертає
console.log(resultNoReturn); // Виведе: undefined
