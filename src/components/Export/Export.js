import React from 'react'
import {connect} from 'react-redux'
import {setPreprocessor, setColorName} from '../../actions/'
import {hexToRGB} from '../../helpers/'

import './export.styl'

class Export extends React.Component {
	constructor(props){
		super(props)
	}
	setColorName(id,e){
		
		this.props.dispatch(setColorName(id,e.target.value))
	}
	render(){
		let {colorPreset,preprocessor,colorNames, colorsExport} = this.props

		let isSass = preprocessor === 'sass'
		let isLess = preprocessor === 'less'
		let isStylus = preprocessor === 'stylus'

		return (
			<div className="export">
				<div className="container">
					<h1 className="export__title text-center">Customize and Export colors for Sass, Less or Stylus</h1>
					<table className="export__table">
						<thead>
							<tr>
								<th>Color</th>
								<th>Hex value</th>
								<th>RGB value</th>
								<th>Variable name</th>
							</tr>
						</thead>
						<tbody>
							{
								colorPreset.length ? colorPreset.map((color, index)=>{
									return(
										<tr key={index}>
											<td style={{backgroundColor: color}}></td>
											<td>{color}</td>
											<td>rgb({hexToRGB(color).join(', ')})</td>
											<td>
												<input 
													className="export__input" 
													type="text" 
													name={"color_"+index} 
													value={colorsExport[index].colorName}
													onChange={(e)=>{this.setColorName(index, e)}}
												/>
											</td>
										</tr>
									)
								}) :
								<tr>
									<td colSpan="4">Select Colors for export first</td>
								</tr>
							}
						</tbody>
					</table>
					{
						colorPreset.length ?
						<div className="export__block">
							<h2 className="export__title">Export your code</h2>
							<div className="export__links">
								<div 
									className={isSass ? "export__link export__link--active" :"export__link"}
									onClick={()=>{this.props.dispatch(setPreprocessor('sass'))}}
								>
									Sass
								</div>
								<div 
									className={isLess ? "export__link export__link--active" :"export__link"}
									onClick={()=>{this.props.dispatch(setPreprocessor('less'))}}
								>
									Less
								</div>
								<div 
									className={isStylus ? "export__link export__link--active" :"export__link"}
									onClick={()=>{this.props.dispatch(setPreprocessor('stylus'))}}
								>
									Stylus
								</div>
							</div>
							<pre className="export__code">
								{
									colorPreset.map((color,index) => {
										return (
											<code key={index} className="code">
												<span className="code__variable">{isSass ? '$' : (isLess ? '@' : '')}{colorsExport[index].colorName}</span>
												{isStylus ? ' = ' : ': '}
												{color}
												{!isStylus ? ';' : ''}
												<br/>
											</code>
										)
									})
								}
							</pre>
						</div>
						: ''
					}
				</div>
			</div>
		)
	}
}

export default connect(s=>s)(Export)