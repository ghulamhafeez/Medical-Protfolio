import { Grid } from "@mui/material";
import React from "react";

export const Youtube = ({ data }) => {
  const videoId = data?.split("=");

  return (
    <Grid>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Grid>
  );
};
