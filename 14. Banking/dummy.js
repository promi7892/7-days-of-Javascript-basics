// document
// 	.getElementById('deposit-button')
// 	.addEventListener('click', function () {
// 		const depositInput = document.getElementById('deposit-input');
// 		const newDepositText = depositInput.value;
// 		const newDepositAmount = parseFloat(newDepositText);

// 		const depositTotal = document.getElementById('deposit-total');

// 		const previousDepositText = depositTotal.innerText;
// 		const previousDepositAmount = parseFloat(previousDepositText);
// 		const newDepositeTotal = previousDepositAmount + newDepositAmount;
// 		depositTotal.innerText = newDepositeTotal;

// 		// update account balance
// 		const balanceTotal = document.getElementById('balance-total');
// 		const balanceTotalText = balanceTotal.innerText;
// 		const previousBalanceTotal = parseFloat(balanceTotalText);

// 		const newBalanceTotal = previousBalanceTotal + newDepositeTotal;
// 		balanceTotal.innerText = newBalanceTotal;

// 		// clear update
// 		depositInput.value = '';
// 	});

// // widraw
// document
// 	.getElementById('withdraw-button')
// 	.addEventListener('click', function () {
// 		const widrawInput = document.getElementById('withdraw-input');

// 		const withdrawAmountText = widrawInput.value;
// 		const newWithdrawAmount = parseFloat(withdrawAmountText);

// 		const withdrawTotal = document.getElementById('withdraw-total');

// 		const previousWithdrawText = withdrawTotal.innerText;
// 		const previousWithdrawAmount = parseFloat(previousWithdrawText);

// 		const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
// 		withdrawTotal.innerText = newWithdrawTotal;
// 		widrawInput.value = '';
// 		// total
// 		const balanceTotal = document.getElementById('balance-total');

// 		const previousBalanceText = balanceTotal.innerText;
// 		const previousBalanceTotal = parseFloat(previousBalanceText);
// 		const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

// 		balanceTotal.innerText = newBalanceTotal;
// 	});
