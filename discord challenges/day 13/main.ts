//Question 37
function make_shirt(size:string = "Large", message:string = "life is code"){
    console.log(`Size is ${size} and message will be ${message}`);
}

make_shirt();
make_shirt("small");
make_shirt("medium", "Sucess is life");
//Question 38
function describe_city(city:string, country:string = "Pakistan") {
    console.log(`${city} is in ${country}`)
}
describe_city("Karachi");
describe_city("Tokyo", "Japan");
//Question 39
function city_country(city:string, country:string){
    return `${city}, ${country}`;
}

console.log(city_country("Hyderabad", "Pakistan"));
console.log(city_country("Paris", "France"));
