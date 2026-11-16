//------------ES6 Features--------

//1. Variables: let & const *****
/*let x = 10;
x = 20;
const y = 30; //Cannoct reassign

// Arrow Functions *****

const sum = (a, b) => a + b;
const diff = (a, b) => {
  return a - b;
};
console.log("Arrow Function Add Result", add(5, 3));*/

/*const ob1 = {
  p1: "test",
  p2: function () {
    console.log(this.p1);
  },
};
const ob2 = {
  p1: "test",
  p2: () => {
    console.log(this.p1);
  },
};
ob1.p2();
ob2.p2();*/

//CLASSES ****

//Template Literales *****
/*const username = "Alice";
const greeting = `Hello, ${username}!`;
const longMsg = `Lorem ipsum dolor sit amet et.
Lorem ipsum dolor sit amet et`;

console.log(greeting);*/

//5. Enhanced Object Literales
/*const username = "Alice";
const a = 1,
  b = 2;
const obj = {
  a,
  b,
  myMethod() {
    return this.a + this.b;
  },
  ["1" + 2]: a,
  [username]: b,
};
function user(name, lastName) {
  const avatar = {
    name,
    lastName,
  };
}
console.log("Enhanced Object Literal", obj.myMethod());*/

//6. Destructuring
/*const person = {
  a: "John",
  b: "Wick",
};
const { a: name1, b: lastName1 } = person;
console.log("Destructuring", name1, lastName1);

const arr = [1, 2, 3];

const [one, two, three] = arr;

console.log("Array Destructuring", one, two, three);

const func11 = ({ a: name1, b: lastName1 }) => {
  console.log("Destructuring", name1, lastName1);
};
func11(person);*/

//7. Default Parameters *****
/*function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
const funcNew = ({ a: name1, b: lastName1, age = 20 }) => {
  console.log("Destructuring", name1, lastName1, age);
};
greet();
greet("Bob");
funcNew(name);*/

//8. Rest Parameters *****
/*function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log("Rest Parameter Sum", sum(1, 2, 3, 4));*/

//9. Spread Operator
/*const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5];
console.log("Spread Operator Array", arr2);
const obj = { a: 1, b: 2 };
const obj2 = { ...obj, c: 3 };
console.log("Spread Operator Array", obj2);*/

//10. for ....of Loop ****

/*const arr = [1, 2, 3, 4];
for (const num of arr) {
  console.log("for...of loop element:", num);
}
const person = [1, 2, 3, 4];
for (const param of Object.entries(person)) {
  console.log("for...of loop element:", param);
}*/

//11.Symbols
/*const sym = Symbol("meSymbol");
const obj3 = { [sym]: "Symbol Value" };
console.log("Symbol Example", obj3[sym]);
*/

//12. Interators & Generators **

/*function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = myGenerator();
console.log("Generator:", gen.next().value);*/

//13.Map & Set
/*const myMap = new Map();

myMap.set("key", "value");
console.log("Map:", myMap.get("key"));

const mySet = new Set([1, 2, 2, 3]);
console.log("Set:", mySet.size);*/

//14.Promises(Example with async/await later)
/*const myPromise = new Promise((resolve, reject) => {
  try {
    setTimeout(() => resolve("Promise Resolved!"), 500);
  } catch (e) {
    reject(); //отклонить обещание»
  }
});

myPromise.then((result) => console.log("Promise then:", result));

//16.Proxis **
const target = {};
const handler = {
  get: function (obj, prop) {
    return prop in obj ? obj[prop] : "Property does not exist";
  },
};
const proxy = new Proxy(target, handler);
console.log("Proxy Example:", proxy.nonExistenProperty);*/

//18. Typed Arrays ***
/*const typedArray = new Int32Array([11, 2, 3]);
console.log("Typed Array", typedArray[0]);*/

//19. Array.prototype.includes *****
//проверка наличия элемента
/*const arr = [1, 2, 3];
const arrDiff = [{ a: 1 }];
arrDiff.includes({ a: 1 });
console.log("Includes", arr.includes(2));

//20.Exponentiation Operator ****
console.log("Exponentiation Operator", 2 ** 3);*/

//21. async & await *****
/*async function myAsyncFunction() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Server response"), 1000);
  });
  const result = await myPromise;
  console.log("Async/Await:", result);
}
myAsyncFunction();

async function myAsyncFunction2() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Server response"), 1000);
  });
  const result = await myPromise;
  console.log("Without Async/Await:", result);
}
myAsyncFunction2();*/

//22. Object.entreis(), Object.values(), Object.keys()

// 22. Object.entries(), Object.values(), Object.keys()
/*const person = { a: "John", b: "Wick" };
console.log("Object Entries", Object.entries(person));
console.log("Object Values", Object.values(person));
console.log("Object Keys", Object.keys(person));

// *****
const user = { name: "Alex", age: 25 };

console.log("Keys:", Object.keys(user));
console.log("Values:", Object.values(user));
console.log("Entries:", Object.entries(user));*/

// 23. String.prototype.padStart() & padEnd() ***
/*console.log("PadStart:", "5".padStart(3, "0")); // Выведет: "005"
console.log("PadEnd:", "5".padEnd(3, "0")); // Выведет: "500"*/

// 24. Rest/Spread Properties for Objects *****
/*const obj2 = { a: "123", b: "1", c: "2", d: "3" };
const { a: first2, ...rest2 } = obj2;
console.log("RestProperties", rest2);
const obj4 = { ...obj2, d: 4 };
console.log("Spread Properties Object 2", obj4);
const obj42 = { d: 4, ...obj2 };
console.log("Spread Properties Object 2", obj42);*/

// 25. Promise.prototype.finally() ****
/*myPromise
  .then(() => console.log("Promise finished"))
  .finally(() => console.log("Promise cleanup"));

  myPromise
    .then((result) => console.log("Успех:", result))
    .catch((error) => console.log("Ошибка:", error))
    .finally(() => console.log("Promise cleanup — работа полностью завершена"));*/

// 26. Asynchronous Iteration
// Асинхронная итерация
/*async function asyncIteration() {
  async function* asyncGenerator() {
    yield Promise.resolve(1);
    yield Promise.resolve(2);
  }

  for await (const num of asyncGenerator()) {
    console.log("Async Iteration", num);
  }
}

asyncIteration();*/

// 28. Array.prototype.flat(), Array.prototype.flatMap()
/*const nestedArray = [1, [2, [3, 4]]];
console.log("Flat Array", nestedArray.flat(2));

const numbers = [1, 2, 3];
const flatMapResult = numbers.flatMap((x) => [x * 2]);
console.log("Flat Map Array", flatMapResult);

// 29. String.prototype.trimStart(), String.prototype.trimEnd() ***
const stringWithWhitespace = "  Hello  ";
console.log("Trim Start", stringWithWhitespace.trimStart());
console.log("Trim End", stringWithWhitespace.trimEnd());
console.log("Trim All", stringWithWhitespace.trim());*/

// 30. Object.fromEntries() ***
/*const entries = [
  ["name", "Charlie"],
  ["age", 30],
];
const newObject = Object.fromEntries(entries);
console.log("Object.fromEntries", newObject);*/
// 31. Optional catch binding ***
/*try {
  throw new Error("Test Error");
} catch {
  console.log("Error caught without binding"); //Необязательная привязка переменной
}*/

//33. BigInt *****
/*const bigInt = 12345678901234567890n;
console.log("BigInt", bigInt);


// 34. Nullish Coalescing Operator (??) *****
const nullValue = null;
const defaultValue = nullValue ?? "Default";
console.log("Nullish Coalescing", defaultValue); // Выведет: "Default"

// 35. Optional Chaining Operator (?.) *****
const userObj = { address: { street: "Main St" } };
const street = userObj?.address?.street;
console.log("Optional Chaining", street); // Выведет: "Main St"*/
// 36. Promise.allSettled *****

/*const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);

Promise.allSettled([promise1, promise2]).then((results) => {
  console.log("Promise.allSettled", results);
});*/

// 37. import() Function (Dynamic Import) - ***** потрібна підтримка модулів
// import('./module.js').then(module => { console.log('Dynamic Import', module); });

// 38. globalThis **
/*console.log("globalThis", globalThis);

// 39. String.prototype.replaceAll()****
const text = "This is a test test";
console.log("String ReplaceAll", text.replaceAll("test", "success"));*/
// 40. Numeric Separators **
/*const largeNumber = 1_000_000;
console.log("Numeric Separators", largeNumber);

// 41. Promise.any() ****
const promise3 = Promise.reject("Error Promise 3");
const promise4 = Promise.resolve("Success Promise 4");

Promise.any([promise3, promise4])
  .then((value) => console.log("Promise.any", value))
  .catch((err) => console.error("Promise.any Rejected", err));*/

// 42. Logical Assignment Operators ****
/*let a1 = null;
a1 ??= "Default Value";
console.log("Nullish Assignment", a1);

let b1 = true;
b1 &&= "Truthy Value";
console.log("Truthy Assignment", b1);

let c1 = false;
c1 ||= "Falsy Value";
console.log("Falsy Assignment", c1);*/

// 43. Top-Level Await (Requires module context)
// const response = await fetch('https://example.com'); // Only valid inside a module (Ожидание на верхнем уровне) *****

// 44. Class Static Blocks (See Class Example) *****

// 45. .at() Method ***
/*const myArray3 = [10, 20, 30];
console.log("Array .at()", myArray3.at(-1));

const myString3 = "Hello";
console.log("String .at()", myString3.at(+0));

// 46. Error Cause ****
const originalError = new Error("Original Error");

try {
  throw new Error("Secondary Error", { cause: originalError });
} catch (error) {
  console.log("Error Cause", error.cause.message);
}

// 47. Object.hasOwn() *****
const obj5 = { name: "David" };
console.log("Object.hasOwn", Object.hasOwn(obj5, "name"));*/
