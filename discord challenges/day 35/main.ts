//q103
function getRandomBoolean () :boolean {
   return Math.random() > 0.5;
}

console.log(getRandomBoolean());
//q104
function getRandomHexColor() :string{
    const color = "#" + Math.floor(Math.random() * 0xffffff). toString(16).padStart(6, "0");
    return color;
}


console.log(getRandomHexColor());

//q105
function rollDice() :number{
    return Math.floor(Math.random() * 6) + 1;
}

console.log(rollDice());