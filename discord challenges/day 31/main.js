//q91
var favouriteFruits = ["Apple", "Banana", "PineApple"];
favouriteFruits.push("Mango");
console.log(favouriteFruits);
//q92
function removeLastElement(arr) {
    return arr.pop();
}
var fruits = ["Apple", "Banana", "Lichi"];
console.log(removeLastElement(fruits));
console.log(fruits);
//q93
function replaceAppleWithMango(fruits2) {
    var index = fruits2.indexOf("Banana");
    if (index !== -1)
        fruits2[index] = "mango";
}
var fruits2 = ["Apple", "Banana", "cherry"];
replaceAppleWithMango(fruits2);
console.log(fruits2);
