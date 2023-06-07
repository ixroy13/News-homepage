const menuBtn = document.querySelector(".menu-switch")
const listMenu = document.querySelector(".list")
const fog = document.querySelector(".fog")

menuBtn.addEventListener("click", () => {
    listMenu.classList.toggle("active")
    fog.classList.toggle("active")
    menuBtn.classList.toggle("active")
})