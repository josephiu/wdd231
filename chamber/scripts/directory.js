
const url = "https://raw.githubusercontent.com/josephiu/wdd231/refs/heads/main/chamber/data/members.json";

const buttonGrid = document.querySelector("#grid");
const buttonList= document.querySelector("#list");
const cards= document.querySelector(".gridcard");




async function getCompaniesData() {
    const response = await fetch(url);
    const data = await response.json(); 
    //refrencing the data object of the members array                                          
    displayCompanies(data.companies);                                                                                    

    // console.log(data.companies); // temporary testing of data retreival
  
}
  
getCompaniesData();


// //build a display cards for each item in our members array 
 const displayCompanies=(companies) => {

    companies.forEach((company) => {   

        let card = document.createElement("section");

        let cName = document.createElement("h1");
        let cLogo = document.createElement("img");
        let tele = document.createElement("p");
        let yeahJoin = document.createElement("p");
        let mLevel = document.createElement("p");
        let address = document.createElement("p");
        let web = document.createElement("p")
        

        card.classList.add("card-section")
        cName.classList.add("h1name");


        //  Build the h2 content out to show the member's 

        cName.textContent = `${company.company_name}`; 
        tele.textContent = `${company.phone_number}`;
        yeahJoin.textContent = `Joined year: ${company.joinYear}`;
        mLevel.textContent = `Membership level: ${company.membershipLevel}`;
        address.textContent = `${company.address}`;

        web.innerHTML = `<a href="${company.website}">${company.website}</a>`;


        cLogo.setAttribute("src", company.icon);
        cLogo.setAttribute("alt",`Logo of ${company.company_name}`);
        cLogo.setAttribute('loading', 'lazy');
        cLogo.setAttribute('width', '150');
        cLogo.setAttribute('height', '150');


        card.appendChild(cLogo);
        card.appendChild(cName);
        card.appendChild(yeahJoin);
        card.appendChild(mLevel);
        card.appendChild(tele);
        card.appendChild(address);
        card.appendChild(web);
        cards.appendChild(card);       
    
    });

}



// // The togle button.

buttonGrid.addEventListener("click", () => {
// 	// example using arrow function
    cards.classList.add("cardGrid");
    cards.classList.remove("cardList");
 });


 buttonList.addEventListener("click", () => {
    // 	// example using arrow function
    cards.classList.add("cardList");
    cards.classList.remove("cardGrid");
});
    


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

