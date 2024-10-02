function addNumberAndString(number1, numberString) {
    return number1 + Number(numberString);
}
console.log(addNumberAndString(10, "5"));
//q68
function multiplyDecimals(num1, num2) {
    return (num1 * num2 * 100) / 100;
}
console.log(multiplyDecimals(2.8, 8.9));
//q69
function divideAndRemainder(dividend, divisor) {
    var quotient = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    return { quotient: quotient, remainder: remainder };
}
console.log(divideAndRemainder(10, 3));
