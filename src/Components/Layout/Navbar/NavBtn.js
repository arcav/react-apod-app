import React from "react";
import { NavLink } from "react-router-dom";

export const NavBtn = ({ children, path }) => {
  return (
    <NavLink
      className="bg-red-700 px-6 py-2 border border-solid  border-yellow-200 
      hover:bg-yellow-200 hover:text-red-500 hover:border-red-500 hover:shadow-md hover:shadow-yellow-200"
      to={path}
    >
      {children}
    </NavLink>
  );
};
