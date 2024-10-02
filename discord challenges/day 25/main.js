function updateVariable() {
    var number = 10;
    console.log("Initial value:", number);
    number = 20;
    console.log("Updated value:", number);
}
updateVariable();
function greetUser(name) {
    if (name === void 0) { name = "Anonymous"; }
    console.log("Hello ".concat(name));
}
greetUser("Alixa");
greetUser();
function squareDecleration(number) {
    return number * number;
}
var squareExpression = function (number) {
    return number * number;
};
console.log(squareDecleration(4));
console.log(squareExpression(4));
