//Question31
var usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    usernames.forEach(function (user) {
        if (user === "admin") {
            console.log("Hello admin,Would you like to see the status report");
        }
        else {
            console.log("Hello sir");
        }
    });
}
;
//Question32
var curr_users = ["user1", "admin", "user3", "user4", "user5"];
var new_users = ["user1", "user6", "user7", "user8", "admin", "user9"];
new_users.forEach(function (newUser) {
    if (curr_users.some(function (curenUser) { return curenUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username"));
    }
    else {
        console.log("".concat(newUser, " is available"));
    }
});
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (number) {
    var suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log("".concat(number).concat(suffix));
});
