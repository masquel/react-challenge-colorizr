import React from 'react'
import {ACTIONS,DEFAULT_COLOR} from '../config/consts'
import {inArray} from '../helpers/'



const initialState = []

const exportColorstInitial = [
	{id:0,colorName: 'color-0'},
	{id:1,colorName: 'color-1'},
	{id:2,colorName: 'color-2'},
	{id:3,colorName: 'color-3'},
	{id:4,colorName: 'color-4'},
	{id:5,colorName: 'color-5'},
	{id:6,colorName: 'color-6'},
	{id:7,colorName: 'color-7'},
	{id:8,colorName: 'color-8'},
	{id:9,colorName: 'color-9'}
]

export const colorPreset = (state = initialState, {type,color}) => {

	switch(type){
		case ACTIONS.COLOR_ADD: {
			if(state.indexOf(color) === -1){
				if(state.length < 10){
					return [
						...state,
						color
					]
				}else{
					return [
						...state.slice(1),
						color
					]
				}
			}else{
				return state	
			}
			
		}
		case ACTIONS.COLOR_REMOVE:{
			if(state.indexOf(color) === -1) return state;
			return [
				...state.slice(0, state.indexOf(color)),
				...state.slice(state.indexOf(color)+1)
			]
		}
		case ACTIONS.PRESET_ADD: {
			return color
		}

		default:
			return state
	}
	return state
}

export const colorsExport = (state = exportColorstInitial, action) => {
	if(action.type === ACTIONS.COLOR_SET_NAME){
		return [
			...state.slice(0, action.id),
			{
				id: action.id,
				colorName: action.colorName
			},
			...state.slice(action.id+1)
		]
	}
	return state
}

export const colorsImport = (state = {loading: true,schemes: {}, presets: {}}, {type,loading,schemes,presets}) => {
	switch(type){
		case ACTIONS.COLORS_LOAD: {
			return loading
		}
		case ACTIONS.COLORS_SET:{
			return {
				schemes,
				presets,
				loading
			}
		}
		default:
			return state

	}
}