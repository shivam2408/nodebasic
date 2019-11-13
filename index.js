

// const square ={
//     area : (a) => (a*a),
//     perimeter: (a) => (4*a)
// }

const square = require('./square.js');

const calsqure = (a) => {
    console.log(`The value of a is ${a} and the squrare is ` + square.area(a));
}

calsqure(5);

console.log(__filename);
console.log(__dirname);
