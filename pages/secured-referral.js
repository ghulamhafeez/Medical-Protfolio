import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Backdrop from "@mui/material/Backdrop";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { supabase } from "./api/supabase";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SecuredReferral() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 500);
  }, []);

  const schema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    email: Yup.string().required("Email is required"),
    surName: Yup.string().required("Sur Name is required"),
    dayPhone: Yup.string().required("Day Phone is required"),

    dentistName: Yup.string().required("Dentist Name is required"),
    dentistPhone: Yup.string().required("Dentist Phone is required"),
    notes: Yup.string().required("Notes is required"),
  });

  const {
    handleBlur,
    handleChange,
    values,
    handleSubmit,
    setFieldValue,
    errors,
  } = useFormik({
    initialValues: {
      firstName: "",
      surName: "",
      email: "",
      dayPhone: "",
      address: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      guardianName: "",
      relationPatient: "",
      dentistName: "",
      dentistPhone: "",
      notes: "",
      recordsFile: "",
    },
    validationSchema: schema,
    validateOnChange: false,
    validateOnBlur: false,

    onSubmit: (values, { resetForm }) => {
      console.log("called");
      const data = {
        firstName: values.firstName,
        surName: values.surName,
        email: values.email,
        dayPhone: values.dayPhone,
        address: values.address,
        streetAddress: values.streetAddress,
        city: values.city,
        state: values.state,
        zipCode: values.zipCode,
        guardianName: values.guardianName,
        relationPatient: values.relationPatient,
        dentistName: values.dentistName,
        dentistPhone: values.dentistPhone,
        notes: values.notes,
        recordsFile: values.recordsFile,
      };

      fetch("/api/securedReferral", {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((res) => console.log("res", res))
        .catch((err) => console.log("err", err));
      supabase
        .from("secured_referral")
        .insert(data)
        .then((response) => {
          console.log("responseS", response);
        });
      resetForm({
        firstName: "",
        surName: "",
        email: "",
        dayPhone: "",
        address: "",
        streetAddress: "",
        city: "",
        state: "",
        zipCode: "",
        guardianName: "",
        relationPatient: "",
        dentistName: "",
        dentistPhone: "",
        notes: "",
        recordsFile: "",
      });
    },
  });

  const handleFile = (e) => {
    const filedata = e?.target?.files[0];

    supabase.storage
      .from("media")
      .upload(filedata?.name + Date.now(), filedata, {
        cacheControl: "3600",
        upsert: false,
      })
      .then((res) => {
        console.log("res", res?.data?.path);

        setFieldValue("recordsFile", res?.data?.path);
      })
      .catch((err) => console.log(err));
  };

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
        <Grid>
          <img
            width={"100%"}
            height={100}
            alt={"Image"}
            src={"/assets/icon/applogo.png"}
          ></img>
        </Grid>
      </Backdrop>
      <form onSubmit={handleSubmit}>
        <Grid
          display={"flex"}
          direction={"column"}
          textAlign={"center"}
          gap={3}
          mt={10}
          item
          xs={12}
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
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.firstName}
            helperText={errors.firstName ?? ""}
          />

          <TextField
            id="outlined-basic"
            label="Sur Name"
            variant="outlined"
            sx={{ width: "100%" }}
            name="surName"
            value={values.surName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.surName}
            helperText={errors.surName ?? ""}
          />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ width: "100%" }}
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            helperText={errors.email ?? ""}
          />

          <TextField
            id="outlined-basic"
            label="Daytime Telephone Number"
            variant="outlined"
            sx={{ width: "100%" }}
            name="dayPhone"
            value={values.dayPhone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.dayPhone}
            helperText={errors.dayPhone ?? ""}
          />

          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            sx={{ width: "100%" }}
            name="address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <TextField
            id="outlined-basic"
            label="Street Address"
            variant="outlined"
            sx={{ width: "100%" }}
            name="streetAddress"
            value={values.streetAddress}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            sx={{ width: "100%" }}
            name="city"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <TextField
            id="outlined-basic"
            label="State/Province/Region"
            variant="outlined"
            sx={{ width: "100%" }}
            name="state"
            value={values.state}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <TextField
            id="outlined-basic"
            label="Postal/Zip Code"
            variant="outlined"
            sx={{ width: "100%" }}
            name="zipCode"
            value={values.zipCode}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <TextField
            id="outlined-basic"
            label="Name of Parent or Guardian If under 16 years of age"
            variant="outlined"
            sx={{ width: "100%" }}
            name="guardianName"
            value={values.guardianName}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <TextField
            id="outlined-basic"
            label="Relationship to Patient If a parent of guardian"
            variant="outlined"
            sx={{ width: "100%" }}
            name="relationPatient"
            value={values.relationPatient}
            onChange={handleChange}
            onBlur={handleBlur}
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
            name="dentistName"
            value={values.dentistName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.dentistName}
            helperText={errors.dentistName ?? ""}
          />

          <TextField
            id="outlined-basic"
            label="Dentist`s Telephone Number"
            variant="outlined"
            sx={{ width: "100%" }}
            name="dentistPhone"
            value={values.dentistPhone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.dentistPhone}
            helperText={errors.dentistPhone ?? ""}
          />

          <TextField
            id="outlined-basic"
            label="Notes/Comments/Resons for Referal"
            variant="outlined"
            sx={{ width: "100%" }}
            name="notes"
            value={values.notes}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.notes}
            helperText={errors.notes ?? ""}
          />

          <Typography variant="body1" textAlign={"left"}>
            Upload Records
          </Typography>
          <input
            type="file"
            name="recordsFile"
            value={""}
            onChange={(e) => handleFile(e)}
          />

          <Typography variant="body2" color={"grey"} textAlign={"left"}>
            We only accept .pdf &amp; .doc files up to a size of 2mb. If you
            need to send us more, please contact us for an alternative method
          </Typography>
          <Button
            sx={{
              backgroundColor: "#AFB5B9",
              color: "white",
              width: "45px",
              mb: 4,
              ":hover": {
                backgroundColor: "#89C1CB",
              },
            }}
            type="submit"
          >
            Submit
          </Button>
        </Grid>
      </form>
    </Grid>
  );
}
