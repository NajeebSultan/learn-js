class Product{
  constructor(name ,price){
    this.name = name;
    this.price = price;
  }
  displayProduct(){
    console.log(`product: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`);

  }
}

const product1 = new Product("Shirt",19.99);
const product2 = new Product("Pants",22.50);
const product3 = new Product("Underwear",100.00);

product2.displayProduct();
