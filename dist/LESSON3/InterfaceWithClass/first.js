"use strict";
class LaptopBrand {
    constructor(name) {
        this.name = name;
    }
    getAllLaptops() {
        return ["hp", "macbook", "lenvo"];
    }
    getLaptopBrandName() {
        console.log("Laptop brand is HP");
    }
}
var firstLaptopCheck = new LaptopBrand("Apple");
firstLaptopCheck.getLaptopBrandName(); // Laptop brand is HP
console.log(firstLaptopCheck.getAllLaptops());
