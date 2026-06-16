function outer(){
    let x = "hiii broo  i am outside";
    
    return function inner(){
        y = "i am inside";
        console.log(x);
        console.log(y);
    }
}

let y = outer();
y();