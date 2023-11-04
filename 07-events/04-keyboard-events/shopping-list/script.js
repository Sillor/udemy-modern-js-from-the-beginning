const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
    console.log('keypress');
};

const onKeyUp = (e) => {
    console.log('key up');
};

const onKeyDown = (e) => {
    console.log('key down');
};

const getKey = (e) => {
    // key
    console.log(e.key);
    // if (e.key === 'Enter') alert('You pressed enter');

    // keyCode
    if (e.keyCode === 13) alert('You pressed enter');

    // code
    if (e.code === 'Digit1') console.log('You pressed 1');

    if (e.repeat) console.log('You are holding down ' + e.key);
};

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
// itemInput.addEventListener('keydown', onKeyDown);
itemInput.addEventListener('keydown', getKey);
