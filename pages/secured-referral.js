import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Backdrop from "@mui/material/Backdrop";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
export default function SecuredReferral() {
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
          fontSize={{ xs: "30px", sm: "30px", md: "40px", lg: "40px" }}
        >
          Secured Referral
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
        px={{ xs: 2, sm: 3, md: 8, lg: 20 }}
        mb={5}
      >
        <Typography
          variant="h4"
          color={"#333333"}
          fontSize={{ xs: "22px", sm: "22px", md: "22px", lg: "25px" }}
          textAlign={"left"}
        >
          Patient Details
        </Typography>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          sx={{ width: "100%" }}
        />
        <TextField
          id="outlined-basic"
          label="Surname"
          variant="outlined"
          sx={{ width: "100%" }}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          sx={{ width: "100%" }}
        />
        <TextField
          id="outlined-basic"
          label="Daytime Telephone Number"
          variant="outlined"
          sx={{ width: "100%" }}
        />
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          sx={{ width: "100%" }}
        />
        <TextField
          id="outlined-basic"
          label="Street Address"
          variant="outlined"
          sx={{ width: "100%" }}
        />
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          sx={{ width: "100%" }}
        />
        <TextField
          id="outlined-basic"
          label="State/Province/Region"
          variant="outlined"
          sx={{ width: "100%" }}
        />
        <TextField
          id="outlined-basic"
          label="Postal/Zip Code"
          variant="outlined"
          sx={{ width: "100%" }}
        />
        <TextField
          id="outlined-basic"
          label="Name of Parent or Guardian If under 16 years of age"
          variant="outlined"
          sx={{ width: "100%" }}
        />
        <TextField
          id="outlined-basic"
          label="Relationship to Patient If a parent of guardian"
          variant="outlined"
          sx={{ width: "100%" }}
        />
        <Typography
          variant="h3"
          color={"#333333"}
          fontSize={{ xs: "25px", sm: "25px", md: "25px", lg: "25px" }}
          textAlign={"left"}
        >
          Reffering Dentist`s Details
        </Typography>
        <TextField
          id="outlined-basic"
          label="Dentist`s Name"
          variant="outlined"
          sx={{ width: "100%" }}
        />
        <TextField
          id="outlined-basic"
          label="Dentist`s Telephone Number"
          variant="outlined"
          sx={{ width: "100%" }}
        />
        <TextField
          id="outlined-basic"
          label="Notes/Comments/Resons for Referal"
          variant="outlined"
          sx={{ width: "100%" }}
        />
        <Typography variant="body1" textAlign={"left"}>
          Upload Records
        </Typography>

        <input
          type="file"
          name="fld_3288429"
          value=""
          data-field="fld_3288429"
          id="fld_3288429_1"
          data-controlid="trupl64bfeadbe0d10"
          aria-labelledby="fld_3288429Label"
          aria-describedby="fld_3288429Caption"
        />
        <Typography variant="body2" color={"grey"} textAlign={"left"}>
          We only accept .pdf &amp; .doc files up to a size of 2mb. If you need
          to send us more, please contact us for an alternative method
        </Typography>
        <Button
          sx={{
            backgroundColor: "#AFB5B9",
            color: "white",
            width: "30px",
            mb: 4,
          }}
          className={styles.enqiry_btn}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}
