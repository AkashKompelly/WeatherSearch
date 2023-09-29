// GETTING ELEMENTS USING CUSTOME FUNCTION
var apikey = "0e3b8b78c55c0b72309808592b16e9f1";
var searchBox = getElementById("input");
var searchBtn = getElementById("btn");

// CLICK EVENT
searchBtn.addEventListener("click", () => {
  weatherData(searchBox.value);
});

// WEATHER DATA FUNCTION
async function weatherData(city) {
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  var res = await fetch(url);
  var data = await res.json();
  var weatherImg = getElementById("weather-img");
  if (data.cod == "404") {
    document.querySelector(".error").style.display = "block";
  } else {
    if (data.weather[0].main == "Clouds") {
      weatherImg.setAttribute("src", "images/clouds.png");
      getElementById("Weather-data").innerHTML = data.weather[0].main;
    } else if (data.weather[0].main == "Clear") {
      weatherImg.setAttribute("src", "images/clear.png");
    } else if (data.weather[0].main == "Rain") {
      weatherImg.setAttribute("src", "images/rain.png");
    } else if (data.weather[0].main == "Drizzle") {
      weatherImg.setAttribute("src", "images/drizzle.png");
    } else if (data.weather[0].main == "Mist") {
      weatherImg.setAttribute("src", "images/mist.png");
    }

    getElementById("temp").innerHTML = Math.round(data.main.temp) + "°c";
    getElementById("city").innerHTML = data.name;
    getElementById("humidity").innerHTML = data.main.humidity + "%";
    getElementById("windspeed").innerHTML = data.wind.speed + " km/h";
    getElementById("Weather-data").innerHTML = data.weather[0].description;
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

// ELEMENT GETTING FUNCTION
function getElementById(name) {
  return document.getElementById(name);
}
