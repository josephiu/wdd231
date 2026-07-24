



const url = "https://api.openweathermap.org/data/2.5/forecast?lat=24.44&lon=54.37&cnt=3&units=imperial&appid=17bec3e286d041d570e41d41ce1bd59f";

const weatherCard = document.querySelector(".weather");

// const temprature = document.querySelector(".weatherright");
// const  weatherCard2 = document.querySelector(".weather");

async function apiFecth() {
    try {             
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //  console.log(data); // this will test it to the browser inspector console
             displayResults(data);

        }else {
            throw Error(await response.text());
        }

   } catch(error) {

    console.log(error);
   }

}


apiFecth()

function displayResults(data) {

    const cityName = document.createElement("h3");
    const temp = doument.creatElement("h4");
    


    const currentdate = document.createElement("p");
    const weatherIcon = document.createElement("img");
    const humidity = document.createElement("p");
    const visibility = document.createElement("p");


    // let dateconvert = moment(data.list[0].dt);

    // currentdate.innerText = dateconvert;
    cityName.innerText = `${data.city.name}, ${data.city.country}`;
    // temp.innerHTML = `${data.list[0].main.temp}&deg;F <strong>${data.list[0].weather[0].description}</strong>`;
    humidity.innerText = `Humidity: ${data.list[0].main.humidity}`;
    visibility.innerText = `Visibility: ${data.list[0].visibility}`;

    //  const iconsrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;   
    // weatherIcon.setAttribute("src",iconsrc);
    // weatherIcon.setAttribute("alt", "image of day weather");

   
    weatherCard1.appendChild(cityName);
    // weatherCard1.appendChild(currentdate);

    //  weatherCard1.appendChild(weatherIcon);
    //  weatherCard1.appendChild(temp);


     weatherCard2.appendChild(humidity);
     weatherCard2.appendChild(visibility);  


    

}


