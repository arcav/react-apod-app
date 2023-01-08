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
      <main className="flex flex-col h-full">
        <Nav />
        <section >{children}</section>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
