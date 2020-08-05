//React and Hooks
import React, { useState } from 'react';

//Components
import Navbar from './NavBar'
import SideDrawer from '../SideNav/SideDrawer/SideDrawer';
import BackDrop from '../SideNav/BackDrop/BackDrop';

//CSS
import './NavBar.css';

const Index = () => {
	const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

	const drawerToggleClickHandler = () => {
		setSideDrawerOpen((prevState) => {
			return { sideDrawerOpen: !prevState.sideDrawerOpen }
		});
	};
	const backdropClickhandler = () => {
		setSideDrawerOpen(!sideDrawerOpen)
	};
	let backDrop;

	if (sideDrawerOpen) {
		backDrop =
			<BackDrop click={backdropClickhandler} />
	};

	return (
		<div className="nav-container">
			<Navbar drawerClickHandler={drawerToggleClickHandler} />
			<SideDrawer show={sideDrawerOpen} hide={backdropClickhandler} />
			{backDrop}
		</div>
	);
};

export default Index;