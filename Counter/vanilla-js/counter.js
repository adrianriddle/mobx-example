(() => {
	const counterElement = document.getElementById('counter');
	const addButtonElement = document.getElementById('addButton');
	const subtractButtonElement = document.getElementById('subtractButton');

	let counter = 0;

	const renderCounter = () => {
		counterElement.innerHTML = counter;
	}

	const add = () => {
		counter++;
		renderCounter();
	}

	const subtract = () => {
		counter--;
		renderCounter();
	}

	const bindEvents = () => {
		addButtonElement.removeEventListener("click", add);
		subtractButtonElement.removeEventListener("click", subtract);

		addButtonElement.addEventListener("click", add);
		subtractButtonElement.addEventListener("click", subtract);
	}

	const initialize = () => {
		renderCounter();
		bindEvents();
	}

	initialize();
})()