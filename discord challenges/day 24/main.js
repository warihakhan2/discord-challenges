//q70
function printNumbersWithLet() {
    for (var i = 1; i <= 5; i++) {
        console.log(i);
    }
}
printNumbersWithLet();
//q71
var age = 40;
age = 30;
var name = "Alexa";
try {
    name = "bob";
}
catch (error) {
    console.log("name is a blocked scope element we can't reassign it again");
}
