import getRequst from "../../services/servises";

function createTegOption(id, country, iso2) {
    const input = document.querySelector(id)
    const teg = document.createElement('option');
    teg.textContent = `${country}`;
    teg.setAttribute('value', `${iso2}`)
    input.append(teg);
}

export default createTegOption;
   


