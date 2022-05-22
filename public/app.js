"use strict";
var anchor = document.querySelector('a');
if (anchor) {
    console.log(anchor.href);
}
console.log(anchor.href);
//const form = document.querySelector('form')!; // ovo hvata prvu formu
// const form = document.querySelector('form.new-item-form')!; // Element again
var form = document.querySelector('.new-item-form');
var formAll = document.querySelectorAll('form.new-item-form');
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
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var typeTest = '';
    console.log(form);
    form.childNodes.forEach(function (element) {
        // console.log(element.children)
        element.childNodes.forEach(function (element) {
            if (element.id === 'type') {
                typeTest = element.value;
            }
            console.log(element.id);
            console.log(element.value);
        });
    });
    console.log('===============================');
    console.log(typeTest);
    console.log('===============================');
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
