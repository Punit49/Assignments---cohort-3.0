const modale = document.querySelector("#desktopModale");
const mainContainer = document.querySelector(".mainContainer");
const header = document.querySelector("header");
const heroImage = document.querySelector("#heroImage");

window.addEventListener("load", () => {
    if(window.innerWidth < 1200){
        mainContainer.style.filter = "blur(50px)";
        header.style.display = "none";
        heroImage.style.display = "none";
        modale.classList.remove("hidden");
    }
});

