let fill = document.querySelector("#fill");
let perc = document.querySelector("#percentage");
let count = 0;

let x = setInterval(function(){
    if(count <= 99){
        count++;
        fill.style.width = `${count}%`;
        perc.innerText = `${count}%`
    }
    else{
        document.querySelector("#downloading").innerText = "Downloaded";
        clearInterval(x);
    }
} , 10000 / 100);



let reset = document.querySelector("#reset");

reset.addEventListener("click" , function(){
    document.querySelector("#downloading").innerText = "Downloading........";
    count = 0 ;
    let x = setInterval(function(){
    if(count <= 99){
        count++;
        fill.style.width = `${count}%`;
        perc.innerText = `${count}%`
    }
    else{
        document.querySelector("#downloading").innerText = "Downloaded";
        clearInterval(x);
    }
    } , 10000 / 100);
});