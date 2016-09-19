import React, {Component} from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

class Main extends Component{

	
	constructor(props) {
		super(props)
	}

	render(){
		const {dispatch,children,colors} = this.props
		return (
			<div className="main">
				<Header/>
				{children}
				<Footer/>
			</div>
		)
	}
}

export default connect(s=>s)(Main)