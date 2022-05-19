//Targetting nodes (Tags)
const link = document.querySelector('a');
link.textContent = 'Mozilla Developer Network';
link.href = 'http://developer.mozilla.org';

const image = document.querySelector('img');
const sect = document.querySelector('section');
const body = document.querySelector('body');

const linkPara = document.querySelector('p');

// Creating new elements
const para = document.createElement('p'); // Create
para.textContent = 'I hope you have enjoyed the ride';
sect.append(para); // Adding to the page

const paraAdd = document.createElement('p');
paraAdd.textContent = 'I am really enjoying this!'
sect.append(paraAdd); // Add to page

const heading = document.createElement('h2');
heading.innerHTML = 'DonJinee DOM practice';
body.appendChild(heading) // Add to page

// Creating text nodes (adding to a text)
const text = document.createTextNode(' -- the premier source for web development knowledge.');
linkPara.appendChild(text);
sect.appendChild(linkPara);

body.appendChild(sect); // Make last on the page
sect.removeChild(paraAdd); // Remove from page

// Styling with JS (CSS)
// heading.style.color = 'red';
// heading.style.backgroundColor = '#eee';
// heading.style.textAlign = 'center';
// sect.style.textAlign = 'center';
// sect.style.margin = '20px 50px';
// image.style.width = '50%';
// body.style.backgroundColor = '#333'
// para.style.color = 'white'
// sect.style.color = 'white'
// link.style.color = 'aqua'
// link.style.textDecoration = 'none'

para.setAttribute('class', 'highlight')