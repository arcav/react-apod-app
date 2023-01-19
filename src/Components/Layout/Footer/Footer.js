//React
import React from "react";

const footer = () => {
  return (
    <footer className="bg-[#010f24] flex text-lg text-white justify-center bottom-0  w-full relative">
      <div className="h-12">&copy; {new Date().getFullYear()} Copyright: arc@v</div>
    </footer>
  );
};

export default footer;
