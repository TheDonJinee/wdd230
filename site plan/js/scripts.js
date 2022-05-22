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





