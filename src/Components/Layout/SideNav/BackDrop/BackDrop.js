//React
import React from 'react';

//CSS
import './Backdrop.css';

const backDrop = ({ click }) => {
	return (
		<div className="backdrop" onClick={click} />
	);
};

export default backDrop;
