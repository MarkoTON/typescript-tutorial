// let greet: Function;

// example 1 - ovo je potpis, i sada funkcija koja se dodeli "greet"-u mora da ima taj redosled da "a" i "b" budu string
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  // greet = (name, greeting) => { // i ovako moze bez greske
  console.log(`${name} says ${greeting}`);
}

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

// example 3
let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (ninja: {name: string, age: number}) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}