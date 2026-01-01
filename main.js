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

/* Journal - Submit Entry Button & Create New Entry */

const submitButton = document.getElementById("journal-submit");

submitButton.addEventListener("click", function(e) {

    e.preventDefault(); // prevents page refreshing by default as usually happens when a form is submitted

    const journalMainApp = document.querySelector(".journal-app-container");
    const newArticle = document.createElement("div");
    const newArticleContent = document.createElement("div");
    const titleTag = document.createElement("h2");
    const dateTag = document.createElement("h2");
    const newEntryArticle = document.createElement("p");

    const entryTitle = document.getElementById("title").value; // uses "value" rather than "textContent" for form input fields
    const entryDate = document.getElementById("date").value;
    const entryArticle = document.getElementById("article").value;

    titleTag.innerHTML = entryTitle;
    dateTag.innerHTML = entryDate;
    newEntryArticle.innerHTML = entryArticle;

    newArticle.id = "new-article";
    newArticle.style.display = "inline-block";
    newArticle.style.border = "1px solid black";
    newArticle.style.borderRadius = "25px";
    newArticle.style.width = "100%";
    newArticle.style.margin = "100px 0px 100px 0px";
    newArticle.style.boxShadow = "10px 10px 10px black";

    newArticleContent.id = "new-article-content";
    newArticleContent.style.margin = "20px";

    journalMainApp.appendChild(newArticle);
    newArticle.appendChild(newArticleContent);
    document.getElementById("new-article-content").appendChild(titleTag);
    document.getElementById("new-article-content").appendChild(dateTag);
    document.getElementById("new-article-content").appendChild(newEntryArticle);

});