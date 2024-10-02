var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Question 46
var laptop = {
    make: "Dell",
    model: "XPS 15",
    year: 2021,
    describe: function () {
        console.log("This Laptop is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    }
};
laptop.describe();
//Question 47
var laptops = [
    { make: "Dell", model: "xwd34", year: 2021 },
    { make: "Apple", model: "MacBook", year: 2023 },
    { make: "hp", model: "sac23", year: 2020 },
];
var laptop1 = laptops[0], laptop2 = laptops[1];
console.log(laptop1);
console.log(laptop2);
//Question 48
var practiceSet1 = [1200, 1500, 1100];
var practiceSet2 = [1000, 1300, 1600];
var combinedPrices = __spreadArray(__spreadArray([], practiceSet1, true), practiceSet2, true).sort(function (a, b) { return a - b; });
console.log(combinedPrices);
