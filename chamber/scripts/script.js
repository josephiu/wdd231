
const url = "https://raw.githubusercontent.com/josephiu/wdd231/refs/heads/main/chamber/data/members.json";

const buttonGrid = document.querySelector("#grid");
const buttonList= document.querySelector("#list");
const cards= document.querySelector(".dynamic_members");



async function getCompaniesData() {
    const response = await fetch(url);
    const data = await response.json(); 

    // this shuffles the company data ramdomly
    const randomcompany = randomArray(data.companies)

    const shuffledCompany = randomcompany.slice(0,3);
                                           
    displayCompanies(shuffledCompany);                                                                                    

    console.log(data.companies)
    
  
}
  
getCompaniesData();


// //build a display cards for each item in our members array 
 const displayCompanies=(companies) => {

    //check to see if the companies are either Gold or Silver
    companies.forEach((company) => { 
        if (company.membershipLevel === "Gold" || company.membershipLevel === "Silver") {
    // make cards
  

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
        yeahJoin.innerHTML = `<strong>${company.joinYear}</strong> | <strong>${company.membershipLevel}</strong>`;
        // mLevel.innerHTML = `<strong>${company.membershipLevel}</strong>`;
        address.textContent = `${company.address}`;

        web.innerHTML = `<a href="${company.website}">${company.website}</a>`;


        cLogo.setAttribute("src", company.icon);
        cLogo.setAttribute("alt",`Logo of ${company.company_name}`);
        cLogo.setAttribute('loading', 'lazy');
        cLogo.setAttribute('width', '150');
        cLogo.setAttribute('height', '100');   
        


        card.appendChild(cLogo);
        card.appendChild(cName);
        card.appendChild(yeahJoin);
        // card.appendChild(mLevel);
        card.appendChild(tele);
        card.appendChild(address);
        card.appendChild(web);
        cards.appendChild(card);       
    
    }
    else{
        alert("Thee is no gold or silver")
    }
});

}


// Random card function
function randomArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}





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





const weatherapi = "https://pro.openweathermap.org/data/2.5/forecast?lat=25.53&lon=55.54&units=metric&appid=c1789baf6a0be89f14a79d12bed33ee9"

async function getWeatherData(weatherapi) {
    const response = await fetch(weatherapi);
    const data = await response.json(); 

    console.log(data);      // Inspect the raw API response
    displayWeather(data);
                                                                                   

    // console.log(data.companies); // temporary testing of data retreival
  
}

getWeatherData (weatherapi);


function displayWeather(apiData) {

    const allForecast = {};
    // grouping the weather data by date


    apiData.list.forEach(item => {

        const date = item.dt_txt.split(" ")[0];

        if (!allForecast[date]) {
            allForecast[date] = [];
        }

        allForecast[date].push(item);
    });

    const firstFourDaysKeys = Object.keys(allForecast).slice(0, 4);

    // Get the forecast data for those 3 days
    const fourDaysData = firstFourDaysKeys.map(date => ({
        date,
        forecasts: allForecast[date],
        middayWeather:
            allForecast[date].find(f => f.dt_txt.includes("12:00:00")) ||
            allForecast[date][0]
    }));

    console.log(fourDaysData);
    // console.log(allForecast);

    const weatherContainer = document.querySelector(".weather")

    if (fourDaysData.length === 4){

        //clearing the html card container
        weatherContainer.innerHTML = ""

        // seperate the four days. by puting them in separate variables
        const today = fourDaysData[0].middayWeather;
        const day1 = fourDaysData[1].middayWeather;
        const day2= fourDaysData[2].middayWeather; 
        const day3= fourDaysData[3].middayWeather; 

        // accessing the content of each days bases on my need and keeping them in variables
        //Today
        const temp1 = today.main.temp;
        const description1 = today.weather[0].description;
        const icon1 = today.weather[0].icon;
        const date1 = fourDaysData[0].date

        // accessing the content of each days bases on my need and keeping them in variables
        //day 1
        const temp2 = day1.main.temp;
        const description2 = day1.weather[0].description;
        const icon2 = day1.weather[0].icon;
        const date2 = fourDaysData[1].date
       

        // accessing the content of each days bases on my need and keeping them in variables
        //day 2
        const temp3 = day2.main.temp;
        const description3 = day2.weather[0].description;
        const icon3 = day2.weather[0].icon;
        const date3 = fourDaysData[2].date;


        // accessing the content of each days bases on my need and keeping them in variables
        //day 3
        const temp4 = day3.main.temp;
        const description4 = day3.weather[0].description;
        const icon4 = day3.weather[0].icon;
        const date4 = fourDaysData[3].date;


        // creating html elements to make individual weather cards
        const weatherCard1 = document.createElement("div");
        const weatherCard2 = document.createElement("div");
        const weatherCard3 = document.createElement("div");
        const weatherCard4 = document.createElement("div");
        
        // i give them a class for styling
        weatherCard1.classList.add("w_box1");

        weatherCard2.classList.add("smallbox1");
        weatherCard3.classList.add("smallbox2");
        weatherCard4.classList.add("smallbox3");

      
        


        // here am creting html elements for the cards as i need
        // today
        const weatherIcon1 = document.createElement("img")
        const weatherTemp1= document.createElement("h4")    
        const weatherDecription1 = document.createElement("p")
        const weatherDate1 = document.createElement("p")


        weatherTemp1.innerText = `${temp1}°C`;
        weatherDecription1.innerText = description1;

        weatherIcon1.src = `https://openweathermap.org/img/wn/${icon1}@2x.png`;
        weatherIcon1alt = description1;

       
        weatherDate1.innerHTML = `<strong>${weatherDateFormated(date1)}</strong>`;

        // here am creting html elements for the cards as i need
        // day 1
        const weatherIcon2 = document.createElement("img")
        const weatherTemp2 = document.createElement("h4")    
        const weatherDecription2 = document.createElement("p")
        const weatherDate2 = document.createElement("p")


        weatherTemp2.innerText = `${temp2}°C`;
        weatherDecription2.innerText = description2;
        weatherIcon2.src = `https://openweathermap.org/img/wn/${icon2}@2x.png`;
        weatherIcon2.alt = description2;
        weatherDate2.innerHTML = `<strong>${weatherDateFormated(date2)}</strong>`;


        // here am creting html elements for the cards as i need
        // day 3
        const weatherIcon3 = document.createElement("img")
        const weatherTemp3 = document.createElement("h4")    
        const weatherDecription3 = document.createElement("p")
        const weatherDate3 = document.createElement("p")


        weatherTemp3.innerText = `${temp3}°C`;
        weatherDecription3.innerText = description3;

        weatherIcon3.src = `https://openweathermap.org/img/wn/${icon3}@2x.png`;
        weatherIcon3.alt = description3;
        weatherDate3.innerHTML = `<strong>${weatherDateFormated(date3)}</strong>`;



        // here am creting html elements for the cards as i need
        // day 4
        const weatherIcon4 = document.createElement("img")
        const weatherTemp4 = document.createElement("h4")    
        const weatherDecription4 = document.createElement("p")
        const weatherDate4 = document.createElement("p")


        weatherTemp4.innerText = `${temp4}°C`;
        weatherDecription4.innerText = description4;

        weatherIcon4.src = `https://openweathermap.org/img/wn/${icon4}@2x.png`;
        weatherIcon4.alt = description4;
        weatherDate4.innerHTML = `<strong>${weatherDateFormated(date4)}</strong>`;


        // appending the elements into the card
        // Today
        weatherCard1.appendChild(weatherIcon1);
        weatherCard1.appendChild(weatherTemp1);
        weatherCard1.appendChild(weatherDecription1);
        weatherCard1.appendChild(weatherDate1);


        // appending the elements into the card
        // day 1
        weatherCard2.appendChild(weatherIcon2);
        weatherCard2.appendChild(weatherTemp2)
        weatherCard2.appendChild(weatherDecription2);
        weatherCard2.appendChild(weatherDate2);


         // appending the elements into the card
        // day 2
        weatherCard3.appendChild(weatherIcon3);
        weatherCard3.appendChild(weatherTemp3);
        weatherCard3.appendChild(weatherDecription3);
        weatherCard3.appendChild(weatherDate3);


        // appending the elements into the card
        // day 3
        weatherCard4.appendChild(weatherIcon4);
        weatherCard4.appendChild(weatherTemp4);
        weatherCard4.appendChild(weatherDecription4);
        weatherCard4.appendChild(weatherDate4);

        // h1 elemebent to be used as header

        const h3Card = document.createElement("h3")

        h3Card.innerText = "3 DAYS WEATHER FORCAST"

        h3Card.classList.add("h3card")


        // combined the 3 days forcast cards and a h3 element
        const combinedCards  =document.createElement("div")
        combinedCards.classList.add("w_box2");



        combinedCards.appendChild(h3Card);
        combinedCards.appendChild(weatherCard2);
        combinedCards.appendChild(weatherCard3);
        combinedCards.appendChild(weatherCard4);









        weatherContainer.appendChild(weatherCard1) 
        weatherContainer.appendChild(combinedCards) 
        


    }
    else{
        alert("Three Days is not in the list")
    }

     
};



function weatherDateFormated(dateString) {
    const date = new Date(dateString);

    return date.toLocaleDateString("en-AE", {
        weekday: "short",
        day: "numeric",
        month: "short"
    });
}