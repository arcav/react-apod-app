//React and React-Router-Dom
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

//Components
import Layout from './Components/Layout/Layout';

//Routes
import Routes from './Routes/Router';

//Container App: Layout and Routes
const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes />
			</Layout>
		</BrowserRouter>
	);
};


export default App;


