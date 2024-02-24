import Head from "next/head";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { supabase } from "./api/supabase";
import { Navigation } from "swiper";
import { Grid } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { FIRST_PATH } from "../constants/Constant";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Typography from "@mui/material/Typography";

import { useEffect, useState } from "react";

export const getServerSideProps = async () => {
  const res = await supabase
    .from("blog")
    .select()
    .order("id", { ascending: false });

  console.log("res", res.data);
  const blogs = res.data;

  return { props: { blogs } };
};

export default function Home({ blogs }) {
  const [open, setOpen] = useState(true);
  const [aboutData, setAboutData] = useState();

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
        setAboutData(response?.data?.items);
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
      <Grid>
        <Swiper navigation={true} modules={[Navigation]} slidesPerView={1}>
          {aboutData?.map((x) => {
            return (
              <SwiperSlide key={x}>
                <Link href={x?.url}>
                  <img
                    src={`${FIRST_PATH}${x?.value}`}
                    alt="iamge"
                    width={"100%"}
                    style={{
                      maxHeight: 600,
                    }}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Grid>
    </Grid>
  );
}
