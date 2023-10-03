/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import { TabsData } from "../constants/Constant";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Grid
      display={"flex"}
      direction={"column"}
      flexWrap={"wrap"}
      bgcolor={"#FAFAFA"}
    >
      <Grid
        display={"flex"}
        flexWrap={"wrap"}
        container
        justifyContent={"space-between"}
        mb={2}
      >
        <Grid display={"flex"} direction={"column"} item xs={12} sm={5} md={4}>
          <Grid bgcolor={"#AFB5B9"} display={{ xs: "block", sm: "none" }}>
            <MenuIcon
              sx={{
                height: "47px",
                width: "47px",
                ml: 2,
                color: "white",
              }}
              onClick={() => setOpen(true)}
            />
          </Grid>
          <Grid
            display={"flex"}
            justifyContent={"center"}
            px={{ xs: 4, sm: 0, md: 2, lg: 12, xl: 16 }}
            mt={4}
          >
            <img
              height={80}
              width={280}
              alt={"Image"}
              src={"/assets/icon/applogo.png"}
            ></img>
          </Grid>
        </Grid>
        <Grid xs={12} sm={2} md={4}></Grid>
        <Grid
          display={"flex"}
          direction={"column"}
          mt={3}
          xs={12}
          sm={5}
          md={4}
          item
          px={{ xs: 8, sm: 2, md: 6, lg: 12, xl: 16 }}
          textAlign={"center"}
        >
          <Grid>
            <Button
              sx={{
                backgroundColor: "#AFB5B9",
                color: "white",
                width: "100%",
                ":hover": {
                  backgroundColor: "#89C1CB",
                },
              }}
              variant="contained"
            >
              Schedule Appointment
            </Button>
          </Grid>
          <Grid>
            <Button
              sx={{
                backgroundColor: "#AFB5B9",
                color: "white",
                width: "100%",
                ":hover": {
                  backgroundColor: "#89C1CB",
                },
                mt: 2,
              }}
              variant="contained"
            >
              Online consultation
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Drawer open={open} anchor={"top"} onClose={() => setOpen(false)}>
          <Box
            sx={{ width: "100%", backgroundColor: "#AFB5B9" }}
            onClick={() => setOpen(false)}
          >
            <MenuIcon
              color="white"
              sx={{
                height: "45px",
                width: "45px",
                color: "white",
                ml: 2,
              }}
              onClick={() => setOpen(true)}
            />
            {TabsData?.map((x) => {
              return (
                <Link href={x.path} key={x}>
                  <Typography
                    variant="h6"
                    color={"white"}
                    gutterBottom
                    textAlign={"center"}
                  >
                    <hr></hr>
                    {x.name}
                  </Typography>
                </Link>
              );
            })}
          </Box>
        </Drawer>
      </Grid>
    </Grid>
  );
}
