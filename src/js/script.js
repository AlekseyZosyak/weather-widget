import getRequst from "./services/servises";
import createTegOption from "./modules/test/test";



// const myApiKey = 'c09f348734566ce0124f07e10c69908e';
// let city = '';
// let key = '';


// getRequst('https://countriesnow.space/api/v0.1/countries')
//     .then(data => {
//         data.data.forEach(element => {
//             createTegOption('#country', element.country, element.iso2);
//         });
//     });

//     const inputCountry = document.querySelector('#country');
//     const inputCities = document.querySelector('#cities');

//     inputCountry.addEventListener('change', () => {
//         key = inputCountry.value;
//         inputCities.textContent = '';

//         getRequst('https://countriesnow.space/api/v0.1/countries')
//         .then(data => {
//             data.data.forEach(element => {
//                 if (key === element.iso2) {
//                     element.cities.forEach(item => {
//                         createTegOption('#cities', item);
//                     })

//                 }
//             });
//         });    

//     });


// getRequst('https://countriesnow.space/api/v0.1/countries')
//     .then(data => {
//         console.log(data)
//     })




function renderList() {
    let key = '';
    const buttonReset = document.querySelector('#reset');
    const inputCountry = document.querySelector('#country');
    const inputCities = document.querySelector('#cities');
    
    renderListCountry();
  
    inputCountry.addEventListener('change', () => {
        key = inputCountry.value;
        inputCities.textContent = '';
        renderListCities(key);
    });

    buttonReset.addEventListener('click', () => {
        inputCities.textContent = '';
        inputCountry.textContent = '';
        renderListCountry();
    })

}

renderList();


function renderListCountry() {
    getRequst('https://countriesnow.space/api/v0.1/countries')
        .then(data => {
            data.data.forEach(element => {
                createTegOption('#country', element.country, element.iso2);
            })
        })
}

function renderListCities(key) {
    getRequst('https://countriesnow.space/api/v0.1/countries')
        .then(data => {
            data.data.forEach(element => {
                if (key === element.iso2) {
                    element.cities.forEach(item => {
                        createTegOption('#cities', item);
                    })
                }
            });
        });
}







// getRequst(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${myApiKey}`)
//     .then(data => {
//         console.log(data)
//         console.log(`Місто: ${data.name}`);
//         console.log(`Температура: ${data.main.temp}°C`);
//         console.log(`Відчувається як: ${data.main.feels_like}°C`);
//         console.log(`Опис погоди: ${data.weather[0].description}`);
//         console.log(`Вологість: ${data.main.humidity}%`);
//         console.log(`Швидкість вітру: ${data.wind.speed} м/с`);
//         console.log(`Тиск: ${data.main.pressure} гПа`);
//     });



// console.log(`Місто: ${data.name}`);
// console.log(`Температура: ${data.main.temp}°C`);
// console.log(`Відчувається як: ${data.main.feels_like}°C`);
// console.log(`Опис погоди: ${data.weather[0].description}`);
// console.log(`Вологість: ${data.main.humidity}%`);
// console.log(`Швидкість вітру: ${data.wind.speed} м/с`);
// console.log(`Тиск: ${data.main.pressure} гПа`);






