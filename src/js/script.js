import getRequst from "./services/servises";
import renderСhooseList from "./modules/main/main";
import createTegOption from "./modules/create-teg-option/create-teg-option";

window.addEventListener('DOMContentLoaded', () => {
    const myApiKey = 'c09f348734566ce0124f07e10c69908e';
    getRequst(`https://api.openweathermap.org/data/2.5/weather?q=Kiev&units=metric&appid=${myApiKey}`)
        .then(data => {
            console.log(data)
        })
    renderСhooseList();
    
})
















// console.log(`Місто: ${data.name}`);
// console.log(`Температура: ${data.main.temp}°C`);
// console.log(`Відчувається як: ${data.main.feels_like}°C`);
// console.log(`Опис погоди: ${data.weather[0].description}`);
// console.log(`Вологість: ${data.main.humidity}%`);
// console.log(`Швидкість вітру: ${data.wind.speed} м/с`);
// console.log(`Тиск: ${data.main.pressure} гПа`);




