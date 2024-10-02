//q70
function printNumbersWithLet(){
    for(let i = 1; i <= 5; i++){
        console.log(i);
    }
}

printNumbersWithLet();
//q71
let age = 40;
age = 30;
const her = "Alexa";
try{
    // her = "bob";
}catch(error){
    console.log("name is a blocked scope element we can't reassign it again");
}
//q72
{
let blockLet = "visible inside the block";
const blockConst = "also only inside the block";
console.log(blockConst);
console.log(blockLet);
}