//q58
function avgScore(...scores :number[]) {
    let total = scores.reduce((sum, score) => sum + score, 0)
    return total / scores.length;
}
console.log(avgScore(80,88,90,100))
//q59
function makeAdder (valueToAdd :number): (number) => number{
    return function(number : number) :number{
        return number + valueToAdd;
    };
}
let addFive = makeAdder(5);
console.log(addFive(10));
//q60
let userProfile = (function(){
    let name = "John";
    let age = 30;

    return{
        displayInfo: function(){
            console.log(`name ${name} and age ${age}`);
        }
    }
})();
userProfile.displayInfo();