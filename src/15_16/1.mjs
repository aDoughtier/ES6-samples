// const target = new Date("2015-01-02");
// const handler = {
//   get(target, prop) {
//     if (prop === "getDate") {
//       return target.getDate.bind(target);
//     }
//     return Reflect.get(target, prop);
//   },
// };
// const proxy = new Proxy(target, handler);

// console.log(proxy.getDate()) // 1)
const target = {};

Object.defineProperty(target, "getDate", {
  configurable: false,
});
// 老写法
// try {
//   Object.defineProperty(target, "getDate", {
//     value:11
//   });
//   // success
// } catch (e) {
//   // console.log(e)
//   console.log('报错')
// }

// // 新写法
if (Reflect.defineProperty(target, "getDate", {
  value: 11,
})) {
  // success
} else {
  // failure
  console.log('failure')
}
