//Question31
let usernames = [];

if(usernames.length === 0){
    console.log("We need to find some users!")
}else{
    usernames.forEach(user =>{
        if(user === "admin"){
            console.log("Hello admin,Would you like to see the status report");
        }else{
            console.log("Hello sir")
        }
    });
};
//Question32
let curr_users = ["user1", "admin", "user3", "user4", "user5"];
let new_users = ["user1", "user6", "user7", "user8", "admin", "user9"];

new_users.forEach(newUser => {
    if(curr_users.some(curenUser => curenUser.toLowerCase() === newUser.toLowerCase()))
        {
            console.log(`${newUser} will need to enter a new username`);
        }else{
            console.log(`${newUser} is available`);
        }
})

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.forEach(number => {
    let suffix = "th";
    if(number === 1){
        suffix = "st";
    }else if(number === 2){
        suffix = "nd";
    }else if(number === 3){
        suffix = "rd";
    }
    console.log(`${number}${suffix}`)
})