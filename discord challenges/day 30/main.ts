//q88
function convertStringToNumbers(str: string):number{
    return Number(str);
}

console.log(convertStringToNumbers("123"));
//q89
function roundToTwoDecimalPlaces(num: number){
    return Number(num.toFixed(2));
}

console.log(roundToTwoDecimalPlaces(3.129076));
//q90
function generateRandomNumber(): number{
    return Math.floor(Math.random()* 10)+1;
}

console.log(generateRandomNumber());