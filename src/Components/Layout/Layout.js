//React
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import nasa from "../../Assets/nasa.png";

//Footer Component
import Footer from "./Footer/Footer";
//Navbar Component
import { NavBar } from "../Layout/Navbar/NavBar";
import { SideDrawer } from "./SideNav/SideDrawer/SideDrawer";
import { BackDrop } from "./SideNav/BackDrop/BackDrop";
export const Layout = ({ isOpen, openHandler, children }) => {
  return (
    <>
      <NavBar isOpen={isOpen} openHandler={openHandler} />
      <SideDrawer isOpen={isOpen} openHandler={openHandler} />
      <section className="m-auto flex" >{children}</section>
      <BackDrop isOpen={isOpen} />
      <Footer />
    </>
  );
};
