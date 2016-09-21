import React from 'react'
import './selected.styl'
import {connect} from 'react-redux'

import {colorRemove} from '../../actions/'

import {DEFAULT_COLOR} from '../../config/consts'

import {light,hexToRGB,RGBToHex} from '../../helpers/'

class Selected extends React.Component {
	constructor(props){
		super(props);
	}
	removeColor(color){
		this.props.dispatch(colorRemove(color))
	}
	render() {
		let {colors} = this.props;
		let selectedColors = [];
		for(let i = 0; i < 10; i++){
			if(typeof colors[i] !== 'undefined'){
				selectedColors.push(colors[i]);
			}else{
				selectedColors.push(DEFAULT_COLOR);
			}
		}
		

		return(
			
			<div className="panel selected">
				<h2 className="panel__title">
					Select up to 10 colors
				</h2>
				<p className="panel__helper">Select Colors by clicking on them</p>
				<div className="selected__colors">
					{
						selectedColors.map((color, index)=>{

							return (
								<div
									key={index} 
									className={(index < colors.length) ? 'selected__color selected__color--active' : 'selected__color'}
									style={{
										backgroundColor: color
									}}
								>
									<i 
										className="fa fa-times selected__icon" 
										style={{
											color: light(color)? '#000' : '#fff'
										}}
										onClick={()=>{this.removeColor(color)}}
									></i>
									
								</div>
							)	
						})
					}
				</div>
				<div className={(true) ? "selected__colors selected__colors--fixed" : "selected__colors selected__colors--fixed selected__colors--hidden"}>
					{
						selectedColors.map((color, index)=>{

							return (
								<div
									key={index} 
									className={(index < colors.length) ? 'selected__color selected__color--active' : 'selected__color'}
									style={{
										backgroundColor: color
									}}
								>
									<i 
										className="fa fa-times selected__icon" 
										style={{
											color: light(color)? '#000' : '#fff'
										}}
										onClick={()=>{this.removeColor(color)}}
									></i>
									
								</div>
							)	
						})
					}
				</div>
			</div>
		)
	}
}

export default connect(s=>s)(Selected)