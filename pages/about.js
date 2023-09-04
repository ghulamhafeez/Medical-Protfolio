/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import { useEffect, useState } from "react";
import { FIRST_PATH } from "../constants/Constant";
import { supabase } from "./api/supabase";

export const getServerSideProps = async () => {
  const res = await supabase
    .from("authentication")
    .select()
    .eq("email", "drharis@test.com")
    .single();

  const authentication = res.data;
  return { props: { authentication } };
};

export default function About({ authentication }) {
  const [open, setOpen] = useState(true);
  const [bio, setBio] = useState(authentication?.bio);
  const [avatarImg, setAvatarImg] = useState(authentication?.avatarImg);

  useEffect(() => {
    getAboutData();
    setTimeout(() => {
      setOpen(false);
    }, 500);
  }, []);

  const getAboutData = () => {
    supabase
      .from("authentication")
      .select()
      .eq("email", "drharis@test.com")
      .single()
      .then((response) => {
        console.log("response", response?.data);

        setBio(response?.data?.bio);
        setAvatarImg(response?.data?.avatarImg);
      });
  };
  return (
    <Grid direction={"column"}>
      <Grid bgcolor={"#89C1CB"} height={250} mb={6} textAlign={"center"} pt={8}>
        <Typography
          variant="h3"
          color={"white"}
          fontSize={{ xs: "30px", sm: "30px", md: "40px", lg: "40px" }}
        >
          Dr Ektor Grammatopoulos
        </Typography>
        <Typography
          variant="h6"
          color={"white"}
          fontSize={{ xs: "18px", sm: "18px", md: "22px", lg: "25px" }}
        >
          Specialist and Consultant Orthodontist
        </Typography>
        <Typography
          variant="body2"
          color={"white"}
          fontSize={{ xs: "15px", sm: "15px", md: "15px", lg: "15px" }}
        >
          BDS MFDS RCPSG MPHIL(Orth) MORTH RCSED FDS(ORTH) RCSED PGCert(KCL)
          FHEA
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
        flexWrap={"wrap"}
        direction={"row"}
        px={{ xs: 3, sm: 6, md: 15, lg: 24, xl: 30 }}
        spacing={6}
        mb={4}
        mt={2}
      >
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <img
            loading="lazy"
            src={`${FIRST_PATH}${avatarImg}`}
            width={"100%"}
            // max-width="360px"
            height={"320px"}
            alt={"Thumbnail"}
          ></img>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={8} mb={6}>
          <Typography pb={2}>{bio}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
