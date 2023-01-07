//React and react-Router-Dom
import React from "react";
import { NavLink } from "react-router-dom";

//Componente
import ToogleButton from "../SideNav/SideDrawer/ToogleButton";

//Images
import nasa from "../../../Assets/nasa.png";

//CSS
import "./NavBar.css";

const NavBar = ({ drawerClickHandler }) => {
  return (
    <header className="header">
      <nav className="navigation">
        <div className="navigation-container">
          <div className="toggle-btn">
            <ToogleButton click={drawerClickHandler} />
          </div>

          <div className="logo">
            <NavLink to="/">
              {" "}
              <img src={nasa} alt="navlogo" />
            </NavLink>
          </div>
        </div>

        <div className="navigation-items">
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
