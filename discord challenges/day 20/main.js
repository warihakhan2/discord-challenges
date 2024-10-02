//q58
function avgScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
}
console.log(avgScore(80, 88, 90, 100));
//q59
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
var addFive = makeAdder(5);
console.log(addFive(10));
//q60
var userProfile = (function () {
    var name = "John";
    var age = 30;
    return {
        displayInfo: function () {
            console.log("name ".concat(name, " and age ").concat(age));
        }
    };
})();
userProfile.displayInfo();
