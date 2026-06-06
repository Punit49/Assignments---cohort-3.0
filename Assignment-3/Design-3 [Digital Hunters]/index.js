const modale = document.querySelector("#desktopModale");
const mainContainer = document.querySelector(".mainContainer");

window.addEventListener("load", () => {
    if(window.innerWidth < 1250){
        mainContainer.style.filter = "blur(50px)";
        modale.classList.remove("hidden");
    }
});

