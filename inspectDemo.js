function add(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}

function main(){
    const x = 10;
    const y = 20;
    const sum=add(x,y);
    const product = multiply(x,y);
    console.log("Sum= ",sum);
    console.log("Multiply= ",product);
}
main();