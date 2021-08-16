const button = document.querySelector('button');
const ColorHeading = document.querySelector('h2');
const background = document.querySelector('section');

button.addEventListener('click', () => {
	let color = '#';
	color += Math.random().toString(16).slice(2, 8);
	background.style.backgroundColor = color;
	ColorHeading.innerText = color;
});
