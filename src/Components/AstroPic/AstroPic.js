import React from "react";

export const AstroPic = ({ children, pic }) => {
  return <img className="rounded-3xl my-2 w-1/2 m-auto" src={pic} alt="apod" />;
};
