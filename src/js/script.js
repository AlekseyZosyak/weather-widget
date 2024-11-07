import getRequst from "./services/servises";


window.addEventListener('DOMContentLoaded', () => {
  
    const myApiKey = 'c09f348734566ce0124f07e10c69908e';
    const city = 'Kiev';
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}&units=metric`;
    const url2 = 'https://restcountries.com/v3.1/all';
    const url3 = 'https://countriesnow.space/api/v0.1/countries';
    
    
    
    
        
    getRequst(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${myApiKey}`)
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


