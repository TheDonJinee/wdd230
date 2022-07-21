// const menuBtn = document.querySelector('#hamburgerBtn');
// const pryNav = document.querySelector('#pryNav');

// function toggleMenu () {
//     menuBtn.classList.toggle('open');
//     pryNav.classList.toggle('open');
// }

// menuBtn.addEventListener('click', toggleMenu)




// const modified = new Date(document.lastModified);
// const date = new Date();
// const datetime = document.querySelector('#datetime');
// const daysOfTheWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// const monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const year = date.getFullYear();
// const day = date.getDay();
// const displayDate = date.getDate();
// const month = date.getMonth();
// const dayOfWeek = daysOfTheWeek[day];
// const monthOfYear = monthsOfTheYear[month];
// const headerDate = document.querySelector('#header-date');
// const displayYear = document.querySelector('#year');

// datetime.innerHTML = modified;
// headerDate.innerHTML = `${dayOfWeek}, ${monthOfYear} ${displayDate} ${year}`;
// displayYear.innerHTML = year;

// const url = "https://api.openweathermap.org/data/2.5/weather?q=Abeokuta&units=Imperial&appid=1cb0512b8cdcd2339a4a393ee2652300"
// const temp = document.querySelector('.temp');
// const weatherIcon = document.querySelector('.cloud');
// const wind = document.querySelector('.wind');
// const weatherDesc = document.querySelector('.condition');
// const windFactor = document.querySelector('.windFactor');

// let imagesToLoad = document.querySelectorAll('img[data-src]');

// function preloadImage(img) {
//     const src = img.getAttribute("data-src");
//     if(!src) {
//         return;
//     }

//     img.src = src;
// }

// const imgOptions = {
//     threshold: 1,
//     rootMargin: "0px 0px 200px 0px"
// };

// const imgObserver = new IntersectionObserver((entries, imgObserver) => {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             return;
//         } else {
//             preloadImage(entry.target);
//             imgObserver.unobserve(entry.target);
//         }
//     })
// }, imgOptions);


// imagesToLoad.forEach(image => {
//     imgObserver.observe(image);
// });


// const visitsDisplay = document.querySelector(".visits");

// let numVisits = Number(window.localStorage.getItem("visits-ls"));

// if (numVisits !== 0) {
// 	visitsDisplay.textContent = numVisits;
// } else {
// 	visitsDisplay.textContent = `This is your first visit!`;
// }

// numVisits++;
// localStorage.setItem("visits-ls", numVisits);



const menuBtn = document.querySelector('#hamburgerBtn');
const pryNav = document.querySelector('#pryNav');

function toggleMenu () {
    menuBtn.classList.toggle('open');
    pryNav.classList.toggle('open');
}

menuBtn.addEventListener('click', toggleMenu)




const modified = new Date(document.lastModified);
const date = new Date();
const datetime = document.querySelector('#datetime');
const daysOfTheWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const year = date.getFullYear();
const day = date.getDay();
const displayDate = date.getDate();
const month = date.getMonth();
const dayOfWeek = daysOfTheWeek[day];
const monthOfYear = monthsOfTheYear[month];
const headerDate = document.querySelector('#header-date');
const displayYear = document.querySelector('#year');

datetime.innerHTML = modified;
headerDate.innerHTML = `${dayOfWeek}, ${monthOfYear} ${displayDate} ${year}`;
displayYear.innerHTML = year;

let imagesToLoad = document.querySelectorAll('img[data-src]');

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }

    img.src = src;
}

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 200px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);


imagesToLoad.forEach(image => {
    imgObserver.observe(image);
});


const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

numVisits++;
localStorage.setItem("visits-ls", numVisits);


