import React from "react";

export const AstroPic = ({ children, pic }) => {



  return (
    <img
      className="rounded-3xl my-2 w-full shadow-xl shadow-white md:w-1/2 m-auto cursor-pointer"
      src={pic}
      alt="apod"
    />
  );
};
