(() => {
	const tabElements = document.querySelectorAll('[data-tab]');

	let activeTab = "definition";

	const setActiveTab = (value) => {
		activeTab = value;
		tabElements.forEach(tabElement => {
			tabElement.classList.remove("active");
		})
		const activeTabElements = document.querySelectorAll(`[data-tab="${value}"]`);
		if (activeTabElements) {
			activeTabElements.forEach(tabElement => {
				tabElement.classList.add("active");
			});
		}
	}

	const tabChange = (event) => {
		const value = event.target.dataset.tab;
		setActiveTab(value);
	}

	const bindEvents = () => {
		const tabs = document.querySelectorAll(".tab");
		tabs.forEach(tab => {
			tab.removeEventListener("click", tabChange);
			tab.addEventListener("click", tabChange);
		});
	}

	const initialize = () => {
		setActiveTab(activeTab);
		bindEvents();
	}

	initialize();
})()