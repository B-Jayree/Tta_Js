class Product{
    constructor( name , price, category ){
        this.name = name;
        this.price = price;
        this.category = category;
 
   }
   getInfo(){
    console.log(`\n\t Name: ${this.name} \n\t Price: ${this.price} \n\t Category: ${this.category} `)
   }
   appplyDiscount(discountRate){
    let discount = this.price * discountRate / 100;
    this.price -= discount;
    console.log(`\t New price After ${discountRate}% discount: ${this.price}`)
   }
}
let Product1= new Product('T-Shirt',1000,'Clothing');
let Product2= new Product('Shirt',500,'Clothing');
Product1.getInfo();
Product1.appplyDiscount(10);
Product2.getInfo();
Product2.appplyDiscount(20);

class Electronics extends Product {
    constructor(name,price,brand,warranty){
        super(name,price,'Electronics')
        this.brand=brand;
        this.warranty=warranty;
    }
    getInfo(){
        console.log(`\n\t Name: ${this.name} \n\t Price: ${this.price} \n\t Category: ${this.category} `)
        console.log(`\t Brand: ${this.brand} \n\t Warranty: ${this.warranty} `);
    }
}
Product3= new Electronics('Laptop',50000, 'Dell','1 years');
Product4= new Electronics('Mobile',20000, 'Samsung','2 years');

Product3.getInfo();
// Product3.getInfoElectronics();
Product3.appplyDiscount(10);

Product4.getInfo();
// Product4.getInfoElectronics();
Product4.appplyDiscount(20);

