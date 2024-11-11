import { loadingListCountry, loadingListCities } from "../ loading-list-api/loading-list-api";
import getRequst from "../../services/servises";
import WeatherCard from "../weather-card/weather-card";

function renderСhooseList() {

    const myApiKey = 'c09f348734566ce0124f07e10c69908e';
    let city = '';
   

    const buttonReset = document.querySelector('#reset');
    const inputCountry = document.querySelector('#country');
    const inputCities = document.querySelector('#cities');
    let key = '';

    loadingListCountry();

    inputCountry.addEventListener('change', () => {
        key = inputCountry.value;
        inputCities.innerHTML = `<option value="" selected disabled>выберите город</option>`;
        loadingListCities(key);
    });

    // buttonReset.addEventListener('click', () => {
    //     inputCities.textContent = '';
    //     inputCountry.textContent = '';
    //     loadingListCountry();
    // })


  

    inputCities.addEventListener('change', () => {
        getRequst(`https://api.openweathermap.org/data/2.5/weather?q=${inputCities.value}&units=metric&appid=${myApiKey}`)
        .then(data => {
            new WeatherCard('.weather', data.name, data.main.temp, data.weather[0].description, data.main.humidity, data.wind.speed).render();
            console.log(data)
            console.log(`Місто: ${data.name}`);
            console.log(`Температура: ${data.main.temp}°C`);
            console.log(`Відчувається як: ${data.main.feels_like}°C`);
            console.log(`Опис погоди: ${data.weather[0].description}`);
            console.log(`Вологість: ${data.main.humidity}%`);
            console.log(`Швидкість вітру: ${data.wind.speed} м/с`);
            console.log(`Тиск: ${data.main.pressure} гПа`);
        });
    })
}

export default renderСhooseList;