import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
export default function Transformation() {
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
          fontSize={{ xs: "35px", sm: "35px", md: "40px", lg: "40px" }}
        >
          Transformation
        </Typography>
      </Grid>
      <Grid
        display={"flex"}
        direction={"row"}
        gap={5}
        px={{ xs: 3, sm: 2, md: 2, lg: 20 }}
        pb={5}
        container
      >
        <Grid display={"flex"} direction={"column"}>
          <Typography variant="h4">Before</Typography>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            display={"flex"}
            direction={"row"}
            gap={2}
          >
            <Grid display={"flex"} direction={"column"} gap={2}>
              <img
                loading="lazy"
                src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2020/10/Frontal-1-1.jpg"
                width={"100%"}
              ></img>
              <img
                loading="lazy"
                src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2020/10/IMG_6365.jpg"
                width={"100%"}
              ></img>
            </Grid>
            <Grid display={"flex"} direction={"column"} gap={2}>
              <img
                loading="lazy"
                src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2020/10/Right-side-.jpg"
                width={"100%"}
              ></img>
              <img
                loading="lazy"
                src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2020/10/IMG_6369.jpg"
                width={"100%"}
              ></img>
              <img
                loading="lazy"
                src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2020/10/IMG_6371.jpg"
                width={"100%"}
              ></img>
            </Grid>
          </Grid>
        </Grid>
        <Grid display={"flex"} direction={"column"}>
          <Typography variant="h4">After</Typography>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            display={"flex"}
            direction={"row"}
            gap={2}
          >
            <Grid display={"flex"} direction={"column"} gap={2}>
              {" "}
              <img
                loading="lazy"
                src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2020/10/00148-copy.jpg"
                width={"100%"}
              />
              <img
                loading="lazy"
                src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2020/10/00141.jpg"
                width={"100%"}
              />
            </Grid>
            <Grid display={"flex"} direction={"column"} gap={2}>
              <img
                loading="lazy"
                src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2020/10/side-right.jpg"
                width={"100%"}
              ></img>
              <img
                loading="lazy"
                src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2020/10/fontal-newest.jpg"
                width={"100%"}
              ></img>
              <img
                loading="lazy"
                src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2020/10/Side-left-.jpg"
                width={"100%"}
              ></img>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
