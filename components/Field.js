import React from "react";
import { Youtube } from "../components/Youtube";
import { FIRST_PATH } from "../constants/Constant";
import Typography from "@mui/material/Typography";
/* eslint-disable @next/next/no-img-element */

export const Field = (props) => {
  switch (props?.type) {
    case "file":
      return (
        <img
          width={props.width}
          object-fit="cover"
          alt="image"
          src={`${FIRST_PATH}${props?.value}`}
        ></img>
      );
    case "text":
      return <Typography variant="body1">{props?.value}</Typography>;

    case "Youtube":
      return <Youtube />;
    default:
      null;
  }
};
