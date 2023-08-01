/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Blog() {
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
          color={"#333333"}
          fontSize={{ xs: "30px", sm: "30px", md: "40px", lg: "40px" }}
        >
          Blog
        </Typography>
      </Grid>
      <Grid
        container
        display={"flex"}
        direction={"row"}
        px={{ xs: 2, sm: 5, md: 10, lg: 28 }}
      >
        <Grid item xs={12} sm={6} pb={4}>
          <img
            loading="lazy"
            src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2020/04/je.ol.jpg"
            alt="iamge"
            width={"100%"}
          ></img>
        </Grid>
        <Grid item xs={12} sm={6} px={4}>
          <Typography variant="h4" color={"#333333"} mt={8}>
            Upcomming lectures - details to follow soon
          </Typography>
          <Typography variant="h6" color={"#333333"} mt={10}>
            London Excellere 19-20 May Chicago&nbsp; 23-24 July 2019 British
            Orthodontic Society Conference&nbsp; September 2019 Amman 12-13
            September New York 14-15…
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
