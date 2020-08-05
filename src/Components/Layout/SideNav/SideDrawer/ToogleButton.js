//React
import React from 'react';

//CSS
import './ToggleButton.css';

const toogleButton = ({ click }) => {
	return (
		<button className="toggle-button" onClick={click}>
			<div className="toogle-button__line" />
			<div className="toogle-button__line" />
			<div className="toogle-button__line" />
		</button>
	);
};

export default toogleButton;
