//q81
function logObjectProperties(obj) {
    for (var property in obj) {
        console.log("".concat(property, ": ").concat(obj[property]));
    }
}
logObjectProperties({
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    color: "blue,"
});
