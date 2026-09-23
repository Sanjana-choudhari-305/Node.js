console.log("Welcome to nodejs session!")

let a = 67;
console.log(typeof a);

b = "nodejs example";
console.log(typeof b);

c = undefined;
console.log(typeof c);

let d = true;
console.log("Value: ",d,"| type:", typeof d);

let e = null;
console.log("Value: ",e,"| type:", typeof e);

let user ={
    name: "Ammu",
    age: 21
};
console.log("Value: ",user,"| Type: ",typeof user);

let color = ["red","green","blue"];
console.log("Value: ",color,"|Type: ",typeof color);

//Functions 
function multiplication(num1, num2){
    return num1*num2;
}
let x1=20;
let x2=30;
console.log("Multiplication of ",x1," and ",x2," is ",multiplication(x1,x2));