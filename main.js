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

    const journalTitle = document.createElement("h2"); // the entry title
    journalTitle.innerHTML = savedEntry.title;
    journalEntry.appendChild(journalTitle);

    const journalEntryBtn = document.createElement("button"); // button to expand a saved journal entry - styling below
    journalEntryBtn.innerHTML = "+";
    journalEntryBtn.style.fontSize = "2.5em";
    journalEntryBtn.style.display = "inline-block";
    journalEntryBtn.style.float = "right";
    journalEntryBtn.style.padding = "0px 15px 0px 15px";
    journalEntryBtn.style.border = "none";
    journalEntryBtn.style.borderRadius = "50%";
    journalEntryBtn.style.margin = "0px 50px 0px 25px";
    journalEntryBtn.style.fontFamily = "Urbanist";
    journalEntryBtn.style.fontWeight = "400";
    journalEntryBtn.style.fontStyle = "normal";
    journalEntryBtn.style.backgroundColor = "#5E4C06";
    journalEntryBtn.style.color = "#FFF6D2";

    journalEntryBtn.addEventListener('mouseover', () => {
        journalEntryBtn.style.backgroundColor = "#FFF6D2";
        journalEntryBtn.style.color = "#5E4C06";
        journalEntryBtn.style.transition = "background-color ease-in-out 0.3s, color ease-in-out 0.3s";
    });

        journalEntryBtn.addEventListener('mouseout', () => {
        journalEntryBtn.style.backgroundColor = "#5E4C06";
        journalEntryBtn.style.color = "#FFF6D2";
    });

    journalEntry.appendChild(journalEntryBtn);

    const journalDate = document.createElement("p"); // the entry date
    journalDate.innerHTML = savedEntry.date;
    journalEntry.appendChild(journalDate);

    const journalArticle = document.createElement("p"); // the entry main article
    journalArticle.innerHTML = savedEntry.article;
    journalEntry.appendChild(journalArticle);

    const journalStepcount = document.createElement("p"); // the entry stepcount with emphasised styling
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