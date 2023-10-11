import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { PatientStoriesData } from "../constants/Constant";
import Backdrop from "@mui/material/Backdrop";
import { useEffect, useState } from "react";
import { supabase } from "./api/supabase";
import { FIRST_PATH } from "../constants/Constant";
/* eslint-disable @next/next/no-img-element */

export const getServerSideProps = async () => {
  const res = await supabase
    .from("patient_stories")
    .select()
    .order("id", { ascending: false });

  const stories = res.data;

  return { props: { stories } };
};

export default function PatientStories({ stories }) {
  const [open, setOpen] = useState(true);

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
          Testimonials
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
        <Grid>
          <img
            width={"100%"}
            height={100}
            alt={"Image"}
            src={"/assets/icon/applogo.png"}
          ></img>
        </Grid>
      </Backdrop>
      {stories?.map((x) => {
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
            <Grid item xs={12} sm={6} px={3} mt={4}>
              <Typography variant="body1" color={"#333333"} mb={4}>
                {text?.value}
              </Typography>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}
