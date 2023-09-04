/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import React from "react";
import { FIRST_PATH } from "../../constants/Constant";
import { Field } from "../../components/Field";
import { supabase } from "../api/supabase";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
// import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

export default function Blog(props) {
  console.log("props", props);

  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [blogs, setBlogs] = React.useState(props.blogs);

  // const handleClick = (event) => {
  //   setAnchorEl(anchorEl ? null : event.currentTarget);
  // };

  const OpenPoper = Boolean(anchorEl);
  const id = OpenPoper ? "simple-popper" : undefined;

  useEffect(() => {
    // getBlog();
    setTimeout(() => {
      setOpen(false);
    }, 500);
  }, []);

  // const getBlog = () => {
  //   supabase
  //     .from("blog")
  //     .select()
  //     .order("id", { ascending: false })
  //     .then((response) => {
  //       console.log("data", response);
  //       setBlogs(response?.data);
  //     });
  // };
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

      {blogs?.map((x) => {
        const textDescription = x.items.find((x) => x.type === "text");
        return (
          <Grid
            key={x}
            container
            display={"flex"}
            direction={"row"}
            px={{ xs: 2, sm: 5, md: 10, lg: 28 }}
            mb={4}
          >
            <Grid item xs={12} sm={6} pb={4}>
              <img
                loading="lazy"
                src={`${FIRST_PATH}${x.headerFile}`}
                alt="iamge"
                width={"100%"}
              ></img>
            </Grid>
            <Grid item xs={12} sm={6} px={4}>
              <Typography variant="h4" color={"#333333"}>
                {x.title}
              </Typography>

              <Typography variant="body1" color={"#333333"} mt={6}>
                {textDescription?.value ?? ""}
              </Typography>
              <Link href={`blog/blog-detail/${x.id}`}>
                <Button
                  sx={{
                    mt: 4,
                    borderRadius: 0,
                    backgroundColor: "#AFB5B9",
                    color: "white",
                    // width: "100%",
                    ":hover": {
                      backgroundColor: "#89C1CB",
                    },
                  }}
                  variant="contained"
                  // onClick={}
                >
                  read more
                </Button>
              </Link>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}
export const getServerSideProps = async () => {
  const res = await supabase
    .from("blog")
    .select()
    .order("id", { ascending: false });

  console.log("res", res.data);
  const blogs = res.data;

  return { props: { blogs } };
};
