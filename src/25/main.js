// main.js
// console.log("Before require module1");
// const module1 = require("./1");
// console.log("After require module1");

// console.log("Before require module2");
// const module2 = require("./2");
// console.log("After require module2");

// console.log("Module 1 content:", module1);
// console.log("Module 2 content:", module2);

// main.mjs
// console.log("Before import module1");
// import module1 from "./1.js";
// console.log("After import module1");

// console.log("Before import module2");
// import module2 from "./2.js";
// console.log("After import module2");

// console.log("Module 1 content:", module1);
// console.log("Module 2 content:", module2);
var counter = require('./index.js').counter;
var incCounter = require('./index.js').incCounter;
var lib = require('./index.js');

console.log(counter); // 3
incCounter();
console.log(counter); // 3

console.log(lib.counter); // 4
incCounter();
console.log(lib.counter); // 5
