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

/* Journal - Submit Entry Button */

const submitButton = document.getElementById("journal-submit");

submitButton.addEventListener("click", function(e) {

    e.preventDefault(); // prevents page refreshing by default as usually happens when a form is submitted

    const entryTitle = document.getElementById("title").value; // uses "value" rather than "textContent" for form input fields
    const entryDate = document.getElementById("date").value;
    const entryArticle = document.getElementById("article").value;

    console.log("Entry Title: " + entryTitle);
    console.log("Entry Date: " + entryDate);
    console.log("Entry Article: " + entryArticle);

});