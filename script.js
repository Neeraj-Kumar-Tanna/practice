let inp = document.querySelector("#searchInput");
let names = document.querySelectorAll(".card");

inp.addEventListener("input" , ()=>{
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

    if(inp.value === ""){
        x.classList.remove("hidden");
    }
});

