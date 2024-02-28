/* eslint-disable @next/next/no-img-element */
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
  const [avatarWidth, setAvatarWidth] = useState("");
  const [avatarHeight, setAvatarHeight] = useState("");
  const [teammate, setTeammate] = useState();

  const [specialty, setSpecialty] = useState(authentication?.specialty);
  const [name, setName] = useState(authentication?.nmae);
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
        console.log("test", response);
        setBio(response?.data?.bio);
        setName(response?.data?.name);
        setTeammate(response?.data?.items);
        setSpecialty(response?.data?.specialty);
        setAvatarImg(response?.data?.avatarImg);
        setAvatarWidth(response?.data?.width);
        setAvatarHeight(response?.data?.height);
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
          {name}
          {/* Dr Ektor Grammatopoulos */}
        </Typography>
        <Typography
          variant="h6"
          color={"white"}
          fontSize={{ xs: "18px", sm: "18px", md: "22px", lg: "25px" }}
        >
          {specialty}
          {/* Specialist and Consultant Orthodontist */}
        </Typography>
        {/* <Typography
          variant="body2"
          color={"white"}
          fontSize={{ xs: "15px", sm: "15px", md: "15px", lg: "15px" }}
        >
          BDS MFDS RCPSG MPHIL(Orth) MORTH RCSED FDS(ORTH) RCSED PGCert(KCL)
          FHEA
        </Typography> */}
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
            // width={avatarWidth}
            // height={avatarHeight}
            alt={"Image"}
            src={"/assets/icon/applogo.png"}
          ></img>
        </Grid>
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
            height={"320px"}
            alt={"Thumbnail"}
          ></img>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={8} mb={6}>
          <Typography pb={2}>{bio}</Typography>
        </Grid>
      </Grid>
      <Typography display={"flex"} justifyContent={"center"} variant="h3">
        Teammates
      </Typography>
      <Grid
        container
        flexWrap={"wrap"}
        direction={"row"}
        px={{ xs: 3, sm: 6, md: 15, lg: 24, xl: 30 }}
        spacing={6}
        mb={4}
        mt={2}
      >
        {teammate?.map((x) => {
          console.log("x", x);
          return (
            <>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <img
                  loading="lazy"
                  src={`${FIRST_PATH}${x.value}`}
                  width={"100%"}
                  height={"320px"}
                  alt={"Thumbnail"}
                ></img>
                <Typography pb={2} display={"flex"} justifyContent={"center"}>
                  <b>{x.title}</b>
                </Typography>
              </Grid>
              {/* <Grid item xs={12} sm={8} md={8} lg={8} mb={6}></Grid> */}
            </>
          );
        })}
      </Grid>
    </Grid>
  );
}
