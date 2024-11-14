
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


export default WeatherCard;