//II.Design a calculator using node.js with functions add, subtract and multiply. And use the Calculator module
// in another Node.js file

// Returns addition of two numbers
// exports.add = function (a, b) {
//     return a+b;
// }; 
 
// // Returns difference of two numbers
// exports.subtract = function (a, b) {
//     return a-b;
// }; 
 
// // Returns product of two numbers
// exports.multiply = function (a, b) {
//     return a*b;
// };


// var calculator = require('./calculator');
 
// var a=10, b=5;
 
// console.log("Addition : "+calculator.add(a,b));
// console.log("Subtraction : "+calculator.subtract(a,b));
// console.log("Multiplication : "+calculator.multiply(a,b));


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

module.exports = {
    add,
    subtract,
    multiply
};
