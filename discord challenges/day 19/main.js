//q55
var numbers = [1, 2, 3, 4, 5];
var doubleNumbers = numbers.map(function (number) { return number * 2; });
console.log(doubleNumbers);
//q56
var mixedArray = [1, "Apple", "Banana", 5, true, "Carrot"];
var stringArray = mixedArray.filter(function (item) { return typeof item === "number"; });
console.log(stringArray);
//q57
var grades = [88, 78, 98, 56, 80];
var avgGrades = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(avgGrades);
