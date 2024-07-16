const sections = document.querySelectorAll(".section");
const sectionButtons = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-container");

// Transitions between pages
function pageTransitions() {
    // Button click that activates the buttons
    for(let i = 0; i < sectionButtons.length; i++){
        sectionButtons[i].addEventListener("click", function (){
            let currentButton = document.querySelector(".active-btn");
            currentButton.classList.remove("active-btn");
            this.classList.add("active-btn");

            // Sections that will be active
            const id = this.dataset.id;
            if(id){
                // Remove active class from other sections
                sections.forEach((section) => {
                    section.classList.remove("active");
                });
                // Add active class to the current section
                const element = document.getElementById(id);
                element.classList.add("active");
            }
        });
    }

    // Toggle theme
    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener("click", () => {
        let element = document.body;
        element.classList.toggle("light-mode");
    })
}

pageTransitions();