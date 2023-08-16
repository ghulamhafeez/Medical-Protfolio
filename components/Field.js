import React from "react";
import { Youtube } from "../components/Youtube";
import { FIRST_PATH } from "../constants/Constant";
export const Field = (props) => {
  switch (props?.type) {
    case "text":
      return <p>{props?.value}</p>;

    case "file":
      return (
        <img
          width={"100%"}
          object-fit="cover"
          src={`${FIRST_PATH}${props?.value}`}
        ></img>
      );

    case "Youtube":
      return <Youtube />;
    default:
      null;
  }
};
