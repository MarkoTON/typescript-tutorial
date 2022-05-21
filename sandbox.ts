// arrays
let names = ['luigi', 'mario', 'yoshi'];

names.push('toad');
// names.push(3);
// names[1] = 3;

let numbers = [10, 20, 12, 15];

numbers.push(25);
// numbers.push('shaun');
// numbers[0] = 'shaun';

let mixed = ['ken', 4, 'chun-li', 8, 9]; // string | number - nece biti 'any'

mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;

// objects
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30 as number | string
};

ninja.age = 40;
ninja.name = 'ryu';
ninja.age = '30';
// Ne moze da se doda novi properti
// ninja.skills = ['fighting', 'sneaking']

ninja = {
  // I ne moze da se menja type, mora da ostane kao sto je bio, samo se menja vrednost
  name: 'yoshi',
  belt: 'orange',
  age: 40, // nece ti dozvoliti ni da smanjis ili ti uklonis neki od propertija
  // Ne moze da se doda novi properti
  // skills: ['running']
};