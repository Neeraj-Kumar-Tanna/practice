function outer(att){
    let x = "hiii broo  i am outside";
    
    return function inner(ATT){
        
        console.log(att);
        console.log(ATT);
    }
}

let y = outer("i am neeraj kumar tanna");
y("this is inner function broo");