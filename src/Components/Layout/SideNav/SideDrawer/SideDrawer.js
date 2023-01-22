//React and React-Router-Dom
import React from "react";
import { NavLink } from "react-router-dom";
import { ToogleButton } from "../SideDrawer/ToogleButton";
//Image
import nasa from "../../../../Assets/nasa.png";

export const SideDrawer = ({ isOpen, openHandler }) => {
  return (
    <div
      className={`w-3/4 h-screen bg-[#010f24] z-20 top-0 right-0 fixed transition-all duration-700 ${
        isOpen ? "left-0" : "-left-full"
      }`}
    >
      <div className="flex justify-end">
        {isOpen && <ToogleButton isOpen={isOpen} openHandler={openHandler} />}
      </div>
      <div className="flex">
        <img className="w-[11rem] m-auto" src={nasa} alt="navlogo" />
      </div>
      <div className="text-center my-10  text-white">
        <ul
          onClick={openHandler}
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
    </div>
  );
};
