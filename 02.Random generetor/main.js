const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');
document.addEventListener('DOMContentLoaded', getJoke);

button.addEventListener('click', getJoke);
async function getJoke() {
	const jokeData = await fetch('https://icanhazdadjoke.com/', {
		headers: {
			Accept: 'application/json',
		},
	});
	const jokeObject = await jokeData.json();
	jokeText.innerHTML = jokeObject.joke;
}
