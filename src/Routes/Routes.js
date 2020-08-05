//React and React-Router-Dom
import React from 'react';
import { Route } from 'react-router-dom';

//Component Pages
import Home from '../Pages/Home';
import Apod from '../Pages/Apod';
import About from '../Pages/About';


//Routes of App
const Routes = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
            <Route path="/Apod" component={Apod} />
            <Route path="/About" component={About} />
        </>
    );
};

export default Routes;
