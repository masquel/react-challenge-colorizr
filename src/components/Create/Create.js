import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

import ColorPicker from 'react-color-picker'


import Selected from '../Selected/Selected'
import Sample from '../Sample/Sample'

import {colorPicker} from '../../actions/'
import {light} from '../../helpers/'

import './create.styl'
import 'react-color-picker/index.css'



class Create extends React.Component {
	constructor(props){
		super(props)
	}
	onDrag(color, c){
		this.props.dispatch(colorPicker(color))
	}

	render(){
		let {color} = this.props.colorPicker;
		let colors = this.props.colorPreset;
		return (
			<div 
				className="create"
				style={{
					backgroundColor: color
				}}
			>
				<div className="container create__container text-center">
					<h1 
						className="create__title" 
						style={{
							color: light(color) ? '#000' : '#fff'
						}}
					>
						Choose the color
					</h1>
					<ColorPicker className="color-picker" value={color} onDrag={this.onDrag.bind(this)} />	
				</div>
				<div className="container create__container">
					<Selected colors={colors} />
				</div>
				<div className="container create__container">
					<Sample title="Darker and Lighter" color={color}/>
				</div>
				<div className="container create__container">
					<Sample title="Mixed with" color={color} mixed="true"/>
				</div>
			</div>
		)
	}
}

export default connect(s=>s)(Create)