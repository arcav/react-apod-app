//React and Hooks
import React, { useState } from "react";

//Components
import Navbar from "./NavBar";
import SideDrawer from "../SideNav/SideDrawer/SideDrawer";
import BackDrop from "../SideNav/BackDrop/BackDrop";

//CSS

const Nav = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  const backdropClickhandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };
  let backDrop;

  if (sideDrawerOpen) {
    backDrop = <BackDrop click={backdropClickhandler} />;
  }

  return (
    <>
      <Navbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} hide={backdropClickhandler} />
      {backDrop}
    </>
  );
};

export default Nav;
