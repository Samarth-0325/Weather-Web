const apikey = "3d727e035221ae61f114ab67306bc125";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";



document.addEventListener("DOMContentLoaded", () => {


  const searchbox = document.querySelector(".search-box input");
  const searchbtn = document.querySelector(".search-btn");

  async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    const data = await response.json();

    data.weather[0].main;

    const description = data.weather[0].description;

    document.querySelector(".city").innerHTML = data.name;

    document.querySelector(".Temp").innerHTML = Math.round(data.main.temp) + " °C";

    document.querySelector(".humidity-value").innerHTML = data.main.humidity + " %";

    document.querySelector(".wind-value").innerHTML = data.wind.speed + " km/h";
    
    document.querySelector("#condition").innerText = description;
  }

  // Pressing by search box...

  searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);

  });

  // Pressing by Enter key...

  searchbox.addEventListener("keydown",(event) => {

    if(event.key === "Enter"){

    checkweather(searchbox.value);

    }
  });




});










