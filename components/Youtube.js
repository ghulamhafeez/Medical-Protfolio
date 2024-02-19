import React from "react";

export const Youtube = ({ data }) => {
  console.log("dt", data);
  const videoId = data?.split("=");
  console.log("videoId", videoId);
  return (
    <iframe
      width={"100%"}
      height={450}
      src={`https://www.youtube.com/embed/${videoId[1]}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};
