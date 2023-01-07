//React
import React from "react";

//CustomHook
import useFetch from "../Hooks/useFetch";

/* const apiKey= process.env.REACT_APP_NASA_KEY */

const Apod = () => {
  const data = useFetch(
    "https://api.nasa.gov/planetary/apod?api_key=n2RgFYIcMv87DZjsCoAgyaL8lXeenDzWKkFwiptJ"
  );
  console.log(data);
  return (
    <div className="h-full m-3 p-3 text-white">
      <h1 className="text-center text-3xl font-bold "> {data.title}</h1>
      <div>
        <div>
          {data.media_type === "image" ? (
            <img className="rounded-3xl my-6" src={data.url} alt="apod" />
          ) : (
            <iframe
              className="rounded-3xl my-6"
              title="space-video"
              src={data.url}
              allow="autoplay"
              allowFullScreen
            />
          )}
          ;
        </div>
        <h2 className="text-2xl font-bold">
          Author:
          {data.copyright}
        </h2>
        <h3 className="text-2xl font-bold">
          Date:
          {data.date}
        </h3>
        <p className="text-lg font-semibold text-justify my-4">{data.explanation}</p>
      </div>
    </div>
  );
};
export default Apod;
