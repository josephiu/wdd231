import {attraction} from "./attractions.mjs"
console.log(attraction)

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



// dicovery page


// // 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
// let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// // 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
// if (numVisits !== 0) {
//   if (differents < msToDays) {
//     visitsDisplay.textContent = `Back so soon! Awesome! `;
//     }else{
//       visitsDisplay.textContent = ` You last visited ${ (differents /msToDays).toFixed(0) }days ago.`;
      
//    }
  

// 	//visitsDisplay.textContent = numVisits;
// } else {
// 	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
// }

// // 4️⃣ increment the number of visits by one.
// numVisits++;

// // 5️⃣ store the new visit total into localStorage, key=numVisits-ls
// localStorage.setItem("numVisits-ls", numVisits);



