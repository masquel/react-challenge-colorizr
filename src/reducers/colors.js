import React from 'react'
import {ACTIONS,DEFAULT_COLOR} from '../config/consts'
import {inArray} from '../helpers/'



const initialState = []

const colorsManipulate = (state = initialState, {type,color}) => {

	switch(type){
		case ACTIONS.COLOR_ADD: {
			if(color !== DEFAULT_COLOR && state.indexOf(color) === -1){
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

export default colorsManipulate