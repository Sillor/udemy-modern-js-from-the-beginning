const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');
const clearBtn = document.querySelector('#clear');
const itemFilter = document.querySelector('#filter');
const formBtn = itemForm.querySelector('button');
let isEditMode = false;

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;

    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);

    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function addItem(e) {
    e.preventDefault();

    const newItem = itemInput.value;

    // Validate Input
    if (newItem === '') {
        alert('Please add an item');
        return;
    }

    // Check for edit mode
    if (isEditMode) {
        const itemToEdit = itemList.querySelector('.edit-mode');

        removeItemFromStorage(itemToEdit.innerText);
        itemToEdit.classList.remove('edit-mode');
        itemToEdit.remove();
        isEditMode = false;
    } else if (checkIfItemExists(newItem)) {
        alert('That item already exists!');
        return;
    }

    addItemToDOM(newItem);
    addItemToStorage(newItem);

    checkUI();
}

function addItemToDOM(item) {
    // Create List Item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    // Add li to the DOM
    itemList.appendChild(li);

    itemInput.value = '';
}

function addItemToStorage(item) {
    let itemsFromStorage = getItemsFromStorage();

    itemsFromStorage.push(item);

    // Convert to JSON string and set to local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
    let itemsFromStorage;

    if (localStorage.getItem('items') === null) itemsFromStorage = [];
    else itemsFromStorage = JSON.parse(localStorage.getItem('items'));

    return itemsFromStorage;
}

function displayItems() {
    let itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach((item) => addItemToDOM(item));
    checkUI();
}

function onClickItem(e) {
    if (e.target.parentElement.classList.contains('remove-item'))
        removeItem(e.target.parentElement.parentElement);
    else if (e.target.tagName === 'LI') setItemToEdit(e.target);
}

function checkIfItemExists(item) {
    const itemsFromStorage = getItemsFromStorage();
    return itemsFromStorage.includes(item);
}

function setItemToEdit(item) {
    isEditMode = true;

    itemList
        .querySelectorAll('li')
        .forEach((i) => i.classList.remove('edit-mode'));

    item.classList.add('edit-mode');
    formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';
    formBtn.style.backgroundColor = '#228B22';
    itemInput.value = item.innerText;
}

function removeItem(item) {
    if (confirm('Are you sure?')) {
        item.remove();

        removeItemFromStorage(item.textContent);

        checkUI();
    }
}

function removeItemFromStorage(item) {
    let itemsFromStorage = getItemsFromStorage();

    itemsFromStorage = itemsFromStorage.filter((i) => i !== item);
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function clearItems(e) {
    if (confirm('Are you sure?')) {
        while (itemList.firstChild) itemList.removeChild(itemList.firstChild);
        checkUI();
    }

    // Clear from localStorage
    localStorage.removeItem('items');
}

function checkUI() {
    const items = itemList.querySelectorAll('li');

    if (items.length === 0) {
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }

    formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
    formBtn.style.backgroundColor = '#333';
    itemInput.value = '';

    isEditMode = false;
}

function filterItems(e) {
    const items = itemList.querySelectorAll('li');

    items.forEach((item) => {
        if (item.innerText.toLowerCase().includes(e.target.value.toLowerCase()))
            item.style.display = 'flex';
        else item.style.display = 'none';
    });
}

// Initialize app
function init() {
    // Event Listeners
    itemForm.addEventListener('submit', addItem);
    itemList.addEventListener('click', onClickItem);
    clearBtn.addEventListener('click', clearItems);
    itemFilter.addEventListener('input', filterItems);

    displayItems();
    checkUI();
}

init();
