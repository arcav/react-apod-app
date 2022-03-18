//React and React-Router-Dom
import React from "react";
import { Route ,Routes} from "react-router-dom";

//Component Pages
import Home from "../Pages/Home";
import Apod from "../Pages/Apod";
import About from "../Pages/About";

//Routes of App

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="Apod" element={<Apod/>} />
            <Route path="About" element={<About/>} />
        </Routes>
    );
};

export default Router;
