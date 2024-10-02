//Question34
var pizza = ["peproni", 'fajita', "cheese"];
pizza.forEach(function (pizzas) {
    console.log("I love ".concat(pizzas, " pizza"));
});
console.log("I really love Pizza");
//Question 35
var pets = ["dog", "cat", "rabbit"];
pets.forEach(function (pet) {
    console.log("A ".concat(pet, " would make a great pet"));
});
console.log("Any one of these would make a great pet");
//Question 36 will help me to recall functions
function make_shirt(size, message) {
    console.log("Size of shirt will be ".concat(size, " and message will be ").concat(message));
}
make_shirt("Large", "Praise for what you have");
