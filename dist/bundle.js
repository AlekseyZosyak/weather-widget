/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/ loading-list-api/loading-list-api.js":
/*!**************************************************************!*\
  !*** ./src/js/modules/ loading-list-api/loading-list-api.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadingListCities: () => (/* binding */ loadingListCities),
/* harmony export */   loadingListCountry: () => (/* binding */ loadingListCountry)
/* harmony export */ });
/* harmony import */ var _services_servises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/servises */ "./src/js/services/servises.js");
/* harmony import */ var _create_teg_option_create_teg_option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create-teg-option/create-teg-option */ "./src/js/modules/create-teg-option/create-teg-option.js");



function loadingListCities(key) {
    (0,_services_servises__WEBPACK_IMPORTED_MODULE_0__["default"])('https://countriesnow.space/api/v0.1/countries')
        .then(data => {
            data.data.forEach(element => {
                if (key === element.iso2) {
                    element.cities.forEach(item => {
                        (0,_create_teg_option_create_teg_option__WEBPACK_IMPORTED_MODULE_1__["default"])('#cities', item, item);
                    })
                }
            });
        });
}

function loadingListCountry() {
    (0,_services_servises__WEBPACK_IMPORTED_MODULE_0__["default"])('https://countriesnow.space/api/v0.1/countries')
        .then(data => {
            data.data.forEach(element => {
                (0,_create_teg_option_create_teg_option__WEBPACK_IMPORTED_MODULE_1__["default"])('#country', element.country, element.iso2);
            });
        });
};




/***/ }),

/***/ "./src/js/modules/create-teg-option/create-teg-option.js":
/*!***************************************************************!*\
  !*** ./src/js/modules/create-teg-option/create-teg-option.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function createTegOption(id, country, iso2) {
    const input = document.querySelector(id)
    const teg = document.createElement('option');
    teg.textContent = `${country}`;
    teg.setAttribute('value', `${iso2}`);
    input.append(teg);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTegOption);
   




/***/ }),

/***/ "./src/js/modules/main/main.js":
/*!*************************************!*\
  !*** ./src/js/modules/main/main.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loading_list_api_loading_list_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ loading-list-api/loading-list-api */ "./src/js/modules/ loading-list-api/loading-list-api.js");
/* harmony import */ var _services_servises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/servises */ "./src/js/services/servises.js");
/* harmony import */ var _weather_card_weather_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather-card/weather-card */ "./src/js/modules/weather-card/weather-card.js");




function renderСhooseList() {

    const myApiKey = 'c09f348734566ce0124f07e10c69908e';

    const buttonReset = document.querySelector('#reset');
    const inputCountry = document.querySelector('#country');
    const inputCities = document.querySelector('#cities');
    const weather = document.querySelector('.weather');
    let key = '';
    let control = 0;

    (0,_loading_list_api_loading_list_api__WEBPACK_IMPORTED_MODULE_0__.loadingListCountry)();

    inputCountry.addEventListener('change', () => {
        key = inputCountry.value;
        inputCities.innerHTML = `<option value="" selected disabled>выберите город</option>`;
        (0,_loading_list_api_loading_list_api__WEBPACK_IMPORTED_MODULE_0__.loadingListCities)(key);
    });

    buttonReset.addEventListener('click', () => {

        inputCountry.innerHTML = `<option value="" selected disabled>выберите страну</option>`;
        inputCities.innerHTML = `<option value="" selected disabled>выберите город</option>`;
        weather.innerHTML = '';
        (0,_loading_list_api_loading_list_api__WEBPACK_IMPORTED_MODULE_0__.loadingListCountry)();
    })




    inputCities.addEventListener('change', () => {
        if (control === 1) {
            weather.innerHTML = '';
            control = 0;
        }
        (0,_services_servises__WEBPACK_IMPORTED_MODULE_1__["default"])(`https://api.openweathermap.org/data/2.5/weather?q=${inputCities.value}&units=metric&appid=${myApiKey}`)
            .then(data => {
                new _weather_card_weather_card__WEBPACK_IMPORTED_MODULE_2__["default"]('.weather', data.name, data.main.temp, data.weather[0].description, data.main.humidity, data.wind.speed, data.weather[0].icon).render();
            })
            .then(control = 1)
            .catch(function () {
                weather.innerHTML = `
                    <div class="warning">
                        <img class="warning__logo" src="/icons/warning/warning-icon.svg" alt="">
                        <div class="warning__inner">
                            <h2 class="warning__title">Извените, произошла ошибка!</h2>
                            <p class="warning__text">Сервер мало знает про эту страну или город, попробуйте другие регионы...</p>
                        </div>
                    </div>`
            })

    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderСhooseList);

/***/ }),

/***/ "./src/js/modules/weather-card/weather-card.js":
/*!*****************************************************!*\
  !*** ./src/js/modules/weather-card/weather-card.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

class WeatherCard {
    constructor(parendSelector, city, temperature, description, humidity, windSpeed, icon) {
        this.parent = document.querySelector(parendSelector);
        this.city = city;
        this.temperature = temperature;
        this.description = description;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.icon = icon;
        this.img = {};
    }


    roundingTemperature(n) {
        const temp = Math.round(n);
        return temp;
    }


    render() {
        const element = document.createElement('div');
        element.innerHTML = `
            <h2 class="weather__title">${this.city}</h2>
            <div class="weather__container">

                <div class="weather__container__inner">
                    <span class="weather__temp">${this.roundingTemperature(this.temperature)}<span style="color: black">°C</span></span>
                    <span>Описание - ${this.description}</span>
                    <samp>Влажность - ${this.humidity} %</samp>
                    <samp>Ветер - ${this.windSpeed} м/с</samp>
                </div>
                <div class="weather__container__icon">
                    <img src="https://openweathermap.org/img/wn/${this.icon}@2x.png" class="weather__icon">
                </div>
            </div>
        `;
        this.parent.append(element);
    }
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeatherCard);

/***/ }),

/***/ "./src/js/services/servises.js":
/*!*************************************!*\
  !*** ./src/js/services/servises.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const getRequst = async (url) => {

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`ERROR url: ${url}, status: ${response.status}`)
    }
    
    return await response.json();
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRequst);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_servises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/servises */ "./src/js/services/servises.js");
/* harmony import */ var _modules_main_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/main/main */ "./src/js/modules/main/main.js");
/* harmony import */ var _modules_create_teg_option_create_teg_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/create-teg-option/create-teg-option */ "./src/js/modules/create-teg-option/create-teg-option.js");




window.addEventListener('DOMContentLoaded', () => {
    (0,_modules_main_main__WEBPACK_IMPORTED_MODULE_1__["default"])();    
})
















// console.log(`Місто: ${data.name}`);
// console.log(`Температура: ${data.main.temp}°C`);
// console.log(`Відчувається як: ${data.main.feels_like}°C`);
// console.log(`Опис погоди: ${data.weather[0].description}`);
// console.log(`Вологість: ${data.main.humidity}%`);
// console.log(`Швидкість вітру: ${data.wind.speed} м/с`);
// console.log(`Тиск: ${data.main.pressure} гПа`);





})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map