//React and React-Router-Dom
import React from "react";
import { NavLink } from "react-router-dom";

//Image
import nasa from "../../../../Assets/nasa.png";

const sideDrawer = ({ show, hide }) => {
  let drawerClasses =
    "flex flex-col h-full  bg-[#010f24]  fixed w-3/4  text-white transform -translate-x-full transition-all duration-700";
	if (show) {
	  drawerClasses = "translate-x-0";
  }

  return (
    <nav className={drawerClasses}>
      <div className="my-20">
        <img className="w-[11rem] m-auto" src={nasa} alt="navlogo" />
      </div>
      <div className="text-center my-10  text-white">
        <ul
          onClick={hide}
          className="h-full flex flex-col font-bold text-2xl m-auto "
        >
          <li className="mx-[2rem] my-auto p-5 hover:bg-red-600">
            <NavLink to="/Apod">A.P.O.D</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default sideDrawer;
