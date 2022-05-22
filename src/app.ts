const anchor = document.querySelector('a')!;
if(anchor) {
  console.log(anchor.href);
}
console.log(anchor.href);

//const form = document.querySelector('form')!; // ovo hvata prvu formu
// const form = document.querySelector('form.new-item-form')!; // Element again
const form = document.querySelector('.new-item-form') as HTMLFormElement;

const formAll = document.querySelectorAll('form.new-item-form') as unknown;

// console.log(form.children);

// console.log(formAll);

// console.log("=======================================")
// formAll.forEach((element: any) => {
//   console.log(element.childNodes)
//   element.childNodes.forEach((element:any) => {
//     console.log(element)
//   });
// });
// console.log("=======================================")

// console.log('-----------------------------------')
// form.childNodes.forEach((element: any) => {
//   console.log(element)
// });
// console.log('-----------------------------------')
// form.childNodes.forEach((element: any) => {
//   // console.log(element)
//   element.childNodes.forEach((element: any) => {
//     console.log(element.id)
//   });
// });
// console.log('-----------------------------------')

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let typeTest: string = '';

  console.log(form)
  form.childNodes.forEach((element:any) => {
    // console.log(element.children)
    element.childNodes.forEach((element:any) => {
      if(element.id === 'type'){
        typeTest = element.value
      }
      console.log(element.id)
      console.log(element.value)
    });
  });

  console.log('===============================')
  console.log(typeTest);
  console.log('===============================')

  console.log(
    type.value, 
    tofrom.value, 
    details.value, 
    amount.valueAsNumber
  );
});