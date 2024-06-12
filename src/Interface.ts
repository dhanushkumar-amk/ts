console.log('interface');
// interface are used to create userDefined data types

let draw = (x: number, y: number) => {
  console.log(x, y);
};
draw(10, 20);

// we can create any data type using object 

let drw = (point : {x :number, y : number , z : number}) => console.log(point);

drw({x : 1, y :2, z : 4})



