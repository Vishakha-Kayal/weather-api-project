const apiKey = "f7acd6492ce8c9119368fcab9ad64e08";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".heading input")
const searchBtn = document.querySelector(".srch-btn")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
  
    if(response.status === 404){
        document.querySelector(".error").style.visibility='visible';
    }

    document.querySelector(".celsius").innerHTML=Math.round(data.main.temp) + "°c";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".speed").innerHTML=data.wind.speed + "km/h";

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src="images/clouds.png";
    }

    else if(data.weather[0].main == 'Clear'){
        weatherIcon.src="images/clear.png";
    }

    else if(data.weather[0].main == 'Rain'){
        weatherIcon.src="images/rain.png";
    }

    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src="images/drizzle.png";
    }

    else if(data.weather[0].main == 'Mist'){
        weatherIcon.src="images/mist.png";
    }
    document.querySelector(".weather").style.visibility = "visible";
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

