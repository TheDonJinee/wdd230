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




