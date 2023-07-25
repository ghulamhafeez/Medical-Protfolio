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
        bgcolor={"#89C1CB"}
        display={"flex"}
        direction={"row"}
        justifyContent={"space-around"}
        pt={1}
      ></Grid>
    </Grid>
  );
}
