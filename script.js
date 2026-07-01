let images = document.querySelectorAll(".images");

let observer = new IntersectionObserver((entities) => {
    entities.forEach((entity) => {
        if (entity.isIntersecting) {
            let img = entity.target;

            // Wait for the image to download fully before adding the fade-in class
            // img.addEventListener("load", () => {
            //     img.classList.add("loaded");
            // });
            img.classList.add("loaded");
            // Start downloading the image
            img.src = img.dataset.src;

            // Stop observing this element using the observer instance
            observer.unobserve(img);
        }
    });
},
    {
        root: null,
        threshold: 0.1,
    }
);

images.forEach((img) => {
    observer.observe(img);
});
