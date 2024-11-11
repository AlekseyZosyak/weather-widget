
class WeatherCard {
    constructor(parendSelector, city, temperature, description, humidity, windSpeed, img) {
        this.parent = document.querySelector(parendSelector);
        this.city = city;
        this.temperature = temperature;
        this.description = description;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
        this.img = img;
    }

    render() {
        const element = document.createElement('div');
        element.innerHTML = `
                <h2 class="weather__title">${this.city}</h2>
                <p>Температура: ${this.temperature}°C</p>
                <p>Опис погоди: ${this.description}</p>
                <p>Вологість: ${this.humidity}%</p>
                <p>Швидкість вітру: ${this.windSpeed} м/с</p>
        `;
        this.parent.append(element);
        console.log(21)
    }
}


export default WeatherCard;