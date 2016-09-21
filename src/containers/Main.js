import React, {Component} from 'react'
import { Link } from 'react-router'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

class Main extends Component{

	
	constructor(props) {
		super(props)
	}

	render(){
		const {children} = this.props
		return (
			<div className="main">
				<Header/>
				<div className="content">{children}</div>
				<Footer/>
			</div>
		)
	}
}

export default Main