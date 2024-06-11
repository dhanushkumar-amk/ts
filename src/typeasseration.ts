// type assertion

let colors = 'red';
// we can also use inBuild function
let endWithD = colors.toUpperCase();
console.log(endWithD);


let col;

// here we can't access the the inBuild like above because col is refers to the any datatype 

col = "red";

// here we can ell the complier to dataType
let end = (<String> col).toLowerCase();
console.log(end);


// alternative way

let AlternativeEnd = (col as String).toLowerCase();


