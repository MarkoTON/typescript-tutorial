"use strict";
// let greet: Function = () => {
//   console.log('hello, world');
// }
// greet = 'hello';
// greet = () => {
//   console.log('hello, again');
// }
// kada se stavi ? onda je opciono -> "c?: number | string = 10"
var add = function (a, b, c /*?*/) {
    if (c === void 0) { c /*?*/ = 10; }
    console.log(a + b);
    console.log('---------------------');
    console.log(c);
};
add(5, 10, 'ninja');
var minus = function (a, b) {
    // Ako zelimo da vratiomo rezultat da bude String, a ne number
    // const minus = (a: number, b: number): string => {
    return a + b;
    // return String(a + b);
};
console.log('==========================');
var result = minus(10, 7);
console.log(result);
