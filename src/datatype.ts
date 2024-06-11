// implicit shown the using string


// let myName: String

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
let regularExpression : RegExp = /\w+/g