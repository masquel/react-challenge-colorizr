import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import colorPicker from './colorPicker'
import {colorPreset,colorsExport, colorsImport} from './colors'
import preprocessor from './export'

const colorizorApp = combineReducers({
	colorPicker,
	colorPreset,
	colorsExport,
	colorsImport,
	preprocessor,
	routing: routerReducer
})

export default colorizorApp