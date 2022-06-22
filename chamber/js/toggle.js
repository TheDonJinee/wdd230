function toggleMenu () {
    // alert('Working 🎈')
    document.querySelector('#pryNav').classList.toggle('menu');
}

const x = document.querySelector('#hamburgerBtn');
x.onclick = toggleMenu;

// function toggleMenu () {
//     // document.getElementById('hamburgerBtn').classList.toggle('open');
//     document.getElementById('pryNav').classList.toggle('open');
// }

// const x = document.getElementById('hamburgerBtn');
// x.onclick = toggleMenu;