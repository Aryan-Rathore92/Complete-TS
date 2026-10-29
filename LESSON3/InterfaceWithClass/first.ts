interface LaptopBrandStructure {
  name: string;

  getAllLaptops(): string[];

  getLaptopBrandName(): void;
}

class LaptopBrand implements LaptopBrandStructure {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getAllLaptops(): string[] {
    return ["hp", "macbook", "lenvo"];
  }

  getLaptopBrandName(): void {
    console.log("Laptop brand is HP");
  }
}

var firstLaptopCheck = new LaptopBrand("Apple");
firstLaptopCheck.getLaptopBrandName(); // Laptop brand is HP
console.log(firstLaptopCheck.getAllLaptops());
