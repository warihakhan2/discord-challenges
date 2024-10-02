function addNumberAndString(number1:number, numberString:string){
    return number1 + Number(numberString);
}
console.log(addNumberAndString(10, "5"));
//q68
function multiplyDecimals(num1:number, num2:number){
    return (num1 * num2 * 100)/100;
}

console.log(multiplyDecimals(2.8, 8.9))
//q69
function divideAndRemainder(dividend:number, divisor:number):{
    quotient: Number; remainder:Number
}{
    let quotient = Math.floor(dividend /divisor);
    let remainder = dividend % divisor;
    return {quotient, remainder};
}

console.log(divideAndRemainder(10, 3))