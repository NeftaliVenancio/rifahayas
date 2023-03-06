let numbers = [];
let count = 0;

function renderNumberList() {
  const numberListElement = document.querySelector('#number-list');
  numberListElement.innerHTML = '';
  numbers.forEach((number, index) => {
    const listItemElement = document.createElement('li');
    const listItemText = document.createTextNode(`${index + 1}: `);
    const circleSpanElement = document.createElement('span');
    circleSpanElement.classList.add('number-circle');
    circleSpanElement.textContent = number;
    listItemElement.appendChild(listItemText);
    listItemElement.appendChild(circleSpanElement);
    numberListElement.appendChild(listItemElement);
  });
}

function handleButtonClick() {
  if (count < 4) {
    count++;
    const randomNumber = Math.floor(Math.random() * 400) + 1;
    numbers.push(randomNumber);
    renderNumberList();
  }
  if (count === 4) {
    document.querySelector('#generate-btn').disabled = true;
  }
}

document.querySelector('#generate-btn').addEventListener('click', handleButtonClick);
