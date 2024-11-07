/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_servises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/servises */ "./src/js/services/servises.js");



window.addEventListener('DOMContentLoaded', () => {
  
    const myApiKey = 'c09f348734566ce0124f07e10c69908e';
    const city = 'Kiev';
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}&units=metric`;
    const url2 = 'https://restcountries.com/v3.1/all';
    const url3 = 'https://countriesnow.space/api/v0.1/countries';
    
    
    
    
        
    (0,_services_servises__WEBPACK_IMPORTED_MODULE_0__["default"])(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${myApiKey}`)
        .then(data => {
            console.log(data)
        })

function addTeg(data) {
    
    // data.forEach(element => {
    //     console.log(element)
    // });
    // const optionTeg = document.createElement('option');
    // optionTeg.textContent = `${item.country} - ${item.iso2}`;
    // optionTeg.setAttribute('value', `${item.iso2}`)
    // box.append(optionTeg);
}   







        
        


});



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map