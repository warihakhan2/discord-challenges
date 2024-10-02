//q106
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2020));
console.log(isLeapYear(2016));
//q107
function isDivisibleByTwoAndThree(number) {
    return number % 2 === 0 && number % 3 === 0;
}
console.log(isDivisibleByTwoAndThree(12));
console.log(isDivisibleByTwoAndThree(9));
//q108
function areStringEqualToIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(areStringEqualToIgnoreCase("hello", "Hello"));
console.log(areStringEqualToIgnoreCase("world", "world"));
