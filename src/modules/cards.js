import cardsData from "../data/mythicCards/blue/index.js";
import ancientsData from "../data/ancients.js";
import { stackState, startDefault } from "./state.js";

const cards = () => {
	const formAncient = document.querySelector('.ancient')
	//
	function createAncientItem(id,cardFace){
		//
		const ancient__item = document.createElement('div')
		ancient__item.className = 'ancient-item';
		formAncient.appendChild(ancient__item)
		//
		const ancient__item__input = document.createElement('input')
		ancient__item__input.className = 'ancient-item__input';
		ancient__item__input.setAttribute('type',`radio`)
		ancient__item__input.setAttribute('id',`input-ancient__${id}`)
		ancient__item__input.setAttribute('name',`contact`)
		ancient__item__input.setAttribute('value',`${id}`)
		ancient__item.appendChild(ancient__item__input)
		//
		const ancient__item__label = document.createElement('label')
		ancient__item__label.className = 'ancient-item__label';
		ancient__item__label.setAttribute('for',`input-ancient__${id}`)
		ancient__item__label.setAttribute('id',`label-ancient__${id}`)
		ancient__item.appendChild(ancient__item__label)
		//
		const ancient_svg = document.createElement('img')
		ancient_svg.className = 'ancient_svg';
		ancient_svg.setAttribute('src',`${cardFace}`)
		ancient_svg.setAttribute('alt',`ancient__${id}`)
		ancient__item__label.appendChild(ancient_svg)
		//
		ancient__item__label.addEventListener('click',function (){
			setTimeout(()=>{
				startDefault()
			},100)
			
		})
	}
	//
	ancientsData.forEach((data,index)=>{
		createAncientItem(
			ancientsData[index].id,
			ancientsData[index].cardFace
		)
	})
	//
	
}

export default cards
