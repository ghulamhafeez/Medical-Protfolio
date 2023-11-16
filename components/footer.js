/* eslint-disable @next/next/no-img-element */
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState, useEffect } from "react";
import { supabase } from "../pages/api/supabase";

export const Footer = () => {
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  useEffect(() => {
    getAboutData();
  }, []);

  const getAboutData = () => {
    supabase
      .from("authentication")
      .select()
      .eq("email", "drharis@test.com")
      .single()
      .then((response) => {
        console.log("response", response?.data);

        setPhone(response?.data?.phoneNo);
        setAddress(response?.data?.address);
      });
  };
  return (
    <Grid textAlign={"center"} bgcolor={"#333333"}>
      <Grid container pt={3} flexWrap={"wrap"}>
        <Grid
          item
          xs={12}
          sm={4}
          px={{ xs: 5, sm: 0, md: 8, lg: 10, xl: 14 }}
          mb={2}
        >
          <img
            height={80}
            width={280}
            alt={"Image"}
            src={"/assets/icon/applogo.png"}
          ></img>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h4" gutterBottom color={"white"} pb={4}>
            VISIT US
          </Typography>
          <Typography variant="h6" gutterBottom color={"#C0BAB2"}>
            {phone}
          </Typography>
          <Typography variant="h6" gutterBottom color={"#C0BAB2"}>
            {address}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h4" gutterBottom color={"white"} pb={4}>
            FOLLOW US
          </Typography>

          <Link
            href={"https://www.facebook.com/profile.php?id=100072352893536"}
          >
            <FacebookOutlinedIcon
              sx={{
                fontSize: 45,
                color: "white",
                ":hover": {
                  color: "#89C1CB",
                },
              }}
            ></FacebookOutlinedIcon>
          </Link>
          <Link
            href={
              "https://www.instagram.com/emaddinn/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
            }
          >
            <InstagramIcon
              sx={{
                fontSize: 45,
                color: "white",
                ":hover": {
                  color: "#89C1CB",
                },
              }}
            ></InstagramIcon>
          </Link>
          <Link href={"https://twitter.com/"}>
            <TwitterIcon
              sx={{
                fontSize: 45,
                color: "white",
                ":hover": {
                  color: "#89C1CB",
                },
              }}
            ></TwitterIcon>
          </Link>
        </Grid>
      </Grid>
      <Typography
        pt={6}
        variant="overline"
        display="block"
        gutterBottom
        color={"#C0BAB2"}
      >
        © 2023 Frost Nichols Orthodontics | Online Advantage by RoosterGrin
        Media <br></br>
        Click here for Accessibility | Privacy Policy
      </Typography>
    </Grid>
  );
};
