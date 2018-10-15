//  Without Array //

// // Add new list item
//   button.addEventListener('click', function addItem() {
//     if (input.value === "") {
//       alert('Пустое значение')
//     } else {
//        // Get value from input
//     list.appendChild(listItem).textContent = input.value;
//     // Add closeBtn to li
//     listItem.appendChild(closeBtn);
//     // CLose btn content
//     closeBtn.textContent = "x";
//     }
//     // Clear input after click btn
//    input.value = '';
//   })

// // Delete li
// closeBtn.addEventListener('click', deleteItem);
// function deleteItem() {
//   listItem.style.display = "none";
// }
//  With Array //


// button.addEventListener('click', function addItem() {
//   if (input.value === "") {
//     alert('Empty');
//   } else {
//     // Add listItem to array
//     items.push(listItem);

//       createNewItem();


//     function updateList() {
//       for (let i = 0; i < items.length; i++) {
//         list.appendChild(listItem)[i];
//       }
//     }
//     updateList();
//     input.value = '';
//     console.log(items);
//   }
// })

var button = document.getElementById('btn');
var closeBtn = document.createElement('span');

var items = [];

// Create new li
function createNewItem() {
  // list.appendChild(listItem);
  listItem.textContent = input.value;
  // Add closeBtn to li
  listItem.appendChild(closeBtn).textContent = 'x';
}

//Delete li

button.onclick = function () {
  if (input.value === '') {
    alert('Введите задачу')
  } else {

    var list = document.getElementById('list');
    var listItem = document.createElement('li');

    // Add new li
    list.appendChild(listItem).innerText = input.value;

    // Add new li to array
    items.push(listItem);

    // Add close btn
    listItem.appendChild(closeBtn).innerText = 'x';

    // Reset input value
    input.value = '';

    // Delete list item
    closeBtn.onclick = function deleteItem() {
      listItem.style.display = "none";
    }
  }
};