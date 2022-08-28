import difficulties from "../data/difficulties.js";
import { startDefault } from "./state.js";

const levels = () => {
	const formLevel = document.querySelector('.level')
	function createLevelItem(id,level){
		//
		const level__item = document.createElement('div')
		level__item.className = 'level-item';
		formLevel.appendChild(level__item)
		//
		const level__item__input = document.createElement('input')
		level__item__input.className = 'level-item__input';
		level__item__input.setAttribute('type',`radio`)
		level__item__input.setAttribute('id',`input-level__${id}`)
		level__item__input.setAttribute('name',`level`)
		level__item__input.setAttribute('value',`${id}`)
		level__item.appendChild(level__item__input)
		//
		const ancient__item__label = document.createElement('label')
		ancient__item__label.className = 'level-item__label';
		ancient__item__label.setAttribute('for',`input-level__${id}`)
		ancient__item__label.setAttribute('id',`label-level__${id}`)
		ancient__item__label.innerHTML = level
		level__item.appendChild(ancient__item__label)
		//
		ancient__item__label.addEventListener('click',function (){
			setTimeout(()=>{
				startDefault()
			},50)
		})
		//
	}
	
	
	
	difficulties.forEach((data,index)=>{
		createLevelItem(
			difficulties[index].id,
			difficulties[index].name
		)
	})
	
	
}
export default levels
