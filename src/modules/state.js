import cards from "./cards.js";
import ancientsData from "../data/ancients.js";
import difficulties from "../data/difficulties.js";
import { renderCircles } from "./circles.js";
import createStack from "./createStack.js";
import { blueCards, brownCards, greenCards } from "../data/mythicCards/index.js";
export let stackState = {
	selectAncient: '',
	ancientRule: [],
	levelRule: [],
	masterStack: {
		firstStage: {
			greenCards: [],
			blueCards: [],
			brownCards: [],
		},
		secondStage: {
			greenCards: [],
			blueCards: [],
			brownCards: [],
		},
		thirdStage: {
			greenCards: [],
			blueCards: [],
			brownCards: [],
		},
	},
	transition: 0
};
function startDefault(){
	//
	document.querySelector('footer').style.animation = 'TnD 1s'
	//
	setTimeout(()=>{
		document.querySelector('.card__stack').innerHTML = ''
		document.querySelector('footer').style.animation = ''
	},500)
	//
	stackState.transition = 0;
	setAncientRule()
	setLevelRule()
	createStack(stackState)
	//
}


document.getElementById('setStack').addEventListener('click',function (){
	startDefault()
	
})

function setAncientRule (){
	let selectedElement = document.querySelector('.ancient-item__input:checked')
	if (selectedElement === null){
		let newElement = document.querySelectorAll('.ancient-item__input');
		newElement = newElement[randomInteger(0,newElement.length-1)];
		newElement.checked = true
		selectedElement = newElement
	}
	ancientsData.forEach((element)=>{
		if(selectedElement.value === element.id){
			stackState.selectAncient = element.id
			stackState.ancientRule = {
			firstStage: element.firstStage,
			secondStage: element.secondStage,
			thirdStage: element.thirdStage,
			}
		}
	})
}

function setLevelRule (){
	let selectedElement = document.querySelector('.level-item__input:checked')
	if (selectedElement === null){
		let newElement = document.querySelectorAll('.level-item__input');
		newElement = newElement[randomInteger(0,newElement.length-1)];
		newElement.checked = true
		selectedElement = newElement
	}
	difficulties.forEach((element)=>{
		if(selectedElement.value === element.id){
			stackState.levelRule = element;
		}
	})
}

function randomInteger(min, max) {
	// случайное число от min до (max+1)
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

function getRandomCards (stack,max){
	let result = []
	while (result.length < max){
		let randomNum = randomInteger(0,stack.length-1)
		!result.includes(randomNum) ? result.push(randomNum) : undefined
	}
	return result;
}

function randomColorCard(){
	let colors = [
		'greenCards',
		'blueCards',
		'brownCards'
	]
	return colors[randomInteger(0,colors.length-1)]
}



export {randomInteger,getRandomCards,randomColorCard, startDefault};
