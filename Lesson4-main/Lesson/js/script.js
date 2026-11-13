// області видимості — области видимости
//const a = 5;
//if (true) {
//console.log("Block", a);
//const b = 10;
//}
//console.log("Global", b);
//console.log(a);

// Цикли — циклы (while, do while, for, break && continue)

//while
//let a = 0;
//while (a < 5) {
//a++;
//console.log("a", a);
//}

//let a = 3;
//while (a) {
//console.log("a", a);
//a--;
//}

//let a = 3;
//while (a) console.log(a--);

// do while
/*let a = 0;
do {
  console.log(a);
  a++;
} while (a < 5);*/

//for
/*let a = 0;
for (; a < 3; a++) {
  console.log(a);
}*/

//break && continue
/*let summ = 0;
while (true) {
  let value = +prompt("Введіть будь-яке число");
  if (!value) break;
  summ += value;
}
console.log("Summ", summ);*/

/*for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}*/

//Array

//let arr = ["Apple", "Orange", "Plum"];
/*console.log(arr);

arr[2] = "Lemon";
console.log(arr[2]);
arr[3] = "Cherry";
console.log(arr.length);
arr2 = [1, "Hello", { key: "Bye" }];
console.log(arr2);

arr.push("Tomat");
console.log(arr);
arr.pop();
console.log(arr);

arr.shift();
arr.unshift("Tomat");

console.log(arr); */

//for (let i = 0; i < arr.length; i++) {
//console.log(arr[i]);
//}
/*for (let item of arr) {
  console.log(item);
}*/
/*for (let key in arr) {
  console.log(arr[key]);
}*/

/*let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[2]);*/

// методи присвоєння
/*let a = 5;
let b = a;
//console.log(a);
a = 10;

console.log(a);
console.log(b);*/

/*let arr = [1, 2, 3];
let arr2 = arr;
arr.push(4);
console.log(arr);*/

//let arr = ["a", "b", "c", "d", "f"];
//delete arr[2];
//console.log(arr);
//arr.splice(2, 1);
//console.log(arr);
//console.log(arr.slice(1, 3));

//let a = [1, 2, 3];
//console.log(arr.concat(a, "test"));

//console.log(arr.indexOf("c", 1));
//console.log(arr.indexOf("c"));
//console.log(arr.includes("c"));

//find
/*const fruts = [
  {
    id: 0,
    name: "Apple",
  },
  {
    id: 1,
    name: "Orange",
  },
  {
    id: 3,
    name: "Cherry",
  },
];
//console.log(fruts.find((item) => item.id === 3));
//console.log(fruts.filter((item) => item.id > 3));
//map

let result = fruts.map((item) => item.name.length);
console.log(result);*/

/*let names = "Anna, Olya, Liza, Varda";
let arr = names.split(", ");
console.log(arr);
let newString = arr.join(", * ");
console.log(newString);*/

/*let arr = [1, 2, 3, 4, 5];
let red = arr.reduce((summ, item) => summ + item);
console.log(red);
*/

/*let arr = [23, 35, 66];
let summ = arr.reduce((sum, item) => sum + item) / arr.length;
console.log(summ);*/
