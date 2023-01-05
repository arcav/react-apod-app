//React
import React from "react";
import { Outlet } from "react-router-dom";

//Footer Component
import Footer from "./Footer/Footer";

//Navbar Component
import Nav from "./Navbar/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
