import React from "react";

export const Spinner = ({ loading }) => {
  return (
    <div className="flex">
      {loading ? (
        <div className="flex mx-auto">
          <div className="flex mt-20 justify-center ">
            <div className="w-40 h-40 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
          </div>
        </div>
      ):null}
    </div>
  );
};
