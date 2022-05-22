"use strict";
// let greet: Function = () => {
//   console.log('hello, world');
// }
// greet = 'hello';
// greet = () => {
//   console.log('hello, again');
// }
var logDetails = function (uid, item) {
    // const logDetails = (uid: string | number, item: string) => {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
var greet = function (user) {
    // const greet = (user: {name: string, uid: string | number}) => {
    console.log("".concat(user.name, " says hello"));
};
var add = function (a, b, c /*?*/) {
    if (c === void 0) { c /*?*/ = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, 'ninja');
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
console.log(result);
