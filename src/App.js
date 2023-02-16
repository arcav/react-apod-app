import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

//Components
import { Layout } from "./Components/Layout/Layout";
import { About } from "./Pages/About";
import { Apod } from "./Pages/Apod";
import { Gallery } from "./Pages/Gallery";
import { Home } from "./Pages/Home";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  const openHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const showHandler = () => {
    setShow((prev) => !prev);
    console.log(show);
  };

  return (
    <Layout isOpen={isOpen} openHandler={openHandler}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="apod"
          element={<Apod show={show} setShow={showHandler} />}
        />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>
    </Layout>
  );
};

export default App;
