//React
import React from 'react';

//CSS

const backDrop = ({ click }) => {
	return (
		<div className="fixed w-full h-full top-0 left-0 bg-black bg-opacity-80 z-10" onClick={click} />
	);
};

export default backDrop;
