import { loadingListCountry, loadingListCities } from "../ loading-list-api/loading-list-api";
import getRequst from "../../services/servises";
import WeatherCard from "../weather-card/weather-card";

function renderСhooseList() {

    const myApiKey = 'c09f348734566ce0124f07e10c69908e';

    const buttonReset = document.querySelector('#reset');
    const inputCountry = document.querySelector('#country');
    const inputCities = document.querySelector('#cities');
    let weather = document.querySelector('.weather');
    let key = '';
    let pasport = 0;

    loadingListCountry();

    inputCountry.addEventListener('change', () => {
        key = inputCountry.value;
        inputCities.innerHTML = `<option value="" selected disabled>выберите город</option>`;
        loadingListCities(key);
    });

    buttonReset.addEventListener('click', () => {

        inputCountry.innerHTML = `<option value="" selected disabled>выберите страну</option>`;
        inputCities.innerHTML = `<option value="" selected disabled>выберите город</option>`;
        weather.innerHTML = '';
        loadingListCountry();
    })




    inputCities.addEventListener('change', () => {
        if (pasport === 1) {
            weather.innerHTML = '';
            pasport = 0;
        }
        getRequst(`https://api.openweathermap.org/data/2.5/weather?q=${inputCities.value}&units=metric&appid=${myApiKey}`)
            .then(data => {
                new WeatherCard('.weather', data.name, data.main.temp, data.weather[0].description, data.main.humidity, data.wind.speed).render();
            })
            .then(pasport = 1)
            .catch(function () {
                weather.innerHTML = `
                    <div class="warning">
                        <img class="warning__logo" src="/icons/warning-icon.svg" alt="">
                        <div class="warning__inner">
                            <h2 class="warning__title">Извените, произошла ошибка!</h2>
                            <p class="warning__text">Сервер мало знает про ету страну или город, попробуйте другие регионы...</p>
                        </div>
                    </div>`
            })

    })
}

export default renderСhooseList;