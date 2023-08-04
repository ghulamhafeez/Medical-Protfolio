import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
export default function TreatmentOptions() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 500);
  }, []);
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
          fontSize={{
            xs: "30px",
            sm: "30px",
            md: "40px",
            lg: "40px",
          }}
        >
          Treatment Options
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
      <Typography
        variant="h6"
        textAlign={"center"}
        pb={6}
        fontSize={{ xs: "22px", sm: "20px", md: "23px", lg: "23px" }}
      >
        Please find below a range of orthodontic treatment options
      </Typography>
      <Grid
        container
        display={"flex"}
        flexWrap={"wrap"}
        direction={"row"}
        textAlign={"center"}
        mb={6}
        px={{ xs: 2, sm: 4, md: 12, lg: 32, xl: 42 }}
        spacing={4}
      >
        <Grid item xs={12} sm={6} md={6} lg={6}>
          {" "}
          <Grid display={"flex"} direction={"column"} gap={2}>
            <img
              loading="lazy"
              src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2018/12/incognito-1.jpg"
              alt="image"
              width={"100%"}
            ></img>
            <Link href="https://www.ektorgrammatopoulos.com/treatment/incognito-lingual-fixed-appliances/">
              Incognito™ Lingual fixed appliances
            </Link>
          </Grid>
          <Grid display={"flex"} direction={"column"} gap={2} pt={5}>
            {" "}
            <img
              loading="lazy"
              src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2018/12/metallic.jpg"
              alt="image"
            />
            <Link href="https://www.ektorgrammatopoulos.com/treatment/metallic-appliances-for-children/">
              Metallic appliances for children
            </Link>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Grid display={"flex"} direction={"column"} gap={2}>
            <img
              loading="lazy"
              src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2018/12/clarity-1.jpg"
              alt="image"
            />
            <Link href="https://www.ektorgrammatopoulos.com/treatment/damon-and-ceramic-3m-clarity-appliances/">
              Damon™ and Ceramic 3M Clarity™ appliances
            </Link>
          </Grid>
          <Grid display={"flex"} direction={"column"} pt={5} gap={2}>
            {" "}
            <img
              loading="lazy"
              src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2018/12/invisalign.jpg"
              alt="image"
            />
            <Link href="https://www.ektorgrammatopoulos.com/treatment/invisalign/">
              Invisalign™
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
