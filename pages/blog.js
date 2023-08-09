/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.css";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import React from "react";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
export default function Blog() {
  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const OpenPoper = Boolean(anchorEl);
  const id = OpenPoper ? "simple-popper" : undefined;

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 500);
  }, []);

  return (
    <Grid>
      <Grid
        bgcolor={"#89C1CB"}
        height={250}
        mb={6}
        textAlign={"center"}
        pt={12}
      >
        <Typography
          variant="h3"
          color={"white"}
          fontSize={{ xs: "30px", sm: "30px", md: "40px", lg: "40px" }}
        >
          Blog
        </Typography>
      </Grid>
      <Backdrop
        sx={{
          color: "#89C1CB",
          backgroundColor: "#89C1CB",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
      >
        <Typography
          variant="h1"
          color={"white"}
          fontSize={{ xs: "40px", sm: "40px", md: "50px", lg: "50px" }}
        >
          Dr Haris
        </Typography>
      </Backdrop>

      <Grid
        container
        display={"flex"}
        direction={"row"}
        px={{ xs: 2, sm: 5, md: 10, lg: 28 }}
      >
        <Grid item xs={12} sm={6} pb={4}>
          <img
            loading="lazy"
            src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2020/04/je.ol.jpg"
            alt="iamge"
            width={"100%"}
          ></img>
        </Grid>
        <Grid item xs={12} sm={6} px={4}>
          <Typography variant="h4" color={"#333333"} mt={8}>
            Upcomming lectures - details to follow soon
          </Typography>
          <Typography variant="h6" color={"#333333"} mt={10}>
            London Excellere 19-20 May Chicago&nbsp; 23-24 July 2019 British
            Orthodontic Society Conference&nbsp; September 2019 Amman 12-13
            September New York 14-15…
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
