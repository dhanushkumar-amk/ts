"use strict";
let StringArr = ['one', 'two', 'three', 'four'];
let avengers = ['ironMan', 'CaptainAmerica', 334];
let MixedArray = ['Thor', 2004, true];
StringArr[0] = 'five';
// adding the element to the array
StringArr.push('hello');
console.log(StringArr);
// remove the element from the array
avengers.pop();
console.log(avengers);
avengers.push('Hulk');
// array declaration with define the data type
let test1 = [];
let test2 = [];
let test3 = [];
// Tuple
// we can add multiple datatype in the single array
let myTuple = ['Dhanush', 19, false];
// without defining datatype
/// let mixedDatatype: (string | number | boolean)[]
let mixedDatatype = ['ram', 24, false];
// because mixed can't need to have any three elements in array
console.log(myTuple == mixedDatatype); // false
// objects
let myObj;
myObj = [];
console.log(typeof myObj);
// object example
const objectExample = {
    prop1: 'Dhanush',
    prop2: true,
};
let evh = {
    name: 'Dhanush',
    active: false,
    skills: ['JavaScript'],
};
console.log(evh);
