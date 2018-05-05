let addInput = document.querySelector('input.add-item');
const addButton = document.querySelector('button.add-item');
const removeButton = document.querySelector('button.remove-item');
const ul = document.querySelector('ul');
const liList = document.getElementsByTagName('li');

addButton.addEventListener('click', () => {
  const text = addInput.value;
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
  addInput.value = '';
});

removeButton.addEventListener('click', () => {
  const lastLI = liList[liList.length - 1];
  ul.removeChild(lastLI);
});

for (let i = 0; i < liList.length; i++){
  let currentLI = liList[i];
  currentLI.addEventListener('mouseover', () => {
    currentLI.textContent = currentLI.textContent.toUpperCase();
  });
  currentLI.addEventListener('mouseout', () => {
    currentLI.textContent = currentLI.textContent.toLowerCase();
  });
}
