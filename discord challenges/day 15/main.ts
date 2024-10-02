//Question 44
function make_sandwich(...items: string[]){
    console.log(`Making sandwich with ${items.join(', ')}.`);
}

make_sandwich("ham", "cheese");

//Question 45
function make_car(manufacturer:string, model:string, ...options:[string,any][]): Object {
    let car = {manufacturer, model};
    options.forEach(([key, value])=> car[key] = value);
    return car;
}

console.log(make_car("toyota","corolla",["color","black"],["year", "2023"]));