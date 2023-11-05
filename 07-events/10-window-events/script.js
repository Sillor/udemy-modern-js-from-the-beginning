// old hack
// window.onload = function () {
//     document.querySelector('h1').textContent = 'Hello World';
// };

// Waits for entire page to load
window.addEventListener('load', () => console.log('Page Loaded'));

// Runs as soon as the DOM is parsed and loaded
window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'));

// Runs ever earlier
console.log('run me');

window.addEventListener('resize', () => {
    document.querySelector(
        'h1'
    ).innerText = `Resized to ${window.innerWidth} ${window.innerHeight}`;
});

window.addEventListener('scroll', () => {
    console.log(`Scrolled: ${window.scrollX} ${window.scrollY}`);

    if (window.scrollY > 170) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
});

window.addEventListener('focus', () => {
    document.querySelectorAll('p').forEach((p) => {
        p.style.color = 'blue';
    });
});

window.addEventListener('blur', () => {
    document.querySelectorAll('p').forEach((p) => {
        p.style.color = 'black';
    });
});
