/* Новые элементы должны добавляться в список по нажатию на Enter */
const input = document.querySelector('#input');
const itemsContainer = document.querySelector('#items');

function sendItems () {
  const itemText = input.value;

  const newItem = document.createElement('li');
  newItem.classList.add('items');
  newItem.textContent = itemText;``
 
  if(itemText != ''){
    itemsContainer.append(newItem);
    newItem.addEventListener('click', function(){
      newItem.classList.toggle('done');
    }) 
  } 

  input.value = '';
}

input.addEventListener('keydown', (event) => {
  if (event.key == 'Enter') {
    sendItems();
  }
});



/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
