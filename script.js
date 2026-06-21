class BankAccount{
    #balance;
    constructor(name , balance){
        this.name = name;
        
        this.accNum = BankAccount.generateAccount();
        this.#balance = balance;
    }

    static #accountNum = 10000;
    static generateAccount(){
        return this.#accountNum++;
    }

    checkAccNum(){
        console.log("acc num is : " + this.accNum);
    }

    checkBalance(){
        console.log("Balance is : " + this.#balance);
    }

    deposit(amount){
        this.#balance += amount;
        console.log("deposited");
    }

    withdraw(amount){
        if(this.#balance >= amount) {
            this.#balance -= amount;
            console.log("amount withdrawn");
        }
        else{
            console.log("insufficient balance");
        }
    }
}

let acc1 = new BankAccount("neeraj" , 500);
acc1.checkAccNum();
acc1.checkBalance();
acc1.deposit(5000);
acc1.checkBalance();
acc1.withdraw(2000);
acc1.checkBalance();
// console.log(acc1.#balance);

let acc2 = new BankAccount("nandu" , 300);
acc2.checkAccNum();

let acc3 = new BankAccount("nanann" , 400);
acc3.checkAccNum();