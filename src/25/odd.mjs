// (async () => {
//   const module1 = await import("./1.mjs");
//   console.log(module1);
// })();
// exports.aaa = 1;
// exports.bbb = "hello";
// exports.ccc = function () {
//   console.log("ccc");
// };

// odd.js
import { even } from './even.mjs';
export function odd(n) {
  return n !== 0 && even(n - 1);
}
