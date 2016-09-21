import fetch from 'isomorphic-fetch'
import {ACTIONS} from '../config/consts.js'


export const colorPicker = (color) => {
	return {
		type: ACTIONS.CHANGE_COLOR,
		color
	}
}

export const colorAdd = (color) => {
	return {
		type: ACTIONS.COLOR_ADD,
		color
	}
}

export const colorRemove = (color) => {
	return {
		type: ACTIONS.COLOR_REMOVE,
		color
	}
}

export const presetAdd = (colors) => {
	return {
		type: ACTIONS.PRESET_ADD,
		color: colors
	}
}

export const setPreprocessor = (preprocessor) => {
	return {
		type: ACTIONS.PREPROCESSOR_SET,
		preprocessor
	}
}

export const setColorName = (id,colorName) => {
	return {
		type: ACTIONS.COLOR_SET_NAME,
		id,
		colorName
	}
}

const loadColors = () => {
	console.log('load')
	return {
		type: ACTIONS.COLORS_LOAD,
		loading: true
	}
}

const setColors = (colors) => {

	return {
		type: ACTIONS.COLORS_SET,
		loading: false,
		schemes: colors.schemes,
		presets: colors.presets
	}
}

export const fetchColors = () => {
	return dispatch => {
		dispatch(loadColors())
		return fetch('./colors.json').then(response => response.json()).then(json => dispatch(setColors(json)))
	}
}