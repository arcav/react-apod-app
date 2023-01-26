//React
import React from "react";
import { Content } from "../Components/Content/Content";

//Components

import { PageName } from "../Components/PageName/PageName";
import { SubTitle } from "../Components/SubTitle/SubTitle";
export const About = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center m-auto">
      <div className="bg-red-500">
        <PageName>APOD</PageName>
      </div>
      <div className="bg-green-500">
        <SubTitle>Astronomy Picture Of The Day</SubTitle>
      </div>
      <div className="bg-blue-400">
        <Content>
          One of the most popular websites at NASA is the Astronomy Picture of
          the Day. In fact, this website is one of the most popular websites
          across all federal agencies. It has the popular appeal of a Justin
          Bieber video.This endpoint structures the APOD imagery and associated
          metadata so that it can be repurposed for other applications.In
          addition,f the concept_tags parameter is set to True, then keywords
          derived from the image explanation are returned. These keywords could
          be used as auto - generated hashtags for twitter or instagram feeds;
          but generally help with discoverability of relevant imagery.
        </Content>
      </div>
    </div>
  );
};
