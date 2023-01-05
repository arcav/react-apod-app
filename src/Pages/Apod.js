//React
import React from "react";

//CustomHook
import useFetch from "../Hooks/useFetch";

/* const apiKey= process.env.REACT_APP_NASA_KEY */

const Products = () => {
  const data = useFetch(
    "https://api.nasa.gov/planetary/apod?api_key=n2RgFYIcMv87DZjsCoAgyaL8lXeenDzWKkFwiptJ"
  );
  console.log(data);
  return (
    <div>
      <h1> {data.title}</h1>
      <div>
        <div>
          {data.media_type === "image" ? (
            <img src={data.url} alt="apod" />
          ) : (
            <iframe
              title="space-video"
              src={data.url}
              allow="autoplay"
              allowFullScreen
              className="img"
            />
          )}
          ;
        </div>
        <h2>
          Author:
          {data.copyright}
        </h2>
        <h3>
          Date:
          {data.date}
        </h3>
        <p>{data.explanation}</p>
      </div>
    </div>
  );
};
export default Products;

/*  */
