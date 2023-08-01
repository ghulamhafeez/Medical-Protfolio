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
      <Grid display={"flex"} flexWrap={"wrap"}>
        <img
          loading="lazy"
          src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2018/12/dr-ektor-grammatopoulos-orthodontics-logo2.jpg"
          alt="dr ektor grammatopoulos orthodontics logo2"
          className={styles.img}
        ></img>

        <Grid display={"flex"} direction={"column"}>
          <Grid bgcolor={"#AFB5B9"}>
            <MenuIcon
              sx={{
                height: "47px",
                width: "47px",
                ml: 2,
              }}
              className={styles.menu}
              onClick={() => setOpen(true)}
            />
          </Grid>
          <Grid
            isplay={"flex"}
            justifyContent={"center"}
            ml={{ xs: 16, sm: 14, md: 40, lg: 70, xl: 78 }}
            // px={{ xs: 16, sm: 20, md: 20, lg: 28, xl: 20 }}
            // mr={-16}
            mt={4}
            mb={1}
          >
            <img
              loading="lazy"
              src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2019/01/dr-ektor.png"
              alt="dr ektor grammatopoulos orthodontics logo1"
              width={"60%"}
              // className={styles.img}
            ></img>
          </Grid>
        </Grid>
        <Grid
          display={"flex"}
          direction={"column"}
          mt={2}
          ml={{ xs: 12, sm: 1, md: 1, lg: 20, xl: 30 }}
          // px={{ xs: 16, sm: 20, md: 12, lg: 22, xl: 20 }}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Grid>
            <Button
              sx={{
                backgroundColor: "#AFB5B9",
                color: "white",
                width: "100%",
              }}
              variant="contained"
              className={styles.enqiry_btn}
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
                mt: 2,
              }}
              variant="contained"
              className={styles.enqiry_btn}
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
                ml: 2,
              }}
              className={styles.menu}
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
