// Event delegation
const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// // unefficient way
// listItems.forEach((item) => {
//     item.addEventListener('click', (e) => e.target.remove());
// });

//delegation way
list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});

list.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.style.color = 'red';
    }
});
