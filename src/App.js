import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

//Components
import { Layout } from "./Components/Layout/Layout";
import { About } from "./Pages/About";
import { Apod } from "./Pages/Apod";
import { Home } from "./Pages/Home";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Layout isOpen={isOpen} openHandler={openHandler}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="apod" element={<Apod />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Layout>
  );
};

export default App;
