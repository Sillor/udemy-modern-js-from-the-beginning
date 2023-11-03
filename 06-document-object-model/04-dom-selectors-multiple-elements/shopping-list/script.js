// Selecting multiple elements in the DOM
// querySelectorAll() - returns a NodeList of elements

const listItems = document.querySelectorAll('.item');
console.log(listItems);
console.log(listItems[1].innerText);

// // Changing multiple elements in the NodeList
// listItems.forEach((item, index) => {
//     item.style.color = "red";

//     if (index == 1) {
//         item.remove();
//     }

//     if (index == 0) {
//         item.innerHTML = ` Oranges
//         <button class="remove-item btn-link text-red">
//           <i class="fa-solid fa-xmark"></i>
//         </button>`;
//     }
// });

// Oldschool way to select by class - returns an HTML collection
const listItems2 = document.getElementsByClassName('item');
console.log(listItems2[2].innerText);

const listItemsArray = Array.from(listItems2);

listItemsArray.forEach(item => {
    console.log(item.innerText);
});

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[0].innerText);