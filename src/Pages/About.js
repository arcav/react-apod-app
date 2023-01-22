//React
import React from "react";

//Css

export const About = () => {
  return (
    <div className="flex flex-col h-screen w-11/12 justify-center  mx-auto">
      <h1 className="text-6xl text-white font-bold text-center  "> A.P.O.D </h1>
      <h3 className ="text-2xl text-white mt-8 font-bold text-center">Astronomy Picture of the Day</h3>
      
        <p className="text-xl text-white font-semibold mt-8 p-4">
          {" "}
          One of the most popular websites at NASA is the Astronomy Picture of
          the Day. In fact, this website is one of the most popular websites
          across all federal agencies. It has the popular appeal of a Justin
          Bieber video.This endpoint structures the APOD imagery and associated
          metadata so that it can be repurposed for other applications.In
          addition,f the concept_tags parameter is set to True, then keywords
          derived from the image explanation are returned. These keywords could
          be used as auto - generated hashtags for twitter or instagram feeds;
          but generally help with discoverability of relevant imagery.
        </p>
    </div>
  );
};

