const baseURL = "https://josephiu.github.io/wdd231";

const linksURL = "https://josephiu.github.io/wdd231/data/members.json";


const buttonGrid = document.querySelector("#grid");
const buttonList= document.querySelector("#list");
const htmlcards= document.querySelector(".cardGrid");




async function getMembersData() {
    const response = await fetch(linksURL);
    const data = await response.json(); 
    //refrencing the data object of the members array                                          
    displayMembers(data.companies);                                                                                    

    console.log(data.companies); // temporary testing of data retreival
  
}
  
getMembersData();


//build a display cards for each item in our members array 
 const displayMembers = (members) => {

    members.forEach((member) => {   

        let card = document.createElement("section");

        let cName = document.createElement("h4");
        let cLogo = document.createElement("img");
        let tele = document.createElement("p");
        let yeahJoin = document.createElement("p");
        let mLevel = document.createElement("p");
        let address = document.createElement("p");
        let web = document.createElement("p")
        


        //  Build the h2 content out to show the member's 

        cName.textContent = `${member.company_name}`; 
        tele.textContent = `${member.phone_number}`;
        yeahJoin.textContent = `Joined year: ${member.joinYear}`;
        mLevel.textContent = `Membership level: ${member.membershipLevel}`;
        address.textContent = `${member.address}`;




        web.innerHTML = `<a href="${member.website}">${member.website}</a>`;


        cLogo.setAttribute("src", member.icon);
        cLogo.setAttribute("alt",`Logo of ${member.company_name}`);
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



        htmlcards.appendChild(card);       
    
    });

}



// The togle button.

buttonGrid.addEventListener("click", () => {
// 	// example using arrow function
    htmlcards.classList.add("cardGrid");
    htmlcards.classList.remove("cardList");
 });


 buttonList.addEventListener("click", () => {
    // 	// example using arrow function
    htmlcards.classList.add("cardList");
    htmlcards.classList.remove("cardGrid");
     });
    


