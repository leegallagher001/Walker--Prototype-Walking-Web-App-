const hamburgerIcon = document.getElementById("hamburger-icon");
const menu = document.getElementById("menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerIcon.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("dropdown-menu");
});