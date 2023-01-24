import React from "react";

export const Error = ({ error }) => {
  console.log(error.message);
  return (
    <div className=" h-80 w-11/12 m-auto bg-[#010f24]  items-center justify-center  rounded-xl shadow-md shadow-white">
      {error ? (
        <div className="flex h-full text-white items-center justify-center">
          <h1>{error.message}</h1>
        </div>
      ) : (
        null
      )}
    </div>
  );
};
