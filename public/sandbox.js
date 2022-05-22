"use strict";
// let greet: Function;
// example 1 - ovo je potpis, i sada funkcija koja se dodeli "greet"-u mora da ima taj redosled da "a" i "b" budu string
var greet;
greet = function (name, greeting) {
    // greet = (name, greeting) => { // i ovako moze bez greske
    console.log("".concat(name, " says ").concat(greeting));
};
// example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
var logDetails;
logDetails = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " years old"));
};
