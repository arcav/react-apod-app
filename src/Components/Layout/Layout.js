//React
import React from "react";

//Footer Component
import Footer from "./Footer/Footer";

//Navbar Component
import Index from "./Navbar/Index";

const Layout = ({ children }) => {
  return (
    <div>
      <Index />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
