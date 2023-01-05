//React and React-Router-Dom
import React from "react";
import { Link } from "react-router-dom";

//Images
import nasa from "../Assets/nasa.png";
import react from "../Assets/react1.png";

const Home = () => {
  return (
    <div className="flex flex-col justify-center align-middle my-24">
      <h1 className="text-5xl text-neutral-100 text-center">
        WELCOME <br />
        TO MY REACT <br />
        NASA A.P.O.D <br />
        APP{" "}
      </h1>
      <Link to="/Apod">
        <div className="flex flex-row justify-center">
          <img src={nasa} alt="nasalogo" className="w-60 h-60" />
          <img src={react} alt="reactlogo" />
        </div>
      </Link>
    </div>
  );
};
export default Home;
