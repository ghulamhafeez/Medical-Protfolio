import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import Button from "@mui/material/Button";
export default function Contact() {
  return (
    <Grid display={"flex"} direction={"column"} container>
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
          fontSize={{ xs: "40px", sm: "40px", md: "40px", lg: "40px" }}
        >
          Contact
        </Typography>
      </Grid>
      <Grid>
        <Grid textAlign={"center"}>
          <Grid px={{ xs: 5, sm: 28, md: 45, lg: 65 }}>
            <Link href="/secure-referral">
              <Button
                sx={{
                  backgroundColor: "#AFB5B9",
                  color: "white",
                  width: "100%",
                  mb: 4,
                }}
                variant="contained"
                className={styles.enqiry_btn}
              >
                Secure professional Referral
              </Button>
            </Link>
          </Grid>
          <Typography
            variant="h6"
            gutterBottom
            fontSize={{
              xs: "15px",
              sm: "18px",
              md: "18px",
              lg: "20px",
              xl: "20px",
            }}
          >
            <b>Telephone:</b> 020 7935 0357
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            fontSize={{ xs: "15px", sm: "18px", md: "18px", lg: "20px" }}
          >
            <b>Email:</b> info@ektorgrammatopoulos.com
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            fontSize={{ xs: "15px", sm: "18px", md: "18px", lg: "20px" }}
          >
            Dr Ektor Grammatopoulos <br></br> Lister House
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            fontSize={{ xs: "15px", sm: "18px", md: "18px", lg: "20px" }}
          >
            11-12 Wimpole <br></br>Street London <br></br> W1G 9ST
          </Typography>
        </Grid>
        <Grid
          display={"flex"}
          direction={"column"}
          textAlign={"center"}
          gap={3}
          mt={10}
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          px={{ xs: 3, sm: 25, md: 36, lg: 56, xl: 60 }}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            sx={{ width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            sx={{ width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            sx={{ width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="Enquiry"
            variant="outlined"
            sx={{ width: "100%" }}
          />
          <Grid>
            <Button
              sx={{
                backgroundColor: "#AFB5B9",
                color: "white",
                width: "45%",
              }}
              variant="contained"
              className={styles.enqiry_btn}
            >
              Send Enquiry
            </Button>
          </Grid>
        </Grid>
        <Grid>
          <Grid mb={6} mt={6}>
            <iframe
              width="100%"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=nishtar Clinic&t=&z=10&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
