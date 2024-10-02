//Question 46
let laptop = {
    make : "Dell",
    model: "XPS 15",
    year: 2021,
    describe: function() {
        console.log(`This Laptop is a ${this.year} ${this.make} ${this.model}.`)
    }
};
laptop.describe();
//Question 47
let laptops = [
    {make:"Dell", model:"xwd34", year:2021},
    {make:"Apple", model:"MacBook", year:2023},
    {make:"hp", model:"sac23", year:2020},
];
let [laptop1, laptop2] = laptops;
console.log(laptop1)
console.log(laptop2)
//Question 48
let practiceSet1 = [1200, 1500, 1100];
let practiceSet2 = [1000, 1300, 1600];
let combinedPrices = [...practiceSet1,...practiceSet2].sort((a,b) => a-b);
console.log(combinedPrices);