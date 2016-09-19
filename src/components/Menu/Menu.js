import React from 'react'
import {Link} from 'react-router'

import './menu.styl'

const Menu = (props) => {
	return (
		<nav className="text-right">
			<menu>
				<ul className="menu">
					<li className="menu__item">
						<Link className="menu__link" activeClassName="menu__link_active" to="/create">Create</Link>
					</li>
					<li className="menu__item">
						<Link className="menu__link" activeClassName="menu__link_active" to="/explore">Explore</Link>
					</li>
					<li className="menu__item">
						<Link className="menu__link" activeClassName="menu__link_active" to="/presets">Presets</Link>
					</li>
					<li className="menu__item">
						<Link className="menu__link" activeClassName="menu__link_active" to="/export">Export</Link>
					</li>
				</ul>
			</menu>
		</nav>
	)
}

export default Menu