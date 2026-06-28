let inp = document.querySelector("#searchInput");
let names = document.querySelectorAll(".card");

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

let btn = document.querySelector("button");
btn.addEventListener("click" , function(){
    let div = document.createElement("div");
    div.classList.add("card");
    div.setAttribute("data-name" , document.querySelector("#name").value);
    document.querySelector(".cards-container").appendChild(div);
    
    let image = document.createElement("img");
    image.classList.add("card-image");
    image.setAttribute("src" , document.querySelector("#image_url").value);
    div.appendChild(image);
    
    let name = document.createElement("h3");
    name.classList.add("card-title");
    name.innerText = document.querySelector("#name").value;
    div.appendChild(name);
    
    let disc = document.createElement("p");
    disc.classList.add("card-description");
    disc.innerText = document.querySelector("#description").value;
    div.appendChild(disc);
    
    console.log("clicked...");


});