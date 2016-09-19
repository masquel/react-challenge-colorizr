import {ACTIONS} from '../config/consts.js'

const colorPicker = (state={color: '#00f'},action) => {
	if(action.type == ACTIONS.CHANGE_COLOR){
		return {
			color: action.color
		}
	}
	return state
}
export default colorPicker