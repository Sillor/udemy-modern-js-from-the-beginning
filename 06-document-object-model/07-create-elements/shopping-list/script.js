// Creating elements
const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'my-element');

// div.innerText = 'Hello World';

// Creating a text node and adding it to an element
const text = document.createTextNode('Hello World');
div.appendChild(text);

document.querySelector('ul').appendChild(div);
