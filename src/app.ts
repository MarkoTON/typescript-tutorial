import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// Ne razumem razlog za dodavanje idalje. Mora dublje da se istrazi
// Sta god da se ugradi u ove varijable mora da sadrzi HasFormatter. Sto znaci ako se pojavi neka nova klasa i ona mora da sadrzi HasFormatter kao i Invoice i Payment
let docOne: HasFormatter;
// let docTwo: HasFormatter;
let docTwo;

docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing', 200);

console.log(docOne);
console.log(docTwo);

// Ako zelimo array koju u sebi sadrzi objekte koji imaju HasFormatter onda to ovako uslovljavamo
let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  console.log('========= doc ================')
  console.log(doc);
});