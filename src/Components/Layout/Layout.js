//React
import React from 'react';

//Footer Component
import Footer from './Footer/Footer';

//Navbar Component
import Index from './Navbar/Index';

const Layout = ({ children }) => {
	return (
		<>
			<Index />
			{children}
			<Footer />
		</>
	);
};

export default Layout;

