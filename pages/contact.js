import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Backdrop from "@mui/material/Backdrop";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { supabase } from "./api/supabase";
import * as Yup from "yup";

export default function Contact() {
  const [open, setOpen] = useState(true);
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();

  useEffect(() => {
    getAboutData();
    setTimeout(() => {
      setOpen(false);
    }, 500);
  }, []);

  const getAboutData = () => {
    supabase
      .from("authentication")
      .select()
      .eq("email", "drharis@test.com")
      .single()
      .then((response) => {
        console.log("response", response?.data);

        setPhone(response?.data?.sPhoneNo);
        setAddress(response?.data?.sAddress);
      });
  };
  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    phone: Yup.string().required("Phone Number is required"),
    enquiry: Yup.string().required("Enquiry is required"),
  });

  const { handleBlur, handleChange, values, handleSubmit, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      enquiry: "",
    },

    validationSchema: schema,
    validateOnBlur: false,
    validateOnChange: false,

    onSubmit: (values, { resetForm }) => {
      const data = {
        name: values.name,
        phone: values.phone,
        email: values.email,
        enquiry: values.enquiry,
      };
      fetch("/api/contactUs", {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((res) => console.log("res", res))
        .catch((err) => console.log("err", err));

      supabase
        .from("contact")
        .insert(data)
        .then((response) => {
          console.log("response", response);
        });
      resetForm({ name: "", email: "", phone: "", enquiry: "" });
    },
  });

  return (
    <Grid display={"flex"} direction={"column"} container>
      <Grid
        bgcolor={"#89C1CB"}
        height={250}
        mb={8}
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
        <Grid>
          <img
            width={"100%"}
            height={100}
            alt={"Image"}
            src={"/assets/icon/applogo.png"}
          ></img>
        </Grid>
      </Backdrop>
      <Grid>
        <Grid textAlign={"center"}>
          {/* <Typography
            variant="h6"
            gutterBottom
            fontSize={{ xs: "15px", sm: "18px", md: "18px", lg: "20px" }}
          >
            <b>Email:</b> info@ektorgrammatopoulos.com
          </Typography> */}
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
            <b>Phone:</b> {phone}
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            fontSize={{ xs: "15px", sm: "18px", md: "18px", lg: "20px" }}
          >
            <b>Address:</b> {address}
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
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
              name="name"
              variant="outlined"
              sx={{ width: "100%" }}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name}
              helperText={errors.name ?? ""}
            />
            <TextField
              id="outlined-basic"
              label="Email Address"
              name="email"
              variant="outlined"
              sx={{ width: "100%" }}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              helperText={errors.email ?? ""}
            />
            <TextField
              id="outlined-basic"
              label="Phone Number"
              name="phone"
              variant="outlined"
              sx={{ width: "100%" }}
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.phone}
              helperText={errors.phone ?? ""}
            />
            <TextField
              id="outlined-basic"
              label="Enquiry"
              name="enquiry"
              variant="outlined"
              sx={{ width: "100%" }}
              value={values.enquiry}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.enquiry}
              helperText={errors.enquiry ?? ""}
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
                type="submit"
              >
                Send Enquiry
              </Button>
            </Grid>
          </Grid>
        </form>
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
