import React from 'react'
import Selected from '../Selected/Selected.js'
import {connect} from 'react-redux'
import {colorAdd,colorRemove,fetchColors} from '../../actions/'
import {light} from '../../helpers/'

import './explore.styl'

class Explore extends React.Component {
	constructor(props){
		super(props)
	}

	addColor(color){
		this.props.dispatch(colorAdd(color))
	}

	removeColor(color){
		this.props.dispatch(colorRemove(color))
	}
	componentDidMount(){
		this.props.dispatch(fetchColors())
	}

	render(){
		let {colorPreset,colorsImport} = this.props;
		let {presets, loading} = colorsImport;
		
		return (
			<div className="explore">
				<div className="container">
					<Selected colors={colorPreset}/>
				</div>
				<div className="container">
					{
						loading ?
						<p>Loading...</p> :
						Object.keys(presets).map((preset,index)=>{
							return (
								<div className="explore__group" key={index}>
									<h2 className="explore__title">{preset}</h2>
									{
										presets[preset].map((color, index)=>{
											let inPreset = (colorPreset.indexOf(color) !== -1);
											return (
												<div 
													key={index}
													className={(inPreset) ? 'explore__preset' : 'explore__preset explore__preset--active' }
													onClick={()=>{(inPreset) ? this.removeColor(color) : this.addColor(color)}}
												>
													<div className="explore__color" style={{backgroundColor:color}}>
														<i 
															className={(inPreset) ? 'fa fa-remove' : 'fa fa-check'}
															style={{
																color: inPreset ? color : (light(color) ? '#000' : '#fff' ),
																backgroundColor: inPreset ? (light(color) ? '#000' : '#fff' ) : color
															}}
														></i>
													</div>
													<p className="explore__preset-title">
														{color}
													</p>
												</div>
											)
										})
									}
								</div>
							)
							
						})
					}
				</div>
			</div>
		)
	}
}

export default connect(s=>s)(Explore)