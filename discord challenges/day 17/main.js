//Question 49
function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("I enjoy ".concat(hobby));
    });
}
logHobbies("Talking", "Riding", "Singing", "Coding");
//Question 50
var myIdealDay = "My ideal day would involve:\n1. Spending a whole day with my sister\n2: Code with her\n3.Telling her each and everything about me\n4.Ending my day with a long and peaceful namaz";
console.log(myIdealDay);
//Question 51
function calculateArea(height, width) {
    return height * width;
}
var calculateAreaArrow = function (width, height) { return width * height; };
console.log(calculateAreaArrow(4, 7));
