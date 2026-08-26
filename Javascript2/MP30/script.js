const first = document.querySelector('#first');

first.parentElement.classList.add('highlight');

const innerContainer = document.querySelector('#innerContainer');

const novaDiv = document.createElement('div');

novaDiv.textContent = 'Uma nova div';

innerContainer.insertBefore(novaDiv, innerContainer.firstElementChild);