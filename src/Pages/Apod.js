//React
import React from "react";

//Css
import "./Page.css";

//CustomHook
import useFetch from "../CustomsHooks/useFetch";

/* const apiKey= process.env.REACT_APP_NASA_KEY */

const Products = () => {
    const data = useFetch(
        "https://api.nasa.gov/planetary/apod?api_key=n2RgFYIcMv87DZjsCoAgyaL8lXeenDzWKkFwiptJ"
    );
    console.log(data);
    return (
        <>
            <h1> {data.title}</h1>
            <div className="card">
                <div className="img-container">
                    {data.media_type === "image" ? (
                        <img className="img" src={data.url} alt="apod" />
                    ) : (
                        <iframe
                            title="space-video"
                            src={data.url}
                            frameBorder="0"
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
        </>
    );
};
export default Products;

/*  */
