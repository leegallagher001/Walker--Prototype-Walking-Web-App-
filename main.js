/* Hamburger Navigation Menu Toggle */

const hamburgerIcon = document.getElementById("hamburger-icon");
const menu = document.getElementById("menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerIcon.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("dropdown-menu");
});

/* Journal - New Entry Start Button */

const newEntry = document.querySelector("#journal-new-entry-form");
const newEntryButton = document.getElementById("journal-new-entry-icon");

newEntryButton.addEventListener("click", function () {
    newEntry.style.display = "inline-block";
    newEntryButton.style.display = "none";
});

/* Journal - Cancel Entry Button */

const cancelEntryButton = document.getElementById("cancel-entry");

cancelEntryButton.addEventListener("click", function () {
    newEntry.style.display = "none";
    newEntryButton.style.display = "inline-block";
});