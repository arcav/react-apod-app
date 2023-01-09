//React and React-Router-Dom
import React from "react";
import { Link } from "react-router-dom";

//Images
import nasa from "../Assets/nasa.png";

const Home = () => {
  return (
    <div className="flex flex-col h-[95vw] justify-evenly">
      <h1 className="text-4xl text-neutral-100 text-center font-bold">
        WELCOME
      </h1>

      <div className="flex flex-col">
        <Link to="/Apod">
          <img
            src={nasa}
            alt="nasalogo"
            className="w-1/2 m-auto items-center"
          />
        </Link>
      </div>
    </div>
  );
};
export default Home;
