import styles from "../../styles/Home.module.css";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { supabase } from "../api/supabase";
import { FIRST_PATH } from "../../constants/Constant";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";

export const getServerSideProps = async () => {
  const res = await supabase
    .from("treatment_option")
    .select()
    .order("id", { ascending: false });

  const treatments = res.data;

  return { props: { treatments } };
};

export default function TreatmentOptions(props) {
  const [open, setOpen] = useState(true);
  const [treatmentOption, setTreatmentOption] = useState(props.treatments);

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
        <Grid>
          <img
            width={"100%"}
            height={100}
            alt={"Image"}
            src={"/assets/icon/applogo.png"}
          ></img>
        </Grid>
      </Backdrop>
      <Typography
        variant="h6"
        textAlign={"center"}
        pb={6}
        fontSize={{ xs: "22px", sm: "20px", md: "23px", lg: "23px" }}
      >
        Please find below a range of orthodontic treatment options
      </Typography>
      <Grid
        container
        flexWrap={"wrap"}
        direction={"row"}
        mb={6}
        px={{ xs: 0, sm: 25, md: 14, lg: 40, xl: 48 }}
        spacing={5}
      >
        {treatmentOption?.map((x) => {
          return (
            <Grid item direction={"column"} key={x}>
              <Link href={`treatment-options/treatment-option-detail/${x.id}`}>
                <img
                  loading="lazy"
                  src={`${FIRST_PATH}${x.headerFile}`}
                  alt="iamge"
                  width={375}
                  height={280}
                ></img>

                <Typography variant="h6" color={"#333333"}>
                  {" "}
                  {x.title}
                </Typography>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
