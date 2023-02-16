//React
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#010f24] flex text-lg text-white justify-center bottom-0  w-full ">
      <div className="h-12 flex items-center font-bold">
        &copy; {new Date().getFullYear()} Copyright: arc@v
      </div>
    </footer>
  );
};

export default Footer;
