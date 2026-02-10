//* desktop share button toggle

const desktopShareBtn = document.querySelector("#desktop-share-btn");
const shareShapeContainer = document.querySelector(".share-shape-container");

desktopShareBtn.addEventListener("click", () => {
    shareShapeContainer.classList.toggle("display-none");
});

//* mobile share button toggle

const mobileAuthorArea = document.querySelector(".mobile-author-area");
const mobileSocialSharingBar = document.querySelector(
    ".mobile-social-sharing-bar"
);
const mobileShareBtnContainer = document.querySelector(
    ".mobile-share-btn-container"
);

mobileShareBtnContainer.addEventListener("click", () => {
    console.log("click");

    mobileAuthorArea.style.display = "none";
    mobileSocialSharingBar.style.display = "flex";
});
