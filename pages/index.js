import Head from "next/head";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { supabase } from "./api/supabase";
import { Navigation } from "swiper";
import { Grid, Button, Box } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { FIRST_PATH } from "../constants/Constant";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Typography from "@mui/material/Typography";
import { homeData, PatientStoriesData } from "../constants/Constant";
import { useEffect, useState } from "react";
export default function Home() {
  const [open, setOpen] = useState(true);
  const [homeImg, setHomeImg] = useState();

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
        setHomeImg(response?.data?.items);
      });
  };

  return (
    <Grid>
      <Head>
        <title>Medical Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <Grid mt={1}>
        <Swiper navigation={true} modules={[Navigation]} slidesPerView={1}>
          {homeImg?.map((x) => {
            return (
              <SwiperSlide key={x}>
                <img
                  src={`${FIRST_PATH}${x.value}`}
                  alt="iamge"
                  width={"100%"}
                  height={650}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Grid>

      <Grid container direction={"row"} spacing={3} pt={3}>
        <Grid item xs={12} sm={6}>
          <Link href="/">
            <Grid
              sx={{
                position: "relative",
                "&:hover": {
                  "&::after": {
                    transform: "scale(0.9)",
                    background: "rgba(0,0,0,0.4)",
                  },
                },
                "&::after": {
                  position: "absolute",
                  content: "''",
                  top: 0,
                  left: 0,
                  background: "transparent",
                  width: "100%",
                  height: "100%",
                  transition: "all 0.5s",
                  transform: "scale(1)",
                },
              }}
            >
              <img
                loading="lazy"
                src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2018/12/detier-thumb1-e1549990722296.jpg"
                alt="image"
                width={"100%"}
              />
            </Grid>
            <h3>For Adults</h3>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} position={"relative"}>
          <Link href="/">
            <Grid
              sx={{
                position: "relative",
                "&:hover": {
                  "&::after": {
                    transform: "scale(0.9)",
                    background: "rgba(0,0,0,0.4)",
                  },
                },
                "&::after": {
                  position: "absolute",
                  content: "''",
                  top: 0,
                  left: 0,
                  background: "transparent",
                  width: "100%",
                  height: "100%",
                  transition: "all 0.5s",
                  transform: "scale(1)",
                },
              }}
            >
              <img
                loading="lazy"
                src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2018/12/detier-thumb2-e1549990637829.jpg"
                alt="image"
                width={"100%"}
              />
            </Grid>
            <h3>For Children</h3>
          </Link>
        </Grid>
        {/* <Box
          sx={{
            position: "absolute",
            background: "red",
            width: "500px",
            height: 500,
          }}
        ></Box> */}
      </Grid>

      <Swiper navigation={true} modules={[Navigation]} slidesPerView={1}>
        {PatientStoriesData.map((x) => {
          return (
            <SwiperSlide key={x}>
              <Grid
                container
                display={"flex"}
                direction={"row"}
                px={{ xs: 2, sm: 5, md: 10, lg: 20 }}
                spacing={4}
                pt={5}
                pb={5}
              >
                <Grid item xs={12} sm={6}>
                  <img
                    loading="lazy"
                    src={x.src}
                    alt="iamge"
                    width={"100%"}
                  ></img>
                </Grid>
                <Grid item xs={12} sm={6} textAlign={"left"}>
                  <Typography
                    variant="h6"
                    color={"#333333"}
                    pb={4}
                    mt={18}
                    textAlign={"left"}
                    ml={8}
                  >
                    {x.story}
                  </Typography>

                  <Link href={"/patient-stories"}>
                    <Button
                      sx={{
                        backgroundColor: "#AFB5B9",
                        borderRadius: 0,
                        color: "white",
                        pt: 2,
                        ml: 8,
                        ":hover": {
                          backgroundColor: "#89C1CB",
                        },
                      }}
                      variant="contained"
                    >
                      <Typography gutterBottom fontSize={15}>
                        Read More
                      </Typography>
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Grid>
  );
}
