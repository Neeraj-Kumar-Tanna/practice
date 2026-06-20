let userName = document.querySelector("#name");
let role = document.querySelector("#role");
let discription = document.querySelector("#discription");
let profile = document.querySelector("#profiles");

let form = document.querySelector("form"); // Select the form, not the button

let obj ={
    users : [],
    createUser(){
        form.addEventListener("submit" , (e) => this.addData(e)); // Pass function reference
    },
    addData(e){
        e.preventDefault(); // Use the event parameter
        this.users.push({
            userName : userName.value,
            role : role.value,
            discription : discription.value

        });

        this.renderUi();

        form.reset();
    },
    renderUi(){
        
        let card = document.createElement("div");
        card.classList.add("card");
        // Store the user index in the card
        card.setAttribute("data-index", this.users.length - 1);
        document.querySelector("#profiles").appendChild(card);

        let h2 = document.createElement("h2");
        h2.innerText = userName.value;
        card.appendChild(h2);

        let h3 = document.createElement("h3");
        h3.innerText = role.value;
        card.appendChild(h3); 
        
        let p = document.createElement("p");
        p.innerText = discription.value;
        card.appendChild(p); 

        let btn = document.createElement("button");
        btn.innerText = "delete";
        btn.classList.add("delete");
        card.appendChild(btn);
        
        // btn.addEventListener("click" , ()=>{
        //     let index = card.getAttribute("data-index");
        //     this.users.splice(index , 1);

        //     this.removeUser(card);

        // })
        
        
    },
    removeUser(){
        // let deleteBtn = document.querySelectorAll(".delete");
        // deleteBtn.forEach((x) => {
        //     x.addEventListener("click" , ()=>{
        //         let index = x.parentElement.getAttribute("data-index");
        //         x.parentElement.remove();
        //     })
        // });

        profile.addEventListener("click" , (e)=>{
            let tar = e.target;
            if(tar.classList.contains("delete")){
                tar.parentElement.remove();
            }
            
        });

        
    }
}

obj.createUser(); // Initialize the event listener
obj.removeUser();