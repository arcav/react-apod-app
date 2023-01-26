//React and react-Router-Dom
import React from "react";
import { NavLink } from "react-router-dom";

//Componente
import { ToogleButton } from "../SideNav/SideDrawer/ToogleButton";
//Images
import { NavBtn } from "./NavBtn";

import nasa from "../../../Assets/nasa.png";

export const NavBar = ({ isOpen, openHandler }) => {
  return (
    <>
      <header className="flex w-full h-[80px] shadow-lg shadow-white bg-[#010f24] top-0 sticky">
        <nav className="w-full flex justify-between">
          <div className="flex justify-between  w-full m-auto md:justify-start md:m-auto ">
            {!isOpen ? (
              <div className="flex items-center mx-7  md:hidden">
                <ToogleButton openHandler={openHandler} />
              </div>
            ) : null}
            <div className="flex  w-16 h-16 mr-8 lg:ml-8">
              {!isOpen ? (
                <NavLink className="flex items-center" to={"/"}>
                  <img src={nasa} alt="navlogo" />
                </NavLink>
              ) : null}
            </div>
          </div>
 
          <div className="hidden w-full md:flex md:text-yellow-300 md:items-center md:mr-6 md:w-1/2 lg:w-1/3 md:justify-center md:font-bold md:text-lg">
            <ul className="flex w-full justify-around">
              <li className="w-1/2">
                <NavBtn path={"/apod"}>A.P.O.D</NavBtn>
              </li>
              <li className="w-1/2">
                <NavBtn path={"/about"}>ABOUT</NavBtn>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
