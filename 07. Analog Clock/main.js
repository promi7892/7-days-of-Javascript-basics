const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const hourElement = document.querySelector('.hour');

setInterval(() => {
	const date = new Date();
	const secDeg = (date.getSeconds() / 60) * 360 - 90;
	const minuteDeg = (date.getMinutes() / 60) * 360 - 90;
	const hourDeg = (date.getHours() / 12) * 360 - 90;
	secondElement.style.transform = `rotate(${secDeg}deg)`;
	minuteElement.style.transform = `rotate(${minuteDeg}deg)`;
	hourElement.style.transform = `rotate(${hourDeg}deg)`;
}, 1000);
