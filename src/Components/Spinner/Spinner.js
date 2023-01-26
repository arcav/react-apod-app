import React from "react";

export const Spinner = ({ loading }) => {
  return (
    <div className="flex h-screen mt-24">
      {loading ? (
        <div className="flex mx-auto">
          <div className="flex mt-20 justify-center ">
            <div className="w-40 h-40 border-t-8 border-b-8 border-white rounded-full animate-spin"></div>
          </div>
        </div>
      ):null}
    </div>
  );
};
