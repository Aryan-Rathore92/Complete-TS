class Product {
  name: string;
  price: number;
  productId: number;
  inCart = false;
  isOrdered = false;

  constructor(name: string, price: number, productId: number) {
    this.name = name;
    this.price = price;
    this.productId = productId;
  }

  addToCart(): void {
    this.inCart = true;
  }
  buyProduct(): string {
    if (this.inCart) {
      return `Product is ${this.name} and the price of product is ${this.price}`;
    } else {
      return `No ${this.name} is avaliable`;
    }
  }
}

var productDetails = new Product("iphone", 100000, 544);
productDetails.addToCart();
console.log(productDetails.buyProduct());

var productDetails = new Product("Samsung", 50000, 101);
productDetails.addToCart();
console.log(productDetails.buyProduct());

var productDetails = new Product("Redmi", 70000, 404);
productDetails.addToCart();
console.log(productDetails.buyProduct());
