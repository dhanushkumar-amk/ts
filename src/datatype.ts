// implicit shown the using string// let myName: String

// explicitly shown the type of the variables
let myName: String = 'Dhanush';
console.log(myName);

// myName = 24;
// Type 'number' is not assignable to type 'String'

// ex :

let Name: string;
let age: number;
let isLoading: boolean;
let album: any;

// using any we can add any type of datatype in the variables

Name = 'Dhanush';
age = 19;
isLoading = true;
album = true;

// union type using (or) operator

let UnionValue: String | number | boolean;

UnionValue = 'string';
UnionValue = 23;
UnionValue = false;

// adding the value in the function
const sum = (a: number, b: number) => {
  return a + b;
};
const result = sum(10, 20);
console.log(result);

// type regExp
let regularExpression: RegExp = /\w+/g;

let a: number = 34;
let b: String = 'Dhanush';
let c: boolean = false;
let d: string[] = ['hello', 'world'];

// any => enum

const colorRed = 0;
const colorBlue = 1;
const colorGreen = 2;

// javascript does not support enum keyword it will be used by array in js it will be complex but js easy

enum color {
  Red = 101,
  Blue = 102,
  Green = 103,
}
let bgColor = color.Red;
console.log(bgColor);




