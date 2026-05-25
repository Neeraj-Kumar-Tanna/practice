let form = document.querySelector("form");
let inp = document.querySelectorAll("input");

form.addEventListener("submit" , function(x){
    x.preventDefault();

    inp.forEach(val => {
        if(val.type == "email"){
            let regex = "^[a-zA-Z0-9._%+-]+@gmail\.com$";
            let ans = val.value.match(regex);
            if(!ans){
                document.querySelector("#email_alert").style.display="initial";
            }
            else{
                document.querySelector("#email_alert").style.display="none";
                console.log(val.value);
            }
        }
        else if(val.type != "submit"){
            console.log(val.value);
        }
    });

    console.log(document.querySelector("select").value);
})