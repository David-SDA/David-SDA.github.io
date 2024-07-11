const sections = document.querySelectorAll("section");
const sectionButtons = document.querySelectorAll(".controlls");
const sectionButton = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-container");

// Transitions between pages
function pageTransitions(){
    // Button click that activates the section
    for(let i = 0; i < sectionButton.length; i++){
        sectionButton[i].addEventListener("click", function(){
            let currentButton = document.querySelectorAll(".active-btn");
            currentButton[0].className = currentButton[0].className.replace("active-btn", "");
            this.className += " active-btn";
        })
    }
}

pageTransitions();