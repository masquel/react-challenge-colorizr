import React from 'react'
import {connect} from 'react-redux'

import {hexToRGB} from '../../helpers/'

import './export.styl'

class Export extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		let colors = this.props.colorPreset
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
								colors.map((color, index)=>{
									return(
										<tr key={index}>
											<td style={{backgroundColor: color}}></td>
											<td>{color}</td>
											<td>rgb({hexToRGB(color).join(', ')})</td>
											<td>
												<input type="text" value={"color-"+index}/>
											</td>
										</tr>
									)
								})
							}
						</tbody>
					</table>
					<h2 className="">Export your code</h2>
					<div className="export__links">
						<div className="export__link">Sass</div>
						<div className="export__link">Less</div>
						<div className="export__link">Stylus</div>
					</div>
					<pre className="export__code">
					</pre>
				</div>
			</div>
		)
	}
}

export default connect(s=>s)(Export)