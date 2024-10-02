//q85
function findCodePosition(str:string){
    return str.indexOf("code");
}

console.log(findCodePosition("Learn to code with Typescript"));
//q86
function hasJavaScript(str: string): boolean{
    return str.includes("JavaScript");
}

console.log(hasJavaScript("Learn to code in JavaScript with me"));
//q87
function extractFirstTenChars(str:string){
    return str.substring(0, 10)
}
console.log(extractFirstTenChars("Hello, I love JavaScript"));