// import {firstName,lastName} from './esm.mjs'
// firstName = "111"
// firstName = "111"
// console.log(firstName,0o11)
// function foo() {
//   export default 'bar' // SyntaxError
// }
// foo()
// import * as circle from './esm.mjs';

// // 下面两行都是不允许的
// circle.foo = 'hello';
// circle.area = function () {};
// export * from "./esm.mjs"
// import * as module1 from "./esm.mjs"
// import moduleName2 from './esm.mjs'
// console.log(module1,moduleName2)
// import("./esm.mjs")
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {});
// var a = [];
// for (var i = 0; i < 10; i++) {
//   a[i] = ((index) => {
//     return function () {
//       console.log(index);
//     };
//   })(i);
// }
// a[6](); // 10
// 报错
// function func(arg) {
//   {
//     let arg;
//   }
// }
// func() // 报错
// 情况一
// function f() {
//   console.log("I am outside!");
// }

// (function () {
//   if (false) {
//     // 重复声明一次函数f
//     function f() {
//       console.log("I am inside!");
//     }
//   }

//   f();
// })();
// 第一种写法，报错
// if (true) let x = 1;
// 报错
// 'use strict';
// if (true)
//   function f() {}
// }
class Triangle {
  _count = 0;
  constructor() {
    this.a = 1;
    this.b = 2;
    this.c = 3;
  }
}

class ColoredTriangle extends Triangle {
  constructor() {
    super();
    this.color = "red";
  }
}

var obj = new ColoredTriangle();

Object.keys(obj); //返回 ["_count", "a", "b", "c", "color"]
