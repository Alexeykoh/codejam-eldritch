import { randomColorCard, stackState, transition } from "./state.js";
import { renderCircles } from "./circles.js";
const giveCard = () => {
	//
	document.getElementById('giveMeCard').addEventListener('click',()=>{
		giveMeCard()
	})
	//
	function giveMeCard () {
		let sum = sumCards()
		if (sum.firstStage > 0){
			//
			deleteCard('firstStage',randomColorCard())
			//
		} else if (sum.secondStage > 0){
			//
			deleteCard('secondStage',randomColorCard())
			//
		} else if (sum.thirdStage > 0){
			//
			deleteCard('thirdStage',randomColorCard())
			//
		}
		
	}
	//
	function sumCards(){
		let sumOfCards = {
			firstStage: 0,
			secondStage: 0,
			thirdStage: 0,
		}
		for (let arrayKey in sumOfCards) {
			document.querySelectorAll(`.${arrayKey}>.cards__amount`).forEach((a)=>{
				sumOfCards[arrayKey] += a.innerHTML*1
			})
		}
		return sumOfCards;
	}
	function deleteCard(stage,color){
		let actuality = stackState.masterStack[stage][color].length
		if (actuality > 0){
			let img = new Image()
			img.src = stackState.masterStack[stage][color][0].cardFace
			img.onload = () => {
				const newImg = document.createElement('img')
				newImg.setAttribute('src',`${img.src}`)
				newImg.setAttribute('alt','card_img')
				newImg.style.left = stackState.transition + 'px' //toTop
				newImg.style.animation = 'toTop .5s'
				let styleColor;
				switch (color){
					case 'greenCards':
						styleColor = 'green'
						break
					case 'blueCards':
						styleColor = 'blue'
						break
					case 'brownCards':
						styleColor = 'brown'
						break
				}
				newImg.style.boxShadow = `0 0 20px ${styleColor}`
				stackState.transition += 50;
				document.querySelector('.card__stack').appendChild(newImg)
				//
				stackState.masterStack[stage][color].splice(0,1)
				renderCircles(stackState.masterStack)
				document.querySelector(`.${stage}.${color}`).style.animation = 'top .5s'
				//
				setTimeout(()=>{
					document.querySelector(`.${stage}.${color}`).style.animation = ''
				},500)
				//
			}
			
			
		} else {
			giveMeCard ()
		}
	}
}

export default giveCard;
