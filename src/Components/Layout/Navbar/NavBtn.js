import React from "react";
import { NavLink } from "react-router-dom";

export const NavBtn = ({ children, path }) => {
  return (
    <NavLink to={path}>
      <div
        className="bg-red-700 w-11/12 h-12 border border-solid shadow-md shadow-white border-yellow-200
      hover:bg-white hover:text-red-500 hover:border-red-500 hover:shadow-md hover:shadow-red-500 m-auto flex items-center justify-center"
      >
        {children}
      </div>
    </NavLink>
  );
};
