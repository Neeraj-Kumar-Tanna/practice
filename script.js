
let search = () =>{
    let value = inp.value;
    names.forEach((x)=>{
        console.log(x.getAttribute("data-name"));
        if(!x.getAttribute("data-name").startsWith(value)){
            x.classList.add("hidden");
        }
        else{
            x.classList.remove("hidden");
        }
        // if(value !== x.innerText){
        //     x.classList.add("hidden");
        // }
    });
}

function db(func , delay){
    let timer;
    return function(...x){
        clearTimeout(timer);
        timer = setTimeout(() =>{
            func();
        }, delay);
    }
}

let db_search = db(search , 2000);

// inp.addEventListener("input" , db(search , 3000));
inp.addEventListener("input" , db_search);