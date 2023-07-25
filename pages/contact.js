import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export default function Contact() {
  return (
    <Grid display={"flex"} direction={"column"}>
      <Grid
        bgcolor={"#89C1CB"}
        height={250}
        mb={6}
        textAlign={"center"}
        pt={12}
      >
        <Typography variant="h3" color={"#333333"}>
          Contact
        </Typography>
      </Grid>

      <Grid textAlign={"center"}>
        <Typography variant="h6" gutterBottom>
          <b>Telephone:</b> 020 7935 0357
        </Typography>
        <Typography variant="h6" gutterBottom>
          <b>Email:</b> info@ektorgrammatopoulos.com
        </Typography>
        <Typography variant="h6" gutterBottom>
          Dr Ektor Grammatopoulos <br></br> Lister House
        </Typography>
        <Typography variant="h6" gutterBottom>
          11-12 Wimpole <br></br>Street London <br></br> W1G 9ST
        </Typography>
      </Grid>
      <Grid
        display={"flex"}
        direction={"column"}
        textAlign={"center"}
        gap={3}
        ml={70}
        mt={10}
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          sx={{ width: "40%" }}
        />
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          sx={{ width: "40%" }}
        />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          sx={{ width: "40%" }}
        />
        <TextField
          id="outlined-basic"
          label="Enquiry"
          variant="outlined"
          sx={{ width: "40%" }}
        />
        <Button
          sx={{
            backgroundColor: "grey",
            color: "white",
            width: "15%",
          }}
          variant="contained"
          className={styles.enqiry_btn}
        >
          <b>Send Enquiry</b>
        </Button>
      </Grid>
      <Grid>
        <h1>Google Map</h1>
      </Grid>
    </Grid>
  );
}
