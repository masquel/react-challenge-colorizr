import React from 'react'
import {connect} from 'react-redux'

import ColorPicker from 'react-color-picker'

import Button from '../Button/Button.js'


import './sample.styl'


import {colorAdd,colorRemove} from '../../actions/'

import {light,hexToRGB,RGBToHex,findOne, mixColors} from '../../helpers/'

class Sample extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			darkBg: false,
			mixColor: '#ee5566',
			showColorPicker: false
		}
	}
	changeBg(){
		this.setState({darkBg: !this.state.darkBg})
	}
	selectAll(colors){
		for(let color of colors) this.sampleAdd(color)
	}
	removeAll(colors){
		for(let color of colors) this.sampleRemove(color)
	}
	sampleAdd(color){
		this.props.dispatch(colorAdd(color))
	}
	sampleRemove(color){
		this.props.dispatch(colorRemove(color))
	}

	onDrag(color,c){
		this.setState({mixColor: color})
	}
	handleColorPicker(){
		this.setState({showColorPicker: !this.state.showColorPicker})
	}
	render(){
		let {color, title, colorPreset, mixed} = this.props;
		let colors = [];
		for(let i = 1; i<11; i++){
			let converted = '';
			if(mixed){
				converted = mixColors(this.state.mixColor,color,(i-1)/10);
			}else{
				let k = i / 10 ;
				let RGB = hexToRGB(color);
				converted = RGBToHex(parseInt(RGB[0]*k),parseInt(RGB[1]*k),parseInt(RGB[2]*k));	
			}
			colors.push(converted)
		}
		console.log(colors);
		return (
			<div className="sample">
				<div className="panel">
					<header className="panel__header">
						<h2 className="panel__title sample__title">
							{title}
							{mixed && <span className="mixer__color" style={{backgroundColor:this.state.mixColor}} onClick={this.handleColorPicker.bind(this)}></span>}
						</h2>
						{
							mixed &&
							<ColorPicker 
								className={this.state.showColorPicker ? "color-picker mixer__color-picker mixer__color-picker--active" : "color-picker mixer__color-picker "} 
								value={this.state.mixColor} 
								onDrag={this.onDrag.bind(this)} 
							/> 
						}
					</header>
					
					<div className={(this.state.darkBg)? 'sample__colors sample__colors--dark' : 'sample__colors'}>
						{
							colors.map((color)=>{
								return (
									<div 
										className={(colorPreset.indexOf(color) !== -1) ? "sample__color sample__color--selected" : "sample__color"}
										onClick={
											()=>{
												(colorPreset.indexOf(color) === -1) ? this.sampleAdd(color) : this.sampleRemove(color)
											}
										}
										style={{
											backgroundColor: color
										}}
									>
										{
											(colorPreset.indexOf(color) === -1) ?
												<i className="fa fa-plus" style={{color: light(color) ? '#000' : '#fff'}}></i> :
												<i className="fa fa-times" style={{color: light(color) ? '#000' : '#fff'}}></i>
										}
									</div>
								)
							})
						}
							
							
					</div>

					<footer className="panel__footer sample__footer">
						<Button type="button" onClick={this.changeBg.bind(this)} className="btn btn--default">
							{
								(this.state.darkBg) ? 'Light Background' : 'Dark Background' 
							}
						</Button>
						<Button type="button" onClick={()=>this.selectAll(colors)} className="btn btn--default">Select All</Button>
						{findOne(colorPreset, colors) && <Button type="button" onClick={()=>this.removeAll(colors)} className="btn btn--danger">Remove All</Button>}
						
					</footer>
				</div>
			</div>
		)
	}
}

export default connect(s=>s)(Sample)