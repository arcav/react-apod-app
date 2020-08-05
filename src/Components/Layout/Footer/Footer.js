//React
import React from 'react';

//CSS
import './Footer.css';

const footer = () => {
	return (

		<footer className="footer">
			<div className="footer-items">
				&copy; {new Date().getFullYear()} Copyright: arc@v
			</div>
		</footer>

	);
};

export default footer;
