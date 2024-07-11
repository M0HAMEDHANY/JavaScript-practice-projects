const apiKey = "c284a57c058a298ecc52b3583ee39463"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".find input")
const searchBtn = document.querySelector(".find button")
const weatherIcon = document.getElementById("weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`)
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.getElementById("weather").style.display = "none"
    }
    else {
        var data = await response.json();

        document.getElementById("city").innerHTML = data.name
        document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C"
        document.getElementById("humidity").innerHTML = data.main.humidity + "%"
        document.getElementById("wind").innerHTML = data.wind.speed + " km/h"

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "../images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "../images/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "../images/rain.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "../images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "../images/mist.png"
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "../images/snow.png"
        }
        document.getElementById("weather").style.display = "block"
        document.querySelector(".error").style.display = "none"

    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})