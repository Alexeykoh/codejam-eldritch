function renderCircles (rules) {
	//
	for (const rulesKey in rules) {
		let rulesFolder = rules[rulesKey]
		for (const keyFolder in rulesFolder) {
			let cardCount = rulesFolder[keyFolder].length;
			let circle = document.querySelector(`.${rulesKey}.${keyFolder}>.cards__amount`)
			circle.textContent = cardCount
		}
	}
}



export { renderCircles };
