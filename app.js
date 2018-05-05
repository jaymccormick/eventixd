let addInput = document.querySelector('input.add-item');
const addButton = document.querySelector('button.add-item');
const removeButton = document.querySelector('button.remove-item');
const ul = document.querySelector('ul');

addButton.addEventListener('click', () => {
  const text = addInput.value;
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
  addInput.value = '';
});

removeButton.addEventListener('click', () => {
  const liList = document.getElementsByTagName('li');
  const lastLI = liList[liList.length - 1];
  ul.removeChild(lastLI);
});
