const thisDate = new Date(document.lastModified);
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const thisMonth = months[thisDate.getMonth()];
const thisYear = thisDate.getFullYear();
const currentDate = thisDate.getDate();
const currentMonth = thisDate.getMonth() + 1;
if ((thisDate.getHours >= 0 && thisDate.getSeconds === 0) && (thisDate.getHours <= 11 && thisDate.getSeconds <= 59)) {
    isAm = 'pm'
} else {
    isAm = 'am'
}
let hh = thisDate.getHours();
let mm = thisDate.getUTCMinutes();
document.querySelector("#year").innerHTML = thisYear;
document.querySelector("#datetime").innerHTML = thisDate;



