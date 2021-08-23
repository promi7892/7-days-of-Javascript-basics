function getInputValue(fieldId) {
	const inputField = document.getElementById(fieldId);
	const valueInText = inputField.value;
	const value = parseFloat(valueInText);
	inputField.value = '';
	return value;
}
function updateTotal(fieldId, amount) {
	const totalTag = document.getElementById(fieldId);
	const previousTotalText = totalTag.innerText;
	const previousTotal = parseFloat(previousTotalText);
	const newTotal = previousTotal + amount;
	totalTag.innerText = newTotal;
}

function updateBalance(amount, isAdd) {
	const balanceTag = document.getElementById('balance-total');
	const balanceInText = balanceTag.innerText;
	const previousBalance = parseFloat(balanceInText);
	let newBalance;
	if (isAdd === true) {
		newBalance = previousBalance + amount;
	} else {
		newBalance = previousBalance - amount;
	}
	balanceTag.innerText = newBalance;
}
function getInnerTextValue(fieldId) {
	const fieldTag = document.getElementById(fieldId);
	const fieldValuetext = fieldTag.innerText;
	const value = parseFloat(fieldValuetext);
	return value;
}
// deposit button
document
	.getElementById('deposit-button')
	.addEventListener('click', function () {
		const amount = getInputValue('deposit-input');
		if (amount > 0) {
			updateTotal('deposit-total', amount);
			updateBalance(amount, true);
		}
	});

// withdraw button
document
	.getElementById('withdraw-button')
	.addEventListener('click', function () {
		const amount = getInputValue('withdraw-input');
		const balance = getInnerTextValue('balance-total');

		if (amount > 0 && amount <= balance) {
			updateTotal('withdraw-total', amount);
			updateBalance(amount, false);
		}
	});
