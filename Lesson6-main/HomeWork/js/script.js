//Замыкание (closure)
/*function createNewSum(n) {
  return function () {
    console.log(10 * n);
  };
}
const calc = createNewSum(5);

calc();*/

/*function createNewNumber(n) {
  return function (num) {
    return n + num;
  };
}
const addfive = createNewNumber(5);
console.log(addfive(10));*/

/*function createUrl(domain) {
  return function (url) {
    return `https://${url}.${domain}`;
  };
}
const comUrl = createUrl("com");
const comUa = createUrl("ua");

console.log(comUrl("fb"));
console.log(comUrl("instagram"));
console.log(comUrl("google"));

console.log(comUa("fb"));
console.log(comUa("instagram"));
console.log(comUa("google"));*/

//THIS
/*function hello() {
  console.log("hello", this);
}
hello();

const user = {
  name: "Ivan",
  city: "Odesa",
  sayHello: hello,
};
user.sayHello();*/

/*function abc() {
  console.log("In function");
  console.log(this);
}
abc();

document.querySelector("p").onclick = abc;*/

/*function changeColor() {
  console.log(this);
  this.style.background = "green";
}
document.querySelector("div").onclick = changeColor;*/

/*function changeColor() {
  console.log(this);
  this.style.background = "green";
}
let user = document.querySelectorAll("div");
user.forEach(function (element) {
  element.onclick = changeColor;
});*/

/*const showList = () => {
  console.log();
};
showList();

const list = {
  name: ["Anna", "Olga", "Nata"],
  showList: showList,
};
list.showList();*/

/*function hello() {
  console.log(this);
}
const user = {
  name: "Ivan",
  age: 44,
  hello: hello,
  sayHelloWindow: hello.bind(window),
  info: function (city) {
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`City is ${city}`);
  },
};
user.info();

const Ann = {
  name: "Ann",
  age: 45,
};
const Nata = {
  name: "Nata",
  age: 15,
};

user.info.bind(Ann, "Kyiv")();
const nataInfo = user.info.bind(Nata, "Odessa");
nataInfo();*/

//Call

/*const userInfo = {
  name: "name",
  age: 98,
  logInfo: function (job) {
    console.group(`${name} info:`);
    console.log(`Name is : ${this.name}`);
    console.log(`Age is : ${this.age}`);
    console.log(`Job is : ${job}`);
    console.groupEnd();
  },
};

const Vano = {
  name: "Ivan",
  age: 48,
};
userInfo.logInfo.call(Vano, "developer");*/

//Apply

/*const showUserInfo = {
  name: name,
  age: 87,
  logInfo: function (job, city) {
    console.group(`${name} info:`);
    console.log(`Name is : ${this.name}`);
    console.log(`Age is : ${this.age}`);
    console.log(`Job is : ${job}`);
    console.log(`City is : ${city}`);
    console.groupEnd();
  },
};
const Vano = {
  name: "Ivan",
  age: 48,
};
showUserInfo.logInfo.apply(Vano, ["developer", "Lviv"]);*/

/*const message = function (name, stars) {
  console.log(`${name}, Welcome to ${this.hotel}, stars${stars}`);
};
const Bukovel = { hotel: "Bukovel" };
const Turist = { hotel: "Turist" };

//message.call(Bukovel, "Ivan", " 5");
//message.call(Turist, "Ivan", " ***");

message.apply(Bukovel, ["Ivan", " 5"]);
message.apply(Turist, ["Ivan", " 3"]);
message.bind(Bukovel, "Ivan", " 5")();
message.bind(Turist, "Ivan", "3")();*/

/*const cart = {
  showItems() {
    console.log("In the cart: ", this.items);
  },
};
const woman = {
  items: ["Shoes & bag"],
};
const man = {
  items: ["Shoes & trousers"],
};
const kid = {
  items: ["Shoes & jaket"],
};

//cart.showItems.bind(man)();

document
  .querySelector("#woman")
  .addEventListener("click", cart.showItems.bind(woman));

document
  .querySelector("#man")
  .addEventListener("click", cart.showItems.bind(man));

document
  .querySelector("#kid")
  .addEventListener("click", cart.showItems.bind(kid));*/

/*const infoCar = {
  name: "BMW",
  model: "M7",
  color: "white",
  showInfo: function () {
    console.log(
      "Car: " + this.name + " model: " + this.model + " color: " + this.color,
    );
  },
};
car2 = {
  name: "Opel",
  model: "Insignia",
  color: "green",
};
//infoCar.showInfo.bind(car2)();
infoCar.showInfo.call(car2);
infoCar.showInfo.apply(car2);*/
