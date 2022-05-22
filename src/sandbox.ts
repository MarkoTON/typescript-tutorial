type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum };

// let greet: Function = () => {
//   console.log('hello, world');
// }

// greet = 'hello';

// greet = () => {
//   console.log('hello, again');
// }

const logDetails = (uid: StringOrNum, item: string) => {
  // const logDetails = (uid: string | number, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: objWithName) => {
  // const greet = (user: {name: string, uid: string | number}) => {
  console.log(`${user.name} says hello`);
}

const add = (a: number, b: number, c/*?*/: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
}

add(5, 10, 'ninja');

const minus = (a: number, b: number): number => {
  return a + b;
}

let result = minus(10,7);
console.log(result);