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

    const journalEntryHeader = document.createElement("div"); // the entry header
    journalEntryHeader.style.width = "98%";
    journalEntryHeader.style.display = "flex";
    journalEntryHeader.style.flexDirection = "row";
    journalEntryHeader.style.justifyContent = "space-between";
    journalEntryHeader.style.borderRadius = "25px";
    journalEntryHeader.style.padding = "5px 0px 5px 0px";
    journalEntry.appendChild(journalEntryHeader);

    const journalTitle = document.createElement("h2"); // the entry title
    journalTitle.innerHTML = savedEntry.title;
    journalTitle.style.display = "inline-block";
    journalTitle.style.width = "25%";
    journalTitle.style.textAlign = "left";
    journalTitle.style.padding = "0px 20px 0px 20px";
    journalEntryHeader.appendChild(journalTitle);

    const journalEntryBtn = document.createElement("button"); // button to expand a saved journal entry - styling below
    journalEntryBtn.innerHTML = "+";
    journalEntryBtn.style.width = "7.5%";
    journalEntryBtn.style.fontSize = "2.5em";
    journalEntryBtn.style.display = "inline-block";
    journalEntryBtn.style.padding = "0px 10px 0px 10px";
    journalEntryBtn.style.border = "none";
    journalEntryBtn.style.borderRadius = "25px";
    journalEntryBtn.style.margin = "0px 50px 0px 25px";
    journalEntryBtn.style.fontFamily = "Urbanist";
    journalEntryBtn.style.fontWeight = "400";
    journalEntryBtn.style.fontStyle = "normal";
    journalEntryBtn.style.backgroundColor = "#5E4C06";
    journalEntryBtn.style.color = "#FFF6D2";

    journalEntryHeader.appendChild(journalEntryBtn);

    const journalDate = document.createElement("h2"); // the entry date
    journalDate.innerHTML = savedEntry.date;
    journalDate.style.display = "inline-block";
    journalDate.style.fontWeight = "bold";
    journalDate.style.width = "25%";
    journalDate.style.textAlign = "right";
    journalDate.style.padding = "0px 20px 0px 20px";
    journalEntryHeader.appendChild(journalDate);

    journalEntry.appendChild(journalEntryHeader);

    const journalArticle = document.createElement("p"); // the entry main article
    journalArticle.innerHTML = savedEntry.article;
    journalArticle.style.display = "none";
    journalArticle.style.margin = "0px 20px 0px 20px";
    journalEntry.appendChild(journalArticle);

    const journalStepcount = document.createElement("p"); // the entry stepcount with emphasised styling
    journalStepcount.innerHTML = "Stepcount: " + savedEntry.stepcount;
    journalStepcount.style.display = "none";
    journalStepcount.style.backgroundColor = "#FFF6D2";
    journalStepcount.style.color = "#5E4C06";
    journalStepcount.style.padding = "10px";
    journalStepcount.style.margin = "25px 20px 25px 20px";
    journalStepcount.style.borderRadius = "15px";
    journalStepcount.style.width = "20%";
    journalStepcount.style.textAlign = "center";
    journalStepcount.style.fontWeight = "bold";
    journalEntry.appendChild(journalStepcount);

    journalEntryBtn.addEventListener('mouseover', () => { // event listeners for button
        journalEntryBtn.style.backgroundColor = "#FFF6D2";
        journalEntryBtn.style.color = "#5E4C06";
        journalEntryBtn.style.transition = "background-color ease-in-out 0.3s, color ease-in-out 0.3s";
    });

    journalEntryBtn.addEventListener('mouseout', () => {
        journalEntryBtn.style.backgroundColor = "#5E4C06";
        journalEntryBtn.style.color = "#FFF6D2";
    });

    journalEntryBtn.addEventListener('click', () => {
        if (journalArticle.style.display === "none") {
            journalArticle.style.display = "block";
            journalStepcount.style.display = "block";
            journalContainer.style.animation = "slideDown 1s ease-in-out";
        } else {
            journalArticle.style.display = "none";
            journalStepcount.style.display = "none";
        }
    });

    journalContainer.appendChild(journalEntry);
}