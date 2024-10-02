//Question 49

function logHobbies(...hobbies:string[]){
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}`)
    })
}
logHobbies("Talking", "Riding", "Singing", "Coding")

//Question 50
let myIdealDay = `My ideal day would involve:
1. Spending a whole day with my sister
2: Code with her
3.Telling her each and everything about me
4.Ending my day with a long and peaceful namaz`;

console.log(myIdealDay)

//Question 51
function calculateArea (height:number, width:number){
    return height * width;
}

let calculateAreaArrow = (width:number, height:number):number => width* height;
console.log(calculateAreaArrow(4,7));