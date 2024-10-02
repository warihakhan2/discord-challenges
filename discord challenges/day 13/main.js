//Question 37
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "life is code"; }
    console.log("Size is ".concat(size, " and message will be ").concat(message));
}
make_shirt();
make_shirt("small");
make_shirt("medium", "Sucess is life");
//Question 38
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Karachi");
describe_city("Tokyo", "Japan");
//Question 39
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Hyderabad", "Pakistan"));
console.log(city_country("Paris", "France"));
