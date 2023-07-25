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
    </Grid>
  );
}
