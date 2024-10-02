//q94
const words = ["Hello", "world", "TypeScript", "JavaScript"];
const lengths: number[] = words.map((word) => word.length );
console.log(lengths);
//q95
function filterGreaterThanTen(numbers:number[]){
    return numbers.filter((number) => number > 10);
}

const numbers1 :number[] = [5, 10, 15, 20];
console.log(filterGreaterThanTen(numbers1));
//q96
function calculateSum(number:number[]):number{
    return  number.reduce((accumulator, current) => accumulator+ current,0)
}
const numbers2: number[] = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers2));
