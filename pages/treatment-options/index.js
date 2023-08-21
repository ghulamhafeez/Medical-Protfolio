import styles from "../../styles/Home.module.css";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { supabase } from "../api/supabase";
import { FIRST_PATH } from "../../constants/Constant";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";

export default function TreatmentOptions() {
  const [open, setOpen] = useState(true);
  const [treatmentOption, setTreatmentOption] = useState();

  useEffect(() => {
    getTreatmentOption();
    setTimeout(() => {
      setOpen(false);
    }, 500);
  }, []);

  const getTreatmentOption = () => {
    supabase
      .from("treatment_option")
      .select()
      .then((response) => {
        console.log("asdresponse", response?.data);
        setTreatmentOption(response?.data);
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
          fontSize={{
            xs: "30px",
            sm: "30px",
            md: "40px",
            lg: "40px",
          }}
        >
          Treatment Options
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
      <Typography
        variant="h6"
        textAlign={"center"}
        pb={6}
        fontSize={{ xs: "22px", sm: "20px", md: "23px", lg: "23px" }}
      >
        Please find below a range of orthodontic treatment options
      </Typography>
      {treatmentOption?.map((x) => {
        return (
          <Grid
            key={x}
            container
            // display={"flex"}
            flexWrap={"wrap"}
            // direction={"row"}
            textAlign={"center"}
            mb={6}
            px={{ xs: 2, sm: 4, md: 12, lg: 32, xl: 42 }}
            spacing={4}
          >
            {/* <Grid item xs={12} sm={6} md={6} lg={6}> */}{" "}
            <Grid item display={"flex"} direction={"column"} gap={2}>
              <img
                loading="lazy"
                src={`${FIRST_PATH}${x.headerFile}`}
                alt="iamge"
                width={"100%"}
              ></img>

              <Typography variant="h6" color={"#333333"}>
                <Link
                  href={`treatment-options/treatment-option-detail/${x.id}`}
                >
                  {" "}
                  {x.title}
                </Link>
              </Typography>
            </Grid>
            {/* </Grid> */}
          </Grid>
        );
      })}
    </Grid>
  );
}