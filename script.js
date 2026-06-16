
function like(){
    let likes = 0 ;
    return function liked(){
        likes++;
        console.log(likes);
    }
}

let post1 = like();
let post2 = like();
let cls = document.querySelectorAll(".likes");

cls.forEach((x)=>{
    x.addEventListener("click" , function(){
        let num = x.getAttribute("id");
        if(num === "post1"){
            post1();
        }
        else{
            post2();
        }
        console.log("clicked");
    });
});