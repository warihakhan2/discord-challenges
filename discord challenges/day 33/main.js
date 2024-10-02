//q97
function getCurrentDateFormatted() {
    var now = new Date();
    var day = String(now.getDate()).padStart(2, "0");
    var Month = String(now.getMonth() + 1).padStart(2, "0");
    var year = now.getFullYear();
    return "".concat(day, "-").concat(Month, "-").concat(year);
}
console.log(getCurrentDateFormatted());
//q98
function daysUntilNewYear() {
    var today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1);
    var diff = newYear.getTime() - today.getTime();
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysUntilNewYear() + "days until new Year.");
//q99
function getNextBirthday(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
var nextBirthday = getNextBirthday(12, 25);
console.log("Next Birthday on:", nextBirthday.toLocaleDateString());
