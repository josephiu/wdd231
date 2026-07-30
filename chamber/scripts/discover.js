import {url} from "./attractions.mjs" // this is not needed because iam i ahave all photos in my computer,  but i added it anyways
// console.log(url)


import {attraction} from "./attractions.mjs"
// console.log(attraction)

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



// Discover Page
 












function displayItems(data){
    console.log(data);
    data.forEach(x => {
        // console.log(x);        
        const placesContainer =  document.querySelector(".places_containner");

        const placesCard = document.createElement("div")


        const title =  document.createElement("h2")
        const descriptionAdress = document.createElement("p")      

        const entry = document.createElement("strong")
        const btn = document.createElement("button")        


        const photo = document.createElement("img");

        photo.src = `${url}${x.image_url}`;
        photo.alt = x.name;
        photo.width = "300";
        photo.height = "200";
        photo.loading = "lazy";

        title.innerText = x.name

        descriptionAdress.innerHTML=`${x.description}<br><br>${x.address}`;

        if(x.amount === 0){

            entry.innerHTML =  `${x.type} | Free`;

        }
        else{
            entry.innerHTML =  `${x.type} | ${x.amount} AED`;
        };
        
    


        btn.innerText = "Learn More";

        placesCard.appendChild(photo);
        placesCard.appendChild(title);
        placesCard.appendChild(descriptionAdress);
        placesCard.appendChild(entry);
        placesCard.appendChild(btn);

        

        placesContainer.appendChild(placesCard);

        

       
    });
}



displayItems(attraction);







// 1️⃣ Initialize display element variable
// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;

const visitsDisplay = document.querySelector("#visit");



const datandTimeofVisit = new Date(); 
const datandTimeofVisitStr = datandTimeofVisit.toString(); // converts date time to string

 const todayDateandTime = new Date();


//const todayTime = todayDateandTime.getTime();

// then save the string form in local storage
localStorage.setItem('date',datandTimeofVisitStr);




//then get the string from local storage 
const checkDateStr = localStorage.getItem('date');
const checkDate = new Date(checkDateStr); // converts the date string to date methode



const timestamp = todayDateandTime.getTime();


const differents = checkDate.getTime() - timestamp;



// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
  if (differents < msToDays) {
    visitsDisplay.innerText = `Back so soon! Awesome! `;
    }else{
      visitsDisplay.innerText = ` You last visited ${ (differents /msToDays).toFixed(0) }days ago.`;
      
   } 

	//visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.innerText = `Welcome! Let us know if you have any questions.`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);
