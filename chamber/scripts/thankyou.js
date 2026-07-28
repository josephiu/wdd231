









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


// thanks page/

const getformDetails = new URLSearchParams(window.location.search)

const formatted = new Date(getformDetails.get("datetime")).toLocaleString("en-AE", {
  dateStyle: "long",
  timeStyle: "short"
});


document.querySelector('#results').innerHTML = `
<p>Applicaion for <strong>  ${getformDetails.get("first")} ${getformDetails.get("last")} </strong></p>
<p>Organization Tittle: <strong>  ${getformDetails.get("organization-title")} </strong></p>
<p>Phone Number: <strong>  ${getformDetails.get("phone")}</strong></p>
<p>Email Address: <strong>  ${getformDetails.get("email")}</strong></p>
<p>Business/Organaization: <strong>  ${getformDetails.get("organization")}</strong></p>
<p>membership Level: <strong>  ${getformDetails.get("membershiplevel")}</strong></p>
<p>Date and Time Loaded: <strong>  ${formatted}</strong></p>`

const timeStamp = document.querySelector("#datetime")
timeStamp.value = new Date().toISOString();


