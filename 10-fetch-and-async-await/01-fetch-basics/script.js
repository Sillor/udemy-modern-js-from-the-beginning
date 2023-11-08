// Fetching a JSON file
fetch('./movies.json')
    .then(res => res.json())
    .then(data => console.log(data));

// Fetching a text file
fetch('./test.txt')
    .then(res => res.text())
    .then(data => console.log(data));

// Fetching from an API
fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(data => document.querySelector('h1').textContent = data.value);