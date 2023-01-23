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
      
        <div className="flex justify-center">
          <img className="w-[8rem] mt-20" src={nasa} alt="navlogo" />
        </div>
        <div className="text-center h-1/3 text-white">
          <ul
            onClick={openHandler}
            className="h-full flex flex-col font-bold text-2xl justify-evenly "
          >
            <li>
              <NavLink
                className="bg-red-700 px-6 py-2 border border-solid rounded-full border-yellow-200 hover:bg-yellow-200 hover:text-red-500 hover:border-red-500 hover:shadow-lg hover:shadow-yellow-200"
                to="/Apod"
              >
                A.P.O.D
              </NavLink>
            </li>
            <li>
              <NavLink
                className="bg-red-700 px-6 py-2 border border-solid rounded-full border-yellow-200 hover:bg-yellow-200 hover:text-red-500 hover:border-red-500 hover:shadow-lg hover:shadow-yellow-200"
                to="/About"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    
  );
};
