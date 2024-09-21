// script.js
const container = document.getElementById('cardcontainer');
const numberOfElements = 5;

for (let i = 0; i < numberOfElements; i++) {
    const newElement = document.createElement('div');
    newElement.textContent = `Item ${i + 1}`;
    container.appendChild(newElement);
}


