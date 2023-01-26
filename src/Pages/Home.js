//React and React-Router-Dom
import React from "react";
import { Link } from "react-router-dom";

//Images
import nasa from "../Assets/nasa.png";

import { PageName } from "../Components/PageName/PageName";

export const Home = () => {
  return (
    <div className="flex flex-col h-screen  justify-center m-auto">
      <PageName>WELCOME</PageName>

      <div className="flex flex-col">
        <Link to="/Apod">
          <img
            src={nasa}
            alt="nasalogo"
            className="w-1/4 mx-auto my-10 items-center"
          />
        </Link>
      </div>
    </div>
  );
};
