//React
import React from "react";
import { BiMenu, BiX } from "react-icons/bi";

export const ToogleButton = ({ isOpen, openHandler }) => {
  return (
    <>
      {!isOpen ? (
        <BiMenu
          onClick={openHandler}
          className="w-14 h-14 text-white cursor-pointer"
        />
      ) : (
        <BiX
          onClick={openHandler}
          className="w-14 h-14 text-white cursor-pointer flex justify-end m-4 fixed"
        />
      )}
    </>
  );
};
