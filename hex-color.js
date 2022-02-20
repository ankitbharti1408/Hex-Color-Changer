const changeBtn = document.getElementById('changeBtn')
const hexColor = document.querySelector('.hexColor')
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
changeBtn.addEventListener('click', () => {
	let hexSymbol = '#'
	for (let i = 0; i < 6; i++) {
		hexSymbol += hexValues[getRandomNumber()]
	}
	hexColor.textContent = hexSymbol
	document.body.style.background = hexSymbol
})
const getRandomNumber = () => {
	return Math.floor(Math.random() * hexValues.length)
}