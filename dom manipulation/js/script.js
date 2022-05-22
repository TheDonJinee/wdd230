const list = document.querySelector('ul');
const userInput = document.querySelector('input');
const btnPress = document.querySelector('button');

btnPress.addEventListener('click', () => {
    const listItems = document.createElement('li');
    const delBtn = document.createElement('button');
    const spanElement = document.createElement('span');

   listItems.textContent = `${userInput.value} `;
   userInput.value = '';

   delBtn.textContent = '❌'
    listItems.appendChild(delBtn);
    list.appendChild(listItems);

   delBtn.addEventListener('click', () => {
       list.removeChild(listItems);
   })
   userInput.focus()
});

