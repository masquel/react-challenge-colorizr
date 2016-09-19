import React from 'react'
import './footer.styl'
class Footer extends React.Component{
	
	constructor(props) {
		super(props)
	}

	render(){
		return (
			<footer className="footer">
				<div className="container">
					<div className="column-6 vam">
						<img src="images/logo-light.svg" alt=""/>
					</div>
					<div className="column-6 vam">

					</div>
					
				</div>
				
			</footer>
		)
	}
}
export default Footer