import React from "react";

export const AstroFrame = ({ dataUrl }) => {
  return (
    <iframe
      start="true"
      className="rounded-3xl my-2"
      title="space-video"
      src={dataUrl}
      allow="autoplay"
      allowFullScreen
    />
  );
};
