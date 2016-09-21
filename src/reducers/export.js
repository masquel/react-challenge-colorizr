import {ACTIONS} from '../config/consts'

const preprocessor = (state = 'stylus',action) => {
	if(action.type == ACTIONS.PREPROCESSOR_SET){
		return action.preprocessor
	}
	return state
}

export default preprocessor