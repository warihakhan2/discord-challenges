//Question 52
let smartphone = {
    make: "Samsung",
    model: "Galaxy S21",
    specs:{
        storage:"128GB",
        screenSize:"6.2 inches",
        batteryLife:"18 hours"
    }
};
console.log(smartphone);
//Question 53
let developerSkills = {
    languages:["JavaScript", "TypeScript", "Python"],
    frameWorks:["React", "Angular", "Vue"],
    tools:["Git", "webpack", "Docker"]
}
let {languages, frameWorks, tools} = developerSkills;
console.log(`Language: ${languages[0]}, framework: ${frameWorks[0]}, tool: ${tools[0]}`);

//Question 54

function userDynamicKey (key:string, value:string){
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
let userPrefence = userDynamicKey("theme", "Dark");
console.log(userPrefence);