import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Backdrop from "@mui/material/Backdrop";
import Link from "next/link";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { supabase } from "./api/supabase";
export default function Contact() {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [enquiry, setEnquiry] = useState();

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 500);
  }, []);

  const handleSubmit = () => {
    console.log("Submit");

    supabase
      .from("contact")
      .insert({ name: name, phone: phone, email: email, enquiry: enquiry })
      .then((response) => {
        console.log("response", "response");
      });
    setName("");
    setEmail("");
    setPhone("");
    setEnquiry("");
  };

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
                  ":hover": {
                    backgroundColor: "#89C1CB",
                  },
                }}
                variant="contained"
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
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            sx={{ width: "100%" }}
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            sx={{ width: "100%" }}
            value={phone}
            onChange={(e) => setPhone(e.currentTarget.value)}
          />
          <TextField
            id="outlined-basic"
            label="Enquiry"
            variant="outlined"
            sx={{ width: "100%" }}
            value={enquiry}
            onChange={(e) => setEnquiry(e.currentTarget.value)}
          />
          <Grid>
            <Button
              sx={{
                backgroundColor: "#AFB5B9",
                color: "white",
                width: "45%",
                ":hover": {
                  backgroundColor: "#89C1CB",
                },
              }}
              variant="contained"
              onClick={handleSubmit}
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
