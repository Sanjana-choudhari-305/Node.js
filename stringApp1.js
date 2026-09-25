// const string = require('./stringdemo');


// console.log("concat using(+):", string.concatUsingPlus());
// console.log("concat using function:", string.concatUsingFunction());
// console.log("split string:", string.splitString());
// console.log("Join string:", string.joinString());
// console.log("character at index 5:", string.characterAt());

const {x,y,z} = require("./strdemo")
console.log(x);
console.log(y);

console.log("Concat using(+): ",x+y);
console.log("Concat using function: ",x.concat(y));

console.log("Split string: ",x.split(" "));
console.log("Join string: ",z.join(","));

console.log("Character at index 6: ",x.charAt(6));