//React
import React from "react";

//CSS

export const BackDrop = ({ isOpen }) => {
  return (
    <div
      className={`fixed w-full h-full top-0 left-0 backdrop-blur-sm  ${
        !isOpen ? "hidden" : ""
      }`}
      onClick={() => isOpen}
    />
  );
};
