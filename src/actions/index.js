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