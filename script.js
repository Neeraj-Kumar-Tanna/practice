class Product{
    constructor(name , cost){
        this.name = name;
        this.cost = cost;
    }

    productInfo(){
        console.log(`name : ${this.name} , cost : ${this.cost}`);
    }

    getCost(){
        return this.cost;
    }
}

class Cart{
    products = [];

    addProduct(prod){
        this.products.push(prod);
        console.log("added : " + prod.name);
    }

    removeProduct(prod){
        for(let i = 0 ; i < this.products.length ;i++){
            if(this.products[i].name === prod){
                this.products.splice(i,1);
                break;
            }
        }
    }

    totalCost(){
        let total = 0;
        for(let i = 0; i<this.products.length ; i++){
            total += this.products[i].getCost();
        }
        console.log(total);
    }

}

let p1 = new Product("pen" , 10);
let p2 = new Product("pencil" , 5);
let p3 = new Product("bottle" , 50);

p1.productInfo();

let cart1 = new Cart();
cart1.addProduct(p1);
cart1.addProduct(p2);
cart1.addProduct(p3);

cart1.totalCost();

cart1.removeProduct("bottle");
cart1.totalCost();


