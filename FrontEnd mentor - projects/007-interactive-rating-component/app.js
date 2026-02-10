const submitButton = document.querySelector(".button");
const ratingComponent = document.querySelector(".rating-component");
const thankComponent = document.querySelector("#thank-component");
const feedbackRating = document.querySelectorAll(".feedback-rating");
const ratingMark = document.querySelector("#rating-mark");
let mark = "";

feedbackRating.forEach((elem) => {
    elem.addEventListener("click", () => {
        mark = elem.innerText;
    });
});

submitButton.addEventListener("click", () => {
    ratingComponent.toggleAttribute("data-visible");
    thankComponent.toggleAttribute("data-visible");

    ratingMark.innerText += `You selected ${mark} out  of 5`;
});
