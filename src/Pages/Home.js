//React and React-Router-Dom
import React from "react";
import { Link } from "react-router-dom";

//Images
import nasa from "../Assets/nasa.png";
import react from "../Assets/react1.png";

const Home = () => {
  return (
    <div className="flex flex-col h-screen justify-center">
      <h1 className="text-3xl text-neutral-100 text-center my-10">
        WELCOME <br />
        {" "}
      </h1>
     
      <div className="flex flex-row justify-center my-10 w-full">
    
        <Link to="/Apod">
          <img
            src={nasa}
            alt="nasalogo"
            className="w-32"
          />
        </Link>
     
      </div>
    
    </div>
  );
};
export default Home;
