

// colour dark mode by toggle
const dark = document.querySelector(".contrast-icon");
const htmlbody = document.querySelector("body");


if (localStorage.getItem("theme") === "dark") 
    {
    htmlbody.classList.toggle("dark-mode");
}


dark.addEventListener("click", () => {
     htmlbody.classList.toggle("dark-mode"); 

    if (htmlbody.classList.contains("dark-mode")){
        localStorage.setItem("theme", "dark")
    }
    else {
        localStorage.setItem("theme", "light");
    }
        
    });  


    // Hamburger menue
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav');  

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle("active");
    // hamburger.classList.toggle('close');
});




// join page modals

const npButton = document.querySelector("#npButton");
const bronzeButton = document.querySelector("#bronzeButton");
const silverButton = document.querySelector("#silverButton");
const goldButton = document.querySelector("#goldButton");


const dialogBox = document.querySelector("#dialogBox");
const dialogBoxText = document.querySelector("#dialogBox div");

const closeButton = document.querySelector("#closeButton");

// " show the dialog"

npButton.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Cost AED 100 monthly: This is a non profit membership, you will have 
    a standard mebership benefits only plus 5% discount on all your inportations, stardard membership have free consultations
    and members priority consultant.`
});


bronzeButton.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML =`Cost AED 100 monthly: Bronze level have access to all Non proift benefits plus free trainigns, and 30% discount on all 
    your inportations`
});

silverButton.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Cost AED 150 monthly: Silver level have access to all Non proift and silver benefits plus and 20% discount on all 
    your Exportations`
});

goldButton.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = ` Cost AED 200 monthly: Gold members have 40% discount on all inport and exports pluse free special events plannings, training, 6% dicount on  advertising (like spotlight positions on the home page)`
});


closeButton.addEventListener("click", () => {
    dialogBox.close();
});


const timeStamp = document.querySelector("#datetime")
timeStamp.value = new Date().toISOString();