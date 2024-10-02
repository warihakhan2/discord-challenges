//q61
enum vehicleType{
    car,
    Truck,
    Motorcycle
}

console.log(vehicleType.Motorcycle);
//q62
interface Student {
    name: string;
    age: number;
    courses: string[];
};
let student : Student = {
    name: "ALice",
    age : 22,
    courses : ["Maths", "Science", "History"]
}
console.log(student);
//q63
type shape = {
    kind: "circle" | "rectangle";
    radius? : number;
    width?: number;
    height?:number;
}
let circle :shape = {
    kind : "circle",
    radius: 5,
}
let rectangle: shape = {
    kind: "rectangle",
    width: 10,
    height:20,
};
console.log(circle);
console.log(rectangle);