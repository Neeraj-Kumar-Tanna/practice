
let btn = document.querySelector("#heavyLoading");

btn.addEventListener("click", async function () {
    let x = await import("./heavy.js");
    // let h = document.querySelector("#heavy");
    // h.src = h.dataset.src;
    x.dis();
});
