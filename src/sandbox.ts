// let greet: Function = () => {
//   console.log('hello, world');
// }

// greet = 'hello';

// greet = () => {
//   console.log('hello, again');
// }

// kada se stavi ? onda je opciono -> "c?: number | string = 10"
const add = (a: number, b: number, c/*?*/: number | string = 10): void => {
  console.log(a + b);
  console.log('---------------------')
  console.log(c);
}

add(5, 10, 'ninja');

const minus = (a: number, b: number): number => {
  // Ako zelimo da vratiomo rezultat da bude String, a ne number
  // const minus = (a: number, b: number): string => {
  return a + b;
  // return String(a + b);
}

console.log('==========================')
let result = minus(10,7);
console.log(result);