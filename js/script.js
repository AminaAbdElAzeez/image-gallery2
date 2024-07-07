let images = document.querySelectorAll(".container img");
let popup = document.querySelector(".popup");
let popupImage = document.querySelector(".popup img");
let close = document.querySelector(".popup span");

images.forEach(image => {
    image.addEventListener('click',() =>{
        popup.style.display = "block";
        popupImage.src=image.getAttribute("src")
    })
})

close.addEventListener("click", () => {
    popup.style.display = "none";
})