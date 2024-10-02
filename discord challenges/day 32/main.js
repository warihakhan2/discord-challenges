//q94
var words = ["Hello", "world", "TypeScript", "JavaScript"];
var lengths = words.map(function (word) { return word.length; });
console.log(lengths);
//q95
function filterGreaterThanTen(numbers) {
    return numbers.filter(function (number) { return number > 10; });
}
var numbers = [5, 10, 15, 20];
console.log(filterGreaterThanTen(numbers));
//q96
function calculateSum(number) {
    return number.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
var numbers2 = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers2));
