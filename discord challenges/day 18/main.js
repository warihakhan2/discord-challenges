//Question 52
var smartphone = {
    make: "Samsung",
    model: "Galaxy S21",
    specs: {
        storage: "128GB",
        screenSize: "6.2 inches",
        batteryLife: "18 hours"
    }
};
console.log(smartphone);
//Question 53
var developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameWorks: ["React", "Angular", "Vue"],
    tools: ["Git", "webpack", "Docker"]
};
var languages = developerSkills.languages, frameWorks = developerSkills.frameWorks, tools = developerSkills.tools;
console.log("Language: ".concat(languages[0], ", framework: ").concat(frameWorks[0], ", tool: ").concat(tools[0]));
//Question 54
function userDynamicKey(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
var userPrefence = userDynamicKey("theme", "Dark");
console.log(userPrefence);
