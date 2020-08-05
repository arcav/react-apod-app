//React and React-Router-Dom
import React from 'react';
import { NavLink } from 'react-router-dom';

//CSS
import './SideDrawer.css';

//Image
import nasa from '../../../../Assets/nasa.png';


const sideDrawer = ({ show, hide }) => {

	let drawerClasses = 'side-drawer';
	if (show) {
		drawerClasses = 'side-drawer open';
	}

	return (
		<nav className={drawerClasses}>
			<div>
				<img className="side-drawer-logo"
					src={nasa}
					alt="navlogo" />
			</div>
			<ul onClick={hide}>
				<li >
					<NavLink to="/Apod">
						A.P.O.D
					</NavLink>
				</li>
				<li>
					<NavLink to="/About">
						About
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default sideDrawer;
