let character: string = 'mario';
let age: number; // inicijalizacija ali bez vrednosti
let isLoggedIn: boolean;

// age = 'luigi';
age = 30;

// isLoggedIn = 25;
isLoggedIn = true;

// arrays
let ninjas: string[] = [];
// Ako zelimo da bude let ninjas: string[]; onda da bi se inicijalizovao mora da krene sa ninjas = ['Marko], posle moze da se dodaje na ostale nacine. Ne moze odmah .push()
// let ninjas: string[];
// ninjas = ['Marko']
ninjas.push('ryu');
ninjas.push('chun-li');
console.log('============== adding ninjas otherway =============')
console.log(ninjas);

// union types
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(false);
mixed.push(20);
console.log('-------- mixed array -----------')
console.log(mixed);

let uid: string|number;
// Mozes i u zagradama moze i bez
// let uid: (string|number);
uid = 'Sepultura'
console.log('=-=-=-=-=- uid =-=-=-=-=-=-')
console.log(uid)

// objects - to znaci da moze da bude {} ali i []. Jer je [] u neku ruku isto Object
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };

let ninjaTwo: {
  name: string,
  age: number,
  beltColour: string
};
ninjaTwo = { name: 'ken', age: 20, beltColour: 'black' };