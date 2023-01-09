//React
import React from "react";

//Footer Component
import Footer from "./Footer/Footer";

//Navbar Component
import Nav from "./Navbar/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <main className="flex flex-col">
        <Nav />
        <section className="my-32">{children}</section>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
