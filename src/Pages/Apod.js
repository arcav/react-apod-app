//React
import React from "react";
import { Author } from "../Components/Author/Author";
import { Content } from "../Components/Content/Content";
import { Error } from "../Components/Error/Error";
import { Spinner } from "../Components/Spinner/Spinner";
import { Date } from "../Components/Date/Date";

//CustomHook
import useFetch from "../Hooks/useFetch";
import { AstroPic } from "../Components/AstroPic/AstroPic";
import { AstroFrame } from "../Components/AstroFrame/AstroFrame";
import { Title } from "../Components/Title/Title";

const apiKey = process.env.REACT_APP_NASA_KEY;
const URL = process.env.NASA_URL;

export const Apod = () => {
  const { data, error, loading } = useFetch(`${URL}${apiKey}`);

  return (
    <>
      {error && <Error error={error} />}
      {data ? (
        <div className="flex flex-col m-auto my-10 text-white w-11/12">
          <Title>{data.title}</Title>
          <div className="h-full ">
            <div className="object-scale-down">
              {data.media_type === "image" ? (
                <AstroPic pic={data.url} />
              ) : (
                <AstroFrame dataUrl={data.url} />
              )}
            </div>
            <div className="object-contain mb-4">
              <Author>
                Author:
                {data.copyright}
              </Author>
              <Date>
                Date:
                {data.date}
              </Date>
              <Content>
                Explanation
                {data.explanation}
              </Content>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Spinner loading={loading} />
        </div>
      )}
    </>
  );
};
