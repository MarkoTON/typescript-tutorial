var character = 'mario';
var age; // inicijalizacija ali bez vrednosti
var isLoggedIn;
// age = 'luigi';
age = 30;
// isLoggedIn = 25;
isLoggedIn = true;
// arrays
var ninjas = [];
// Ako zelimo da bude let ninjas: string[]; onda da bi se inicijalizovao mora da krene sa ninjas = ['Marko], posle moze da se dodaje na ostale nacine. Ne moze odmah .push()
// let ninjas: string[];
// ninjas = ['Marko']
ninjas.push('ryu');
ninjas.push('chun-li');
console.log('============== adding ninjas otherway =============');
console.log(ninjas);
// union types
var mixed = [];
mixed.push('hello');
mixed.push(false);
mixed.push(20);
console.log('-------- mixed array -----------');
console.log(mixed);
var uid;
// Mozes i u zagradama moze i bez
// let uid: (string|number);
uid = 'Sepultura';
console.log('=-=-=-=-=- uid =-=-=-=-=-=-');
console.log(uid);
// objects - to znaci da moze da bude {} ali i []. Jer je [] u neku ruku isto Object
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
var ninjaTwo;
ninjaTwo = { name: 'ken', age: 20, beltColour: 'black' };
