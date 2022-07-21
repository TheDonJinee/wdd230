const menuBtn = document.querySelector('#menuBtn');
const pryNav = document.querySelector('#pryNav');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    pryNav.classList.toggle('open');
});

const year = document.querySelector('.year');
const lastUpdated = document.querySelector('.last-updated');
const months = [
                'January', 'February', 'March', 'April', 
                'May', 'June', 'July', 'August', 
                'September', 'October', 'November', 'December'
            ];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const date = new Date();
const update = Date(lastUpdated);

year.innerHTML = date.getFullYear();
lastUpdated.innerHTML = update;

const navService = document.querySelector('#nav-service');



const imagesToLoad = document.querySelectorAll('img[data-src');

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }

    img.src = src;
};

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 200px 0px"
}

const imgObserver = new IntersectionObserver((entries, imageObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        };
    });
}, imgOptions);

imagesToLoad.forEach(image => {
    imgObserver.observe(image);
});

const oneURL = "https://api.openweathermap.org/data/2.5/onecall?lat=32.3668052&lon=-86.2999689&exclude=minutely&appid=f6063aabc4928f53187732ed522f3ec7";
const temp = document.querySelector('.temp');
const hum = document.querySelector('.hum');
const weatherImg = document.querySelector('#weatherImg');
const condition = document.querySelector('.condition');
const forecast = document.querySelector(".forecast")


async function fetchApi (reqURL) {
    try {
        const response = await fetch(reqURL);
        if (response.ok) {
            let data = await response.json();
            console.log(data);
            displayWeatherInfo(data);
        } else {
            throw Error(response.text());
        }
    } catch (error) {
        console.log(error)
    }
};

function displayWeatherInfo (weatherData) {
    const weatherIcon = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
    const weatherDesc = weatherData.current.weather[0].description;
    const t = weatherData.current.temp;
    const h = weatherData.current.humidity;
    const alert = document.createElement('div');
    const alertMsg = document.createElement('p');
    const closeBtn = document.createElement('button');
    const forecast1 = document.createElement('p');
    const forecast2 = document.createElement('p');
    const forecast3 = document.createElement('p');
    const getThisDay = date.getDay()

    weatherImg.setAttribute('src', weatherIcon);
    weatherImg.setAttribute('alt', weatherDesc);
    temp.innerHTML = `${t}&deg;F`;
    hum.innerHTML = h;
    condition.innerHTML = weatherDesc.toUpperCase();
    if (getThisDay === 0) {
        forecast1.innerHTML = `Monday: ${weatherData.daily[1].temp.day}&deg;F`;
        forecast2.innerHTML = `Tuesday: ${weatherData.daily[2].temp.day}&deg;F`;
        forecast3.innerHTML = `Wednesday: ${weatherData.daily[3].temp.day}&deg;F`;
    } else if (getThisDay === 1) {
        forecast1.innerHTML = `Tuesday: ${weatherData.daily[2].temp.day}&deg;F`;
        forecast2.innerHTML = `Wednesday: ${weatherData.daily[3].temp.day}&deg;F`;
        forecast3.innerHTML = `Thursday: ${weatherData.daily[4].temp.day}&deg;F`;
    } else if (getThisDay === 2) {
        forecast1.innerHTML = `Wednesday: ${weatherData.daily[3].temp.day}&deg;F`;
        forecast2.innerHTML = `Thursdayay: ${weatherData.daily[4].temp.day}&deg;F`;
        forecast3.innerHTML = `Friday: ${weatherData.daily[5].temp.day}&deg;F`;
    } else if (getThisDay === 3) {
        forecast1.innerHTML = `Thursday: ${weatherData.daily[4].temp.day}&deg;F`;
        forecast2.innerHTML = `Friday: ${weatherData.daily[5].temp.day}&deg;F`;
        forecast3.innerHTML = `Saturday: ${weatherData.daily[6].temp.day}&deg;F`;
    } else if (getThisDay === 4) {
        forecast1.innerHTML = `Friday: ${weatherData.daily[5].temp.day}&deg;F`;
        forecast2.innerHTML = `Saturdayay: ${weatherData.daily[6].temp.day}&deg;F`;
        forecast3.innerHTML = `Sunday: ${weatherData.daily[0].temp.day}&deg;F`;
    } else if (getThisDay === 5) {
        forecast1.innerHTML = `Day: ${weatherData.daily[6].temp.day}&deg;F`;
        forecast2.innerHTML = `Day: ${weatherData.daily[0].temp.day}&deg;F`;
        forecast3.innerHTML = `Day: ${weatherData.daily[1].temp.day}&deg;F`;
    } else if (getThisDay === 6) {
        forecast1.innerHTML = `Day: ${weatherData.daily[0].temp.day}&deg;F`;
        forecast2.innerHTML = `Day: ${weatherData.daily[1].temp.day}&deg;F`;
        forecast3.innerHTML = `Day: ${weatherData.daily[2].temp.day}&deg;F`;
    }
    
    forecast.appendChild(forecast1)
    forecast.appendChild(forecast2)
    forecast.appendChild(forecast3)


}

fetchApi(oneURL);

const cards = document.querySelector('article');
const listBtn = document.querySelector('#list');
const gridBtn = document.querySelector('#grid');

listBtn.addEventListener('click', () => {
    cards.classList.add('list');
    cards.classList.remove('card')
});

gridBtn.addEventListener('click', () => {
    cards.classList.remove('list');
    cards.classList.add('card');
});



 
// nowClick = span.addEventListener('click', () => {
//     if (span.style.filter === 'saturate(0) hue-rotate(180deg)') {
//         span.style.filter = 'saturate(50) hue-rotate(180deg)';
//     } else {
//         span.style.filter = 'saturate(0) hue-rotate(180deg)'
//     }
// });



// const article = document.querySelector("article");
// const span = document.querySelector("#liked");

// if (!localStorage.getItem("filter")) {
// 	populateStorage();
// } else {
// 	setStyles();
// }

// function populateStorage() {
// 	Number(localStorage.setItem("filter", (span.value)));
// 	setStyles();
// }

// function setStyles() {
// 	let currentColor = localStorage.getItem("filter");
// 	span.className = currentColor;
// }

// span.addEventListener("click", populateStorage);

