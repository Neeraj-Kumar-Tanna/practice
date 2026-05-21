let ul = document.querySelector("ul");

ul.addEventListener("click",(x) =>{
    x.target.classList.toggle("line");
});

let c = document.querySelector("#circle");
c.addEventListener("mouseover" , function(){
    c.style.backgroundColor = "black";
});
c.addEventListener("mouseout" , function(){
    c.style.backgroundColor = "red";
});