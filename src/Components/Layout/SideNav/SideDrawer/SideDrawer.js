//React and React-Router-Dom
import React from "react";
import { NavLink } from "react-router-dom";
import { ToogleButton } from "../SideDrawer/ToogleButton";
//Image
import nasa from "../../../../Assets/nasa.png";
import { NavBtn } from "../../Navbar/NavBtn";

export const SideDrawer = ({ isOpen, openHandler }) => {
  return (
    <div
      className={`w-3/4 h-screen bg-[#010f24] bg-opacity-80 z-20 top-0 right-0 fixed transition-all duration-700  ${
        isOpen ? "left-0" : "-left-full"
      }`}
    >
      <div className="flex justify-end">
        {isOpen ? (
          <ToogleButton isOpen={isOpen} openHandler={openHandler} />
        ) : (
          ""
        )}
      </div>

      <div className="flex justify-center">
        <img className="w-[8rem] mt-20" src={nasa} alt="navlogo" />
      </div>
      <div className="text-center h-1/3 text-white">
        <ul
          onClick={openHandler}
          className="h-full w-full flex flex-col font-bold text-2xl justify-evenly "
        >
          <li>
            <NavBtn path={"/apod"}>A.P.O.D</NavBtn>
          </li>
          <li>
            <NavBtn path={"/About"}>About</NavBtn>
          </li>
        </ul>
      </div>
    </div>
  );
};
