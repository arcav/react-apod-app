//React
import React from "react";


const footer = () => {
  return (
    <footer className="bg-[#010f24] h-24 flex text-lg text-white justify-center items-center bottom-0 fixed w-full">
      &copy; {new Date().getFullYear()} Copyright: arc@v
    </footer>
  );
};

export default footer;
