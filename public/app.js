import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
// Ne razumem razlog za dodavanje idalje. Mora dublje da se istrazi
// Sta god da se ugradi u ove varijable mora da sadrzi HasFormatter. Sto znaci ako se pojavi neka nova klasa i ona mora da sadrzi HasFormatter kao i Invoice i Payment
let docOne;
// let docTwo: HasFormatter;
let docTwo;
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing', 200);
console.log(docOne);
console.log(docTwo);
// Ako zelimo array koju u sebi sadrzi objekte koji imaju HasFormatter onda to ovako uslovljavamo
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log('========= doc ================');
    console.log(doc);
});
