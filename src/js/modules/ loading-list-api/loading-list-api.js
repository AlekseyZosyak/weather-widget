import getRequst from "../../services/servises";
import createTegOption from "../create-teg-option/create-teg-option";

function loadingListCities(key) {
    getRequst('https://countriesnow.space/api/v0.1/countries')
        .then(data => {
            data.data.forEach(element => {
                if (key === element.iso2) {
                    element.cities.forEach(item => {
                        createTegOption('#cities', item, item);
                    })
                }
            });
        });
}

function loadingListCountry() {
    getRequst('https://countriesnow.space/api/v0.1/countries')
        .then(data => {
            data.data.forEach(element => {
                createTegOption('#country', element.country, element.iso2);
            });
        });
};

export { loadingListCountry };
export { loadingListCities }