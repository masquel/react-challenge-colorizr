import React from 'react'
import {connect} from 'react-redux'
import Selected from '../Selected/Selected.js'
import {compareArrays} from '../../helpers/'
import {schemes} from '../../data/colors.json'
import {presetAdd} from '../../actions/'

import './presets.styl'

class Presets extends React.Component {
	constructor(props){
		super(props)
	}

	addPreset(colors){
		this.props.dispatch(presetAdd(colors))
	}

	render(){
		let colorPreset = this.props.colorPreset;

		return (
			<div className="presets">
				<div className="container">
					<Selected colors={colorPreset}/>
				</div>
				<div className="container">
					{
						Object.keys(schemes).map((scheme)=>{
							let schemeColors = schemes[scheme];
							let isActive = compareArrays(schemeColors,colorPreset);
							return (
								<div 
									className={isActive ? 'preset preset--active panel' : 'preset panel'}
									onClick={()=>{(isActive) ? '' : this.addPreset(schemeColors)}}
								>
									<h2 className="panel__title preset__title">
										{scheme}
										{isActive && <i className="fa fa-check"></i>}
									</h2>

									<div className="preset__colors">
										{
											schemeColors.map((color)=>{
												return (
													<div className="preset__color" style={{backgroundColor:color}}></div>
												)
											})
										}
									</div>
								</div>
							)
							
						})
					}
				</div>
			</div>
		)
	}
}

export default connect(s=>s)(Presets)