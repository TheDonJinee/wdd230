async function fetchApi (url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayData(data);
            console.log(data)
        } else {
            throw Error(response.text())
        }
    }

    catch (error) {
        console.log(error)
    }
};

const url = "https://api.openweathermap.org/data/2.5/weather?q=Abeokuta&units=Imperial&appid=1cb0512b8cdcd2339a4a393ee2652300"
const temp = document.querySelector('.temp');
const weatherIcon = document.querySelector('.cloud');
const wind = document.querySelector('.wind');
const weatherDesc = document.querySelector('.condition');
const windFactor = document.querySelector('.windFactor');

function displayData(weatherData) {
    const t = weatherData.main.temp;
    const tC = (t - 32) * (5/9)
    const s = weatherData.wind.speed;
    const imageSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const windChillFactor = (35.74 + (0.6215 * t) - (35.75 * s**0.16) + (0.4275 * t * s**0.16)).toFixed(1);

    weatherIcon.setAttribute('src', imageSrc);
    weatherIcon.setAttribute('alt', desc)
    temp.innerHTML = `${t.toFixed(0)}&deg;F`;
    wind.innerHTML = `${s}km/h`;
    weatherDesc.innerHTML = `<strong>${weatherData.weather[0].description.toUpperCase()}</strong>`;

    if (tC <= 50 && windChillFactor > 3.0){
        windFactor.innerHTML = windChillFactor;
    } else {
        windFactor.innerHTML = `N/A`;
    }
};

fetchApi(url);