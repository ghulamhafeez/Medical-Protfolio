import Head from "next/head";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Navigation } from "swiper";
import { Grid, Button } from "@mui/material";
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

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  }, []);
  return (
    <Grid>
      <Head>
        <title>Medical Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid>
        <Swiper navigation={true} modules={[Navigation]} slidesPerView={1}>
          {homeData?.map((x) => {
            return (
              <SwiperSlide key={x}>
                <img src={x?.url} alt="iamge" width="100%" />
                {/* <Typography
                      sx={{
                        fontSize: 13,
                        textAlign: "center",
                        color: "White",
                      }}
                    >
                      {x?.text}
                    </Typography> */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Grid>

      <Grid container direction={"row"} spacing={3} pt={3}>
        <Grid item xs={12} sm={6}>
          <Link href="https://www.ektorgrammatopoulos.com/orthodontics-treatment-for-adult/">
            <img
              loading="lazy"
              src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2018/12/detier-thumb1-e1549990722296.jpg"
              alt="image"
              width={"100%"}
            />

            <h3>For Adults</h3>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Link href="https://www.ektorgrammatopoulos.com/orthodontics-treatment-for-children/">
            <img
              loading="lazy"
              src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2018/12/detier-thumb2-e1549990637829.jpg"
              alt="image"
              width={"100%"}
            />

            <h3> For Children</h3>
          </Link>
        </Grid>
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
                <Grid
                  item
                  xs={12}
                  sm={6}
                  textAlign={"left"}
                  // pl={4}
                  // px={{ xs: 2, sm: 5, md: 10, lg: 20 }}
                >
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
                      }}
                      variant="contained"
                      className={styles.enqiry_btn}
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
