"use strict";
// implicit shown the using string// let myName: String
// explicitly shown the type of the variables
let myName = 'Dhanush';
console.log(myName);
// myName = 24;
// Type 'number' is not assignable to type 'String'
// ex :
let Name;
let age;
let isLoading;
let album;
// using any we can add any type of datatype in the variables
Name = 'Dhanush';
age = 19;
isLoading = true;
album = true;
// union type using (or) operator
let UnionValue;
UnionValue = 'string';
UnionValue = 23;
UnionValue = false;
// adding the value in the function
const sum = (a, b) => {
    return a + b;
};
const result = sum(10, 20);
console.log(result);
// type regExp
let regularExpression = /\w+/g;
let a = 34;
let b = 'Dhanush';
let c = false;
let d = ['hello', 'world'];
// any => enum
const colorRed = 0;
const colorBlue = 1;
const colorGreen = 2;
// javascript does not support enum keyword it will be used by array in js it will be complex but js easy
var color;
(function (color) {
    color[color["Red"] = 101] = "Red";
    color[color["Blue"] = 102] = "Blue";
    color[color["Green"] = 103] = "Green";
})(color || (color = {}));
let bgColor = color.Red;
console.log(bgColor);
