fetch("https://randomuser.me/api/?results=500")
    .then((rawData) => {
        return rawData.json();
    })
    .then(
        // (data)=>{
        //     console.log(data.results);
        // }

        async (data) => {
            data.results.forEach((ele) => {
                const card = document.createElement("div");
                card.classList.add("profile-container");

                const img = document.createElement("img");
                img.classList.add("profile-pic");
                img.setAttribute("data-src", ele.picture.large);
                img.setAttribute("alt", "not loaded yet");

                const h2 = document.createElement("h2");
                h2.classList.add("name");
                h2.innerText = `${ele.name.first} ${ele.name.last}`;

                const p = document.createElement("p");
                p.innerText = ele.email;

                card.appendChild(img);
                card.appendChild(h2);
                card.appendChild(p);
                document.querySelector("#container").appendChild(card);

                observer.observe(img);
            });
        }
    )
    .catch((err) => {
        console.log(err);
    })

// ---------------------------------------------------

let observer = new IntersectionObserver((entites) => {
    entites.forEach((entity) => {
        if (entity.isIntersecting) {
            let t = entity.target;
            
            t.src = t.dataset.src;
            t.addEventListener("load" , ()=>{
                t.classList.add("loaded");
            })
            observer.unobserve(t);
            console.log("executed");
        }
    })
},
    {
        root: null,
        rootMargin:"0px 0px -40% 0px",
        threshold: 1,
    });


// let img = document.querySelectorAll(".profile-pic");
// img.forEach((i)=>{
//     observer.observe(i);
// });


console.log("hii");





//    ------------------------------------------------------------------------------ 

let inp = document.querySelector("#search");

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func();
            console.log("alive..");
        }, delay);
    }
}

let search = () => {
    let val = inp.value.toLowerCase();
    // console.log(inp);
    // console.log(val.length);
    let names = document.querySelectorAll(".name");
    names.forEach((x) => {
        if (!x.innerText.toLowerCase().startsWith(val)) {
            x.parentElement.classList.add("hidden");
        }
        else {
            x.parentElement.classList.remove("hidden");
        }
    }
    );
}


inp.addEventListener("input", debounce(search, 1000));





// ----------------------------------------------------------------------------------
