function toggleMenu () {
    // document.getElementById('hamburgerBtn').classList.toggle('open');
    document.getElementById('pryNav').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;


const thisDate = new Date(document.lastModified);
const date = new Date();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const thisMonth = months[thisDate.getMonth()];
const thisYear = thisDate.getFullYear();
const currentDate = thisDate.getDate();
const currentMonth = thisDate.getMonth() + 1;


let day = days[date.getDay()];
let month = months[date.getMonth()];
let numberDay = date.getDay();
let year = date.getFullYear();

document.querySelector("#year").innerHTML = thisYear;
document.querySelector("#datetime").innerHTML = thisDate;
document.getElementById('headerDate').innerHTML = `${day}, ${date.getDate()} ${month} ${year}`;

// Lazy Load
// Get all the images with data-src attribute
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
})

// GET CURRENT DATE

const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits values
localStorage.setItem("visits-ls", numVisits);




