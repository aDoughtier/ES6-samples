// console.log("Module 1 executed");
// export const name = "John"
// export default {
//   age: 30,
// };
// import {d,e} from "./2.cjs";
// console.log(d,e);

// import modules, { aaa, bbb } from "./2.cjs";
// console.log(modules, aaa, bbb);
// const { name, age } = modules;
// console.log(modules.num)
// console.log(typeof modules);

// even.js
import { odd } from '../../odd.mjs'
export var counter = 0;
export function even(n) {
  counter++;
  console.log(counter)
  return n === 0 || odd(n - 1);
} 

