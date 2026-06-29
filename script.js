fetch("https://randomuser.me/api/?results=500")
    .then((rawData) => {
        return rawData.json();
    })
    .then(
        // (data)=>{
        //     console.log(data.results);
        // }

        (data) => {
            data.results.forEach((ele) => {
                const card = document.createElement("div");
                card.classList.add("profile-container");

                const img = document.createElement("img");
                img.classList.add("profile-pic");
                img.src = ele.picture.large;

                const h2 = document.createElement("h2");
                h2.classList.add("name");
                h2.innerText = `${ele.name.first} ${ele.name.last}`;

                const p = document.createElement("p");
                p.innerText = ele.email;

                card.appendChild(img);
                card.appendChild(h2);
                card.appendChild(p);
                document.querySelector("#container").appendChild(card);

            })
        }
    )
    .catch((err) => {
        console.log(err);
    })

let inp = document.querySelector("#search");

function debounce(func, delay) {
<<<<<<< HEAD
    let timer;
=======
    let timer = 10000;
>>>>>>> refs/remotes/origin/main
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func();
<<<<<<< HEAD
            console.log("alive...");
=======
            console.log("alive..");
>>>>>>> refs/remotes/origin/main
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


<<<<<<< HEAD
// inp.addEventListener("input", debounce(search, 1000));
function trottle(func, interval) {
    let timer = 0;
    return function (...args) {
        let now = Date.now();
        if (now - timer >= interval) {
            timer = now;
            console.log("running interval at : " + now);
            func();
        }

    }
}

inp.addEventListener("input", trottle(search, 1000));
=======
inp.addEventListener("input", debounce(search, 1000));
>>>>>>> refs/remotes/origin/main
