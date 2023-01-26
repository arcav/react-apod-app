//React
import React from "react";

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
      <section className="h-full flex flex-col">{children}</section>
      <BackDrop isOpen={isOpen} />
      <Footer />
    </>
  );
};
