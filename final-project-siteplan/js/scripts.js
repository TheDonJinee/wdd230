const menuBtn = document.querySelector('#menuBtn');
const pryNav = document.querySelector('#pryNav');

function toggleMenu () {
    menuBtn.classList.toggle('open');
    pryNav.classList.toggle('open');
}

menuBtn.addEventListener('click', toggleMenu);


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
lastUpdated.innerHTML = update