"use strict";
// classess is the blueprint of objects
class Product {
    constructor(name, price, productId) {
        this.inCart = false;
        this.isOrdered = false;
        this.name = name;
        this.price = price;
        this.productId = productId;
    }
    addToCart() {
        this.inCart = true;
    }
    buyProduct() {
        if (this.inCart) {
            return `Product is ${this.name} and the price of product is ${this.price}`;
        }
        else {
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
