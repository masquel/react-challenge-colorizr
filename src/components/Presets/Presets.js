import React from 'react'
import {connect} from 'react-redux'


/*
 *  
 *	Import actions and helpers 
 *
 */

import {presetAdd,fetchColors} from '../../actions/'
import {compareArrays} from '../../helpers/'


/*
 *
 * Import other components
 *
 */

import Selected from '../Selected/Selected.js'


/*
 *
 * Import styles
 *
 */

import './presets.styl'


/*
 *
 *  Creating Class
 *
 */

class Presets extends React.Component {
	constructor(props){
		super(props)
	}
	addPreset(colors){
		this.props.dispatch(presetAdd(colors))
	}
	componentDidMount(){
		this.props.dispatch(fetchColors())
		console.log(this.props)
	}
	render(){
		let {colorPreset,colorsImport} = this.props;
		let {schemes, loading} = colorsImport;
		return (
			<div className="presets">
				<div className="container">
					<Selected colors={colorPreset}/>
				</div>
				<div className="container">
					{
						loading ?
						<p>Loading...</p> :
						Object.keys(schemes).map((scheme,index)=>{
							let schemeColors = schemes[scheme];
							let isActive = compareArrays(schemeColors,colorPreset);
							return (
								<div 
									key={index}
									className={isActive ? 'preset preset--active panel' : 'preset panel'}
									onClick={()=>{(isActive) ? '' : this.addPreset(schemeColors)}}
								>
									<h2 className="panel__title preset__title">
										{scheme}
										{isActive && <i className="fa fa-check"></i>}
									</h2>

									<div className="preset__colors">
										{
											schemeColors.map((color, index)=>{
												return (
													<div key={index} className="preset__color" style={{backgroundColor:color}}></div>
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