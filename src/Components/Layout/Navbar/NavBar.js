//React and react-Router-Dom
import React from "react";
import { NavLink } from "react-router-dom";

//Componente
import ToogleButton from "../SideNav/SideDrawer/ToogleButton";

//Images
import nasa from "../../../Assets/nasa.png";


const NavBar = ({ drawerClickHandler }) => {
  return (
    <header className="flex w-full h-[80px] shadow-lg shadow-white bg-[#010f24] fixed top-0">
      <nav className="w-full flex justify-between">
        <div className="flex justify-between w-[85%] m-auto md:justify-start md:m-auto">
          <div className="flex items-center">
            <ToogleButton click={drawerClickHandler} />
          </div>
          <div className="flex items-center w-14 h-14 md:mx-8">
            <NavLink to="/">
              <img src={nasa} alt="navlogo" />
            </NavLink>
          </div>
        </div>

        <div className="hidden md:w-1/4 md:flex md:items-center md:justify-center">
          <ul>
            <li>
              <NavLink to="/Apod">A.P.O.D</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
