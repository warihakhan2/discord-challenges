//q103
function getRandomBoolean() {
    return Math.random() > 0.5;
}
console.log(getRandomBoolean());
//q104
function getRandomHexColor() {
    var color = "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
    return color;
}
console.log(getRandomHexColor());
//q105
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDice());
