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

submitButton.addEventListener("click", function() {
    const entryTitle = document.getElementById("title").value;
    const entryDate = document.getElementById("date").value;
    const entryArticle = document.getElementById("article").value;
    const entryStepcount = document.getElementById("stepcount").value;

    const newEntry = {
        title: entryTitle,
        date: entryDate,
        article: entryArticle,
        stepcount: entryStepcount
    }

    localStorage.setItem(entryTitle, JSON.stringify(newEntry));

});

/* Journal - Display Current Entries */

for (let i = 0; i < localStorage.length; i++) {
    
    const key = localStorage.key(i);
    const savedEntry = JSON.parse(this.localStorage.getItem(key));


    console.log("Title: " + savedEntry.title);
    console.log("Date: " + savedEntry.date);
    console.log("Article: " + savedEntry.article);
    console.log("Stepcount: " + savedEntry.stepcount);
    console.log("-----------------------");

    const journalContainer = document.createElement("div");

    journalContainer.style.width = "90%";
    journalContainer.style.display = "inline-block";
    journalContainer.style.border = "1px solid black";
    journalContainer.style.borderRadius = "25px";
    journalContainer.style.margin = "20px";
    journalContainer.style.backgroundColor = "#5E4C06";
    journalContainer.style.color = "#FFF6D2";

    const journalSavedEntries = document.querySelector(".journal-saved-entries");
    journalSavedEntries.appendChild(journalContainer);

    const journalEntry = document.createElement("div");

    journalEntry.style.width = "100%";
    journalEntry.style.padding = "5px 10px 5px 10px";
    journalEntry.style.textAlign = "left";

    const journalTitle = document.createElement("h2");
    journalTitle.innerHTML = savedEntry.title;
    journalEntry.appendChild(journalTitle);

    const journalDate = document.createElement("p");
    journalDate.innerHTML = savedEntry.date;
    journalEntry.appendChild(journalDate);

    const journalArticle = document.createElement("p");
    journalArticle.innerHTML = savedEntry.article;
    journalEntry.appendChild(journalArticle);

    const journalStepcount = document.createElement("p");
    journalStepcount.innerHTML = "Stepcount: " + savedEntry.stepcount;
    journalStepcount.style.backgroundColor = "#FFF6D2";
    journalStepcount.style.color = "#5E4C06";
    journalStepcount.style.padding = "15px";
    journalStepcount.style.borderRadius = "15px";
    journalStepcount.style.width = "20%";
    journalStepcount.style.textAlign = "center";
    journalStepcount.style.fontWeight = "bold";
    journalEntry.appendChild(journalStepcount);

    journalContainer.appendChild(journalEntry);
}