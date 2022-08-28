import { brownCards, greenCards, blueCards } from "../data/mythicCards/index.js";
import { getRandomCards, randomInteger, stackState } from "./state.js";
import difficulties from "../data/difficulties.js";
import { renderCircles } from "./circles.js";

function createStack (rules) {
	let greenMax = 0,
	      blueMax = 0,
	      brownMax = 0;
	let ancient = rules.ancientRule
	let level = rules.levelRule
	//
	for (const ancientKey in ancient) {
		greenMax += ancient[ancientKey].greenCards
		blueMax += ancient[ancientKey].blueCards
		brownMax += ancient[ancientKey].brownCards
	}
	//
	function filterStack (stack,max){
		let returnStack = stack.filter(function (card){
			return level[card.difficulty].toggle
		})
		if (returnStack.length < max){
			let addToStack = stack.filter(function (card){
				return card.difficulty === 'normal'
			})
			let toPush = getRandomCards(addToStack,max-returnStack.length)
			toPush.forEach((index)=>{
				returnStack.push(addToStack[index])
			})
		}
		let toStack = getRandomCards(returnStack,max)
		let toReturn = [];
		toStack.forEach((index)=>{
			toReturn.push(returnStack[index])
		})
		//
		return toReturn
		//
	}
	//
	let preMasterStack = {
		greenCards: filterStack(greenCards,greenMax),
		blueCards: filterStack(blueCards,blueMax),
		brownCards: filterStack(brownCards,brownMax)
	}
	//
	setMasterStack()
	function setMasterStack (){
		let toState = {}
		for (const key in stackState.ancientRule) {
			let cards = stackState.ancientRule[key]
			for (const cardsKey in cards) {
				let amount = cards[cardsKey];
				let toMaster = [];
				for (let i = 0; i < amount; i++) {
					toMaster.push(preMasterStack[cardsKey][i])
					//
				}
				for (let i = 0; i < amount; i++) {
					preMasterStack[cardsKey].splice(preMasterStack[cardsKey][i],1)
				}
				stackState.masterStack[key][cardsKey] = toMaster
				//
			}
		}
		renderCircles(stackState.masterStack)
	}
}



export default createStack;
