function createSmall(text) {
    const small = document.createElement('small');
    small.innerText = text;
    return small;
}

function onKeyPress(e) {
    document.querySelector('p').style.display = 'none';
    document.getElementById('insert').style.display = 'block';

    const insert = document.querySelectorAll('.key');
    const small = document.createElement('small');

    insert[0].innerText = e.key;
    insert[0].appendChild(createSmall('e.key'));

    insert[1].innerText = e.keyCode;
    insert[1].appendChild(createSmall('e.keyCode'));

    insert[2].innerText = e.code;
    insert[2].appendChild(createSmall('event.code'));

    console.log(insert);
}

// Events
window.addEventListener('keypress', onKeyPress);
