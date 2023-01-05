//React and React-Router-Dom
import React from "react";
import { Route, Routes } from "react-router-dom";

//Components
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Apod from "./Pages/Apod";

//Container App: Layout and Routes
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="apod" element={<Apod />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Layout>
  );
};

export default App;
