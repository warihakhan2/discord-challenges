//q85
function findCodePosition(str) {
    return str.indexOf("code");
}
console.log(findCodePosition("Learn to code with Typescript"));
//q86
function hasJavaScript(str) {
    return str.includes("JavaScript");
}
console.log(hasJavaScript("Learn to code in JavaScript with me"));
//q87
function extractFirstTenChars(str) {
    return str.substring(0, 10);
}
console.log(extractFirstTenChars("Hello, I love JavaScript"));
