import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
export default function PatientStories() {
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
          Patient Stories
        </Typography>
      </Grid>

      <img
        loading="lazy"
        src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2019/01/Kid-1.jpg"
        alt=""
      ></img>

      <img
        loading="lazy"
        src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2019/02/Lady-1.jpg"
        alt=""
      />

      <img
        loading="lazy"
        src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2019/02/sm-2000019.jpg"
        alt=""
      />

      <img
        loading="lazy"
        src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2020/04/iudnrvtw.jpeg"
        alt=""
      />
    </Grid>
  );
}
