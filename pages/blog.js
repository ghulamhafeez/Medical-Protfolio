import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Blog() {
  return (
    <Grid>
      <h1>Blog</h1>
      <Grid bgcolor={"#89C1CB"} height={500} mb={6}></Grid>

      <Grid
        bgcolor={"#89C1CB"}
        display={"flex"}
        direction={"row"}
        justifyContent={"space-around"}
        pt={1}
      >
        <Typography variant="h3" gutterBottom color={"#333333"} sx={{ mt: 1 }}>
          Get Your Frost Smile Today!
        </Typography>
        <Button
          sx={{
            backgroundColor: "#89C1CB",
            color: "#333333",
            borderColor: "black",
            height: "50px",
            mt: 1,
          }}
          variant="contained"
        >
          <b>SCHEDULE APPOINTMENT</b>
        </Button>
      </Grid>
    </Grid>
  );
}
