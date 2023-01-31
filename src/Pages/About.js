//React
import React from "react";
import { Content } from "../Components/Content/Content";

//Components

import { PageName } from "../Components/PageName/PageName";
import { SubTitle } from "../Components/SubTitle/SubTitle";
export const About = () => {
  return (
    <div className="flex flex-col h-full justify-items-start m-auto w-11/12 md:h-screen">
      <div className="mt-10">
        <PageName>APOD</PageName>
      </div>
      <div>
        <SubTitle>Astronomy Picture Of The Day</SubTitle>
      </div>
      <div>
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
