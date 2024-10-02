//q91
let favouriteFruits = ["Apple", "Banana", "PineApple"];
favouriteFruits.push("Mango");
console.log(favouriteFruits);
//q92
function removeLastElement<T>(arr: T[]): T | undefined{
    return arr.pop();
}

const fruits: string[] = ["Apple", "Banana", "Lichi"];
console.log(removeLastElement(fruits));
console.log(fruits);
//q93
function replaceAppleWithMango (fruits2:string[]):void{
    const index = fruits2.indexOf("Banana");
    if(index !== -1) fruits2[index] = "mango";
}

const fruits2 :string[] = ["Apple", "Banana", "cherry"];
replaceAppleWithMango(fruits2);
console.log(fruits2);
