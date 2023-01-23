//React and react-Router-Dom
import React from "react";
import { NavLink } from "react-router-dom";

//Componente
import { ToogleButton } from "../SideNav/SideDrawer/ToogleButton";
//Images
import nasa from "../../../Assets/nasa.png";

export const NavBar = ({ isOpen, openHandler }) => {
  return (
    <>
      <header className="flex w-full h-[80px] shadow-lg shadow-white bg-[#010f24] fixed top-0 ">
        <nav className="w-full flex justify-between ">
          <div className="flex justify-between  w-full m-auto md:justify-start md:m-auto ">
            {!isOpen && (
              <div className="flex items-center mx-7 md:hidden">
                <ToogleButton openHandler={openHandler} />
              </div>
            )}
            <div className=" flex  w-16 h-16 ml-8 ">
              <NavLink className="flex items-center" to="/">
                <img src={nasa} alt="navlogo" />
              </NavLink>
            </div>
          </div>

          <div className=" hidden w-full md:flex md:text-yellow-300 md:items-center  md:w-1/2 lg:w-1/3 md:justify-center md:font-bold md:text-lg">
            <ul className="flex w-full justify-around">
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
                  ABOUT
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
