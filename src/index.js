import './index.html';
import './index.scss';
import cards from "./modules/cards.js";
import levels from './modules/levels.js'
import giveCard from "./modules/giveCard.js";
import { startDefault } from "./modules/state.js";

cards()
levels()
giveCard()
startDefault()
