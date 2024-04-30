// export const name = "John";
// const age = 11;
// const sex = "male";
// export { 
//   age as age1, 
//   sex
// };
// // export default {
// //   age: 30,
// // }
// profile.js
// var firstName = "Michael";
// var lastName = "Jackson";
// var year = 1958;
// export function area(radius) {
//   return Math.PI * radius * radius;
// }

// export function circumference(radius) {
//   return 2 * Math.PI * radius;
// }

// // export default {
// //   name: "John",
// //   age: 11,
// //   sex: "male",
// // }

// // 不报错
// // function foo(x, x, y) {
// //   // ...
// //   console.log(x)
// // }
// // foo(1,2,3)

// // // 报错
// function foo(x, x, y = 1) {
//   // ...
// }

// var x = 1;
// function foo(x, y) {
//   var x = 3;
//   // y();
//   console.log(x);
// }

// foo(666)
// console.log(x)
// var x = 1;
// function foo(x, y = function() { x = 2; }) {
//   x = 3;
//   y();
//   console.log(x);
// }

// foo() // 2
// x // 1

// 报错
// function doSomething(a, b = a) {
//   'use strict';
//   // code
// }

// 报错
// const doSomething = function ({a, b}) {
//   'use strict';
//   // code
// };

// // 报错
// const doSomething = (...a) => {
//   'use strict';
//   // code
// };

// const obj = {
//   // 报错
//   doSomething({a, b}) {
//     'use strict';
//     // code
//   }
// }

