function Dog(name){
    this.name = name;

    this.display = function(){
        console.log(this.name);
    }

    
}

let x = new Dog("neeraj");
x.display();
