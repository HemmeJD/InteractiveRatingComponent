const mainContainer = document.querySelector(".main")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit")
const rating = document.getElementById("rating")
const buttonRating = document.querySelectorAll(".btn-rating")

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

buttonRating.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})