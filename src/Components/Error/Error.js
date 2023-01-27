import React from "react";

export const Error = ({ error }) => {
  console.log(error.message);
  return (
    <div className="h-screen flex flex-col ">
      <div className="w-11/12 m-auto bg-[#010f24] rounded-xl shadow-md shadow-white">
        {error ? (
          <div className="flex h-full text-white items-center justify-center">
            <p>{error.message}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};
