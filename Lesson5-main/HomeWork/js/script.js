// FUNCTION
/*function showMessage(name, city) {
  console.log(" Hello, my name is " + name + " I'am from " + city);
}
showMessage("Nata", "Kyiv");
showMessage("Olga", "Lviv");*/
/*const userName = "Ann";

const sayHi = function () {
  let message = "Hello, my name ";
  console.log(message + userName);
};
sayHi();*/

/*function sum(a, b) {
  return a + b;
}
let result = sum(7, 8);
console.log(result);*/

/*const testFunk = function (a, b) {
  console.log("a :", a);
  console.log("b :", b);
  return;
};
testFunk(5, 8);*/

//порядок виконання коду

/*const a = function () {
  console.log("function a");
  b();
  c();
};
const b = function () {
  console.log("function b");
};
const c = function () {
  console.log("function c");
};
a();*/

// аргументи і rest
/*const addName = function () {
  const arg = Array.from(arguments);
  console.log(arguments);
};
addName(1, 2, 3);
addName(1, 2, 3, 76, 88, 145);
addName("Anna , Karla");*/

//rest
/*const addName = function (...arg) {
  console.log(arg);
};
addName(1, 2, 3);*/

// callback
/*function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
}
function showOk() {
  console.log("You say Ok");
}
function showCancel() {
  console.log("You say No");
}
ask("Yes or no?", showOk, showCancel);*/

//hof
/*const hello = function (name) {
  console.log(`Hello,${name}`);
};
const searchName = function (callback) {
  const name = "Ivan";
  callback(name);
};
searchName(hello);
hello("Anna");*/

/*function checkAge(age) {
  if (age > 18) {
    return console.log("Hello");
  }
  return console.log("Good Bye");
}
checkAge(5);*/

/*function showMovie(age) {
  if (age < 21) {
    return;
  }
  return console.log("Go to movie!");
}
showMovie(33);*/

// стрілочні функції
/*const test = (arg) => {
  console.log(arg);
};
test("Hello World!");*/

/*const showMovie = (age) => {
  if (age < 21) {
    return console.log("Hello!");
  }
  return console.log("Bye!");
};
showMovie(18);*/

/*const a = () => {
  console.log("a");
};
const b = () => {
  console.log("b");
};
const c = () => {
  console.log("c");
  a();
  b();
};
c();*/

/*const addNumber = (number) => {
  let summ = Number(number) + 10;
  return console.log(summ);
};

console.log(document);
const numberRef = document.querySelector('input[name="number"]');

const buttonRef = document.querySelector("button");

buttonRef.addEventListener("click", () => addNumber(numberRef.value));*/
