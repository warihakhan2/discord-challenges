function updateVariable(){
    let number = 10;
    console.log("Initial value:", number);
    number = 20;
    console.log("Updated value:", number);
}

updateVariable();
function greetUser (name:string = "Anonymous"){
    console.log(`Hello ${name}`)
}

greetUser("Alixa");
greetUser();
function squareDecleration(number:number)
{
    return number * number
}
const squareExpression = function (number: number){
    return number * number;
};
console.log(squareDecleration(4));
console.log(squareExpression(4));