//React
import React from "react";
import { Author } from "../Components/Author/Author";
import { Content } from "../Components/Content/Content";
import { Error } from "../Components/Error/Error";
import { Spinner } from "../Components/Spinner/Spinner";
import { SubTitle } from "../Components/SubTitle/SubTitle";
import { Date } from "../Components/Date/Date";

//CustomHook
import useFetch from "../Hooks/useFetch";

/* const apiKey= process.env.REACT_APP_NASA_KEY */

export const Apod = () => {
  const { data, error, loading } = useFetch(
    "https://api.nasa.gov/planetary/apod?api_key=n2RgFYIcMv87DZjsCoAgyaL8lXeenDzWKkFwiptJ"
  );

  return (
    <>
      {error && <Error error={error} />}
      {data ? (
        <div className="flex flex-col m-auto my-10 text-white w-11/12">
          <h1 className="text-center text-3xl font-bold">{data.title}</h1>
          <div className="h-full ">
            <div className="object-scale-down">
              {data.media_type === "image" ? (
                <img
                  className="rounded-3xl my-2 w-1/2 m-auto"
                  src={data.url}
                  alt="apod"
                />
              ) : (
                <iframe
                  start="true"
                  className="rounded-3xl my-2"
                  title="space-video"
                  src={data.url}
                  allow="autoplay"
                  allowFullScreen
                />
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
