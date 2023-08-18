import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { PatientStoriesData } from "../constants/Constant";
import Backdrop from "@mui/material/Backdrop";
import { useEffect, useState } from "react";
import { supabase } from "./api/supabase";
import { FIRST_PATH } from "../constants/Constant";
/* eslint-disable @next/next/no-img-element */
export default function PatientStories() {
  const [open, setOpen] = useState(true);
  const [patientStories, setPatientStories] = useState();

  useEffect(() => {
    getPatientStories();
    setTimeout(() => {
      setOpen(false);
    }, 500);
  }, []);

  const getPatientStories = () => {
    supabase
      .from("patient_stories")
      .select()
      .then((response) => {
        setPatientStories(response?.data);
        console.log("response", response.data);
      });
  };
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
          Patient Stories
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
      {patientStories?.map((x) => {
        const text = x.items.find((x) => x.type === "text");
        const file = x.items.find((x) => x.type === "file");
        return (
          <Grid
            container
            key={x}
            display={"flex"}
            direction={"row"}
            px={{ xs: 2, sm: 5, md: 10, lg: 22 }}
          >
            <Grid item xs={12} sm={6} pb={4}>
              <img
                loading="lazy"
                src={`${FIRST_PATH}${file.value}`}
                alt="iamge"
                width={"95%"}
              ></img>
            </Grid>
            <Grid item xs={12} sm={6} px={3}>
              <Typography variant="body1" color={"#333333"} mb={4}>
                {text.value}
              </Typography>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}
