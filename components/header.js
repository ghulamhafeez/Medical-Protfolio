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
        <Grid
          display={{ xs: "none", sm: "block" }}
          mt={2}
          // text-align={{ xs: "left" }}
          item
          xs={12}
          sm={4}
          px={{ xs: 8, sm: 10, md: 15, lg: 22, xl: 26 }}
        >
          <img
            loading="lazy"
            src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2018/12/dr-ektor-grammatopoulos-orthodontics-logo2.jpg"
            alt="dr ektor grammatopoulos orthodontics logo2"
            width={"100%"}
            height={100}
          ></img>
        </Grid>

        <Grid display={"flex"} direction={"column"} item xs={12} sm={4}>
          <Grid bgcolor={"#AFB5B9"} display={{ xs: "block", sm: "none" }}>
            <MenuIcon
              // display={{ xs: "none", sm: "none" }}
              sx={{
                height: "47px",
                width: "47px",
                ml: 2,
                color: "white",
              }}
              // className={styles.menu}
              onClick={() => setOpen(true)}
            />
          </Grid>
          <Grid
            display={"flex"}
            justifyContent={"center"}
            // ml={{ xs: 16, sm: 14, md: 40, lg: 70, xl: 78 }}
            px={{ xs: 8, sm: 2, md: 6, lg: 12, xl: 16 }}
            // mr={-16}
            mt={3}
            // mb={1}
            // px={10}
          >
            <img
              loading="lazy"
              src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2019/01/dr-ektor.png"
              alt="dr ektor grammatopoulos orthodontics logo1"
              width={"100%"}

              // className={styles.img}
            ></img>
          </Grid>
        </Grid>

        <Grid
          // px={10}
          display={"flex"}
          direction={"column"}
          mt={3}
          xs={12}
          sm={4}
          item
          // ml={{ xs: 12, sm: 1, md: 1, lg: 20, xl: 30 }}
          px={{ xs: 8, sm: 2, md: 6, lg: 12, xl: 16 }}
          // justifyContent={"center"}
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
              // className={styles.menu}
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
