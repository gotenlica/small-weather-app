const key = "333181b2a5540eb7ebe3efc2fc6b5e75";
const url = "https://api.openweathermap.org/data/2.5/weather?q=Valletta,mt&units=metric&=";

const weatherIcon = document.querySelector(".icon");



async function checkWeather(city){
    const response = await fetch(url  + `&appid=${key}` )

let data = await response.json();
console.log(data);

if (response.status == "404"){

    document.querySelector(".erros").style.display = "block"}
    else{
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°";
    document.querySelector(".status").innerHTML  = data.weather[0].description;
    

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./images/clouds.png"
    }else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "./images/clear.png"

    }else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./images/drizzle.png"

}else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "./images/mist.png"


    }else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "./images/rain.png"

}else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "./images/snow.png"}

    }

    }

checkWeather()
