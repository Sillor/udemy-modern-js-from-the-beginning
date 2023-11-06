const jokeBtn = document.querySelector('#joke-btn');
const joke = document.querySelector('#joke');

function getJoke() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random?category=dev');
    xhr.send();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200)
            joke.innerText = JSON.parse(xhr.responseText).value;
        else
            joke.innerText = 'Something went wrong';
    };
}

// Event listeners
jokeBtn.addEventListener('click', getJoke);
document.addEventListener('DOMContentLoaded', getJoke);