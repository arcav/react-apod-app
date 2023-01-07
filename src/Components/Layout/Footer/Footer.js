//React
import React from "react";

//CSS
import "./Footer.css";

const footer = () => {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} Copyright: arc@v
    </footer>
  );
};

export default footer;
