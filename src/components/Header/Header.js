import React from 'react'
import './header.styl'
import Menu from '../Menu/menu'
import {Link} from 'react-router'

const Header = (props) => {
	return (
		<header className="header">
			<div className="container">
				<div className="column-2 vam">
					<div className="logo">
						<a href="/"><img src="images/logo-dark.svg" alt=""/></a>
					</div>
				</div>
				<div className="column-10 vam">
					<Menu/>
				</div>
			</div>
			
		</header>
	)
}

export default Header 