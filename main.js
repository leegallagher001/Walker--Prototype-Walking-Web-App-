/* Hamburger Navigation Menu Toggle */

const hamburgerIcon = document.getElementById("hamburger-icon");
const menu = document.getElementById("menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerIcon.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("dropdown-menu");
});

/* Journal - New Entry Start Button */

const newEntry = document.querySelector(".journal-entry-form"); /* allows application of "start-new-entry" class to the "journal-new-entry-form" element inside "journal-entry-form" */
const newEntryButton = document.getElementById("journal-new-entry-icon"); /* lets us add an event listener to the icon */

newEntryButton.addEventListener("click", function () { /* on button "newEntryButton" clicked */
    newEntry.classList.toggle("start-new-entry"); /* applies "start-new-entry" class to form if not applied, removes it if it is already applied */
});