//q61
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["car"] = 0] = "car";
    vehicleType[vehicleType["Truck"] = 1] = "Truck";
    vehicleType[vehicleType["Motorcycle"] = 2] = "Motorcycle";
})(vehicleType || (vehicleType = {}));
console.log(vehicleType.Motorcycle);
;
var student = {
    name: "ALice",
    age: 22,
    courses: ["Maths", "Science", "History"]
};
console.log(student);
var circle = {
    kind: "circle",
    radius: 5,
};
var rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20,
};
console.log(circle);
console.log(rectangle);
