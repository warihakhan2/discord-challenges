//q55
let numbers = [1, 2, 3, 4, 5];
let doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);
//q56
let mixedArray = [1, "Apple", "Banana", 5, true, "Carrot"];
let stringArray = mixedArray.filter((item) => typeof item === "number");
console.log(stringArray);
//q57
let grades = [88, 78, 98, 56, 80];
let avgGrades = grades.reduce((total,grade) => total + grade ,0) / grades.length;
console.log(avgGrades);