import React from "react";

export const Spinner = ({ loading }) => {
  return (
    <div className="flex h-screen">
      {loading && (
        <div className="flex m-auto">
            <div className="w-40 h-40 border-t-8 border-b-8 border-white rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};
