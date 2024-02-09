document.addEventListener('DOMContentLoaded', function() {
	const display = document.getElementById('display');
	const buttons = document.querySelectorAll('button');
	let operation = '';
	let operand1 = 0;
	let operand2 = null;

	buttons.forEach(function(button) {
		button.addEventListener('click', function() {
			const value = button.value;

			if (!isNaN(value) || value === '.') {
				display.value += value;
			} else if (value === 'C') {
				display.value = '';
				operation = '';
				operand1 = 0;
				operand2 = null;
			} else if (operation === '') {
				operation = value;
				operand1 = parseFloat(display.value);
				display.value = '';
			} else {
				operand2 = parseFloat(display.value);
				switch (operation) {
					case '+':
						display.value = operand1 + operand2;
						break;
					case '-':
						display.value = operand1 - operand2;
						break;
					case '*':
						display.value = operand1 * operand2;
						break;
					case '/':
						display.value = operand1 / operand2;
						break;
				}
				operand1 = parseFloat(display.value);
				operand2 = null;
				operation = value === '=' ? '' : value;
			}
		});
	});
});
