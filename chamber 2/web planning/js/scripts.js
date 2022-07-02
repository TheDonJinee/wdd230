const modified = new Date(document.lastModified);
const date = new Date();
const datetime = document.querySelector('#datetime');
const daysOfTheWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const year = date.getFullYear();
const day = date.getDay();
const displayDate = day + 1;
const month = date.getMonth();
const dayOfWeek = daysOfTheWeek[day];
const monthOfYear = monthsOfTheYear[month];
const headerDate = document.querySelector('#header-date');

datetime.innerHTML = modified;
headerDate.innerHTML = `${dayOfWeek}, ${displayDate} ${monthOfYear} ${year}`