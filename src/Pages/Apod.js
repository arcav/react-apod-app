//React
import React from "react";
import { Error } from "../Components/Error/Error";
import { Spinner } from "../Components/Spinner/Spinner";

//CustomHook
import useFetch from "../Hooks/useFetch";

/* const apiKey= process.env.REACT_APP_NASA_KEY */

export const Apod = () => {
  const { data, error, loading } = useFetch(
    'https://api.nasa.gov/planetary/apod?api_key=n2RgFYIcMv87DZjsCoAgyaL8lXeenDzWKkFwiptJ'
  );

  return (
    <>
      {error && <Error error={error}/>}
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
              <h2 className="text-2xl font-bold">
                Author:
                {data.copyright}
              </h2>
              <h3 className="flex gap-3 text-2xl font-bold">
                Date:
                {data.date}
              </h3>
              <p className="text-lg font-semibold text-justify ">
                Explanation
                {data.explanation}
              </p>
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
