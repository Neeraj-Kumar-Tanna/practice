fetch("https://randomuser.me/api/?results=100")
.then(function(raw){
    return raw.json();
})
.then(function(data){
    data.results.forEach((ele) => {

        console.log(ele)
        
        
        const card = document.createElement("div");
        card.className = "card";

        // Create image
        const img = document.createElement("img");
        img.src = ele.picture.large;
         img.alt = "Profile Picture";
         img.className = "profile-pic";

        const name = document.createElement("h3");
        name.innerText = `${ele.name.first} ${ele.name.last}`;
        

// Create info div
const info = document.createElement("div");
info.className = "info";

// Create email
const email = document.createElement("p");
email.innerHTML = `<strong>Email:</strong> ${ele.email}`;

// Create gender
const gender = document.createElement("p");
gender.innerHTML = `<strong>Gender:</strong> ${ele.gender}`;

// Append elements
info.append(email, gender);
card.append(img,name ,info);

// Add card to page
document.body.appendChild(card);
    });
})
.catch(function(error){
    console.log(error);
});

