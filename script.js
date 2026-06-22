class Employee{
    constructor(name , experience){
        this.name = name; 
        this.experience =  experience;
    }

    AboutEmployee(){
        console.log(`details : Name - ${this.name} ,\n experience- ${this.experience}`);
    }

    clacSalary(){
        throw new Error("this must be implemented by child class");
    }
}

class Manager extends Employee{
    constructor(name , experience){
        super(name , experience);
    }

    role= "Manager";
    salary = (this.experience/30)*300000;
    
    calcSalary(){
        console.log(`salary of ${this.name} is $${Math.floor(this.salary)}`);
    }
}

class Developer extends Employee{
    constructor(name , experience){
        super(name , experience);
    }

    role = "Developer";
    salary = (this.experience/30)*200000;

    calcSalary(){
        console.log(`salary of ${this.name} is $${Math.floor(this.salary)}`);
    }
}

class Tester extends Employee{
    constructor(name ,  experience){
        super(name ,experience);
    }

    role = "Tester";
    salary = (this.experience/30)*100000;

    calcSalary(){
        console.log(`salary of ${this.name} is $${Math.floor(this.salary)}`);
    }
}

let m1 = new Manager("neeraj m" , 15);
m1.AboutEmployee();
m1.calcSalary();

let d1 = new Developer("nandu" , 9);
d1.AboutEmployee();
d1.calcSalary();

let t1 = new Tester("vaish" , 13);
t1.AboutEmployee();
t1.calcSalary();