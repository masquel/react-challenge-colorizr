import {combineReducers} from 'redux'
import { routerReducer} from 'react-router-redux'
import colorPicker from './colorPicker'
import colorPreset from './colors'

const colorizorApp = combineReducers({
	colorPicker,
	colorPreset,
	routing: routerReducer
})

export default colorizorApp