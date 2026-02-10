console.log("test");

const shareBtn = document.querySelector(".share-btn");
const personalLinks = document.querySelector(".personal-links");

shareBtn.addEventListener("click", () => {
    console.log("classList.toggle(display-none)");
    personalLinks.classList.toggle("display-none");
});
