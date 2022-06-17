const requestUrl = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector(".cards");

// fetch(requestUrl)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (jsonObject) {
//         console.table(jsonObject);
//         prophets.forEach(displayProphets);
//     });

// const prophets = jsonObject["prophets"]

// function displayProphets (prophet){
//     let card = document.createElement('section');
//     let h2 = document.createElement('h2');
//     let image = document.createElement('img');

//     h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
//     image.setAttribute('src', prophet.imageurl);
//     image.setAttribute('alt', `potrait of ${prophet.name} ${prophet.lastname}`);
//     image.setAttribute('loading', 'lazy');

//     card.appendChild(h2);
//     card.appendChild(image)

//     cards.appendChild(card)
// }

async function getProphets() {
    let response = await fetch(requestUrl);
    if (response.ok) {
        let data = await response.json();
        console.log(data)
        buildProphetCards(data);
    } else {
        throw Error(response.statusText);
    }
}

function buildProphetCards (data) {
    data.prophets.forEach(prophet => {
        let card =document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let image = document.createElement('img');
        pos = position(prophet.order);

        h2.innerHTML = `${prophet.name} <span class="highlight">${prophet.lastname}</span>`;
        p2.innerHTML = `Date of Birth: ${prophet.birthdate}`
        p.innerHTML = `Place of Birth: ${prophet.birthplace}`;
        image.setAttribute('src', prophet.imageurl);
        image.setAttribute('alt', `Potrait of President ${prophet.name} ${prophet.lastname} - ${prophet.order}${pos} Latter-day President`);
        image.setAttribute('loading', 'lazy');

        card.append(h2);
        card.append(p2);
        card.append(p);
        card.append(image);
        cards.appendChild(card);
    });
};

function position (order){
    if (order === 1) {
        pos = "st"
    } else if (order === 2) {
        pos = 'nd'
    } else if (order === 3) {
        pos = 'rd'
    } else {
        pos = 'th'
    }

    return pos
}

getProphets();