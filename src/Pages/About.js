//React
import React from "react";

//Css

const About = () => {
  return (
    <div>
      <h1> A.P.O.D </h1>
      <h3>Astronomy Picture of the Day</h3>
      <div>
        <p>
          {" "}
          One of the most popular websites at NASA is the Astronomy Picture of
          the Day. In fact, this website is one of the most popular websites
          across all federal agencies. It has the popular appeal of a Justin
          Bieber video.This endpoint structures the APOD imagery and associated
          metadata so that it can be repurposed for other applications.In
          addition, if the concept_tags parameter is set to True, then keywords
          derived from the image explanation are returned. These keywords could
          be used as auto - generated hashtags for twitter or instagram feeds;
          but generally help with discoverability of relevant imagery.
        </p>
      </div>
    </div>
  );
};

export default About;
