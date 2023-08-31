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

  // const [securedData, setSecuredData] = useState({
  //   firstName: "",
  //   surName: "",
  //   email: "",
  //   dayPhone: "",
  //   address: "",
  //   streetAddress: "",
  //   city: "",
  //   state: "",
  //   zipCode: "",
  //   guardianName: "",
  //   relationPatient: "",
  //   dentistName: "",
  //   dentistPhone: "",
  //   notes: "",
  //   recordsFile: "",
  // });

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 500);
  }, []);

  const schema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    email: Yup.string().required("Email is required"),
    surName: Yup.string().required("Sur Name Number is required"),
    dayPhone: Yup.string().required("Day Phone is required"),
    address: Yup.string().required("Address is required"),
    streetAddress: Yup.string().required("Street Address is required"),
    city: Yup.string().required("city is required"),
    state: Yup.string().required("state is required"),
    zipCode: Yup.string().required("zip Code is required"),
    guardianName: Yup.string().required("Guardian Name is required"),
    relationPatient: Yup.string().required("Relation Patient is required"),
    dentistName: Yup.string().required("Dentist Name is required"),
    dentistPhone: Yup.string().required("Dentist Phone is required"),
    notes: Yup.string().required("Notes is required"),
    recordsFile: Yup.string().required("Records File is required"),
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

  // const handleSubmit = () => {
  //   const data = {
  //     firstName: securedData?.firstName,
  //     surName: securedData?.surName,
  //     email: securedData?.email,
  //     dayPhone: securedData?.dayPhone,
  //     address: securedData?.address,
  //     streetAddress: securedData?.streetAddress,
  //     city: securedData?.city,
  //     state: securedData?.state,
  //     zipCode: securedData?.zipCode,
  //     guardianName: securedData?.guardianName,
  //     relationPatient: securedData?.relationPatient,
  //     dentistName: securedData?.dentistName,
  //     dentistPhone: securedData?.dentistPhone,
  //     notes: securedData?.notes,
  //     recordsFile: securedData?.recordsFile,
  //   };
  //   fetch("/api/securedReferral", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => console.log("res", res))
  //     .catch((err) => console.log("err", err));
  //   supabase
  //     .from("secured_referral")
  //     .insert(data)
  //     .then((response) => {
  //       console.log("responseS", response);
  //     });
  // };
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
        <Typography
          variant="h1"
          color={"white"}
          fontSize={{ xs: "40px", sm: "40px", md: "50px", lg: "50px" }}
        >
          Dr Haris
        </Typography>
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
          />
          {errors.firstName ? (
            <Typography sx={{ color: "red" }}>{errors.firstName}</Typography>
          ) : null}
          <TextField
            id="outlined-basic"
            label="Sur Name"
            variant="outlined"
            sx={{ width: "100%" }}
            name="surName"
            value={values.surName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.surName ? (
            <Typography sx={{ color: "red" }}>{errors.surName}</Typography>
          ) : null}
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ width: "100%" }}
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email ? (
            <Typography sx={{ color: "red" }}>{errors.email}</Typography>
          ) : null}
          <TextField
            id="outlined-basic"
            label="Daytime Telephone Number"
            variant="outlined"
            sx={{ width: "100%" }}
            name="dayPhone"
            value={values.dayPhone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.dayPhone ? (
            <Typography sx={{ color: "red" }}>{errors.dayPhone}</Typography>
          ) : null}
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
          {errors.address ? (
            <Typography sx={{ color: "red" }}>{errors.address}</Typography>
          ) : null}
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
          {errors.streetAddress ? (
            <Typography sx={{ color: "red" }}>
              {errors.streetAddress}
            </Typography>
          ) : null}
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
          {errors.city ? (
            <Typography sx={{ color: "red" }}>{errors.city}</Typography>
          ) : null}
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
          {errors.state ? (
            <Typography sx={{ color: "red" }}>{errors.state}</Typography>
          ) : null}
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
          {errors.zipCode ? (
            <Typography sx={{ color: "red" }}>{errors.zipCode}</Typography>
          ) : null}
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
          {errors.guardianName ? (
            <Typography sx={{ color: "red" }}>{errors.guardianName}</Typography>
          ) : null}
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
          {errors.relationPatient ? (
            <Typography sx={{ color: "red" }}>
              {errors.relationPatient}
            </Typography>
          ) : null}
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
          />
          {errors.dentistName ? (
            <Typography sx={{ color: "red" }}>{errors.dentistName}</Typography>
          ) : null}
          <TextField
            id="outlined-basic"
            label="Dentist`s Telephone Number"
            variant="outlined"
            sx={{ width: "100%" }}
            name="dentistPhone"
            value={values.dentistPhone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.dentistPhone ? (
            <Typography sx={{ color: "red" }}>{errors.dentistPhone}</Typography>
          ) : null}
          <TextField
            id="outlined-basic"
            label="Notes/Comments/Resons for Referal"
            variant="outlined"
            sx={{ width: "100%" }}
            name="notes"
            value={values.notes}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.notes ? (
            <Typography sx={{ color: "red" }}>{errors.notes}</Typography>
          ) : null}
          <Typography variant="body1" textAlign={"left"}>
            Upload Records
          </Typography>
          <input
            type="file"
            name="recordsFile"
            value={""}
            onChange={(e) => handleFile(e)}
          />
          {errors.recordsFile ? (
            <Typography sx={{ color: "red" }}>{errors.recordsFile}</Typography>
          ) : null}

          <Typography variant="body2" color={"grey"} textAlign={"left"}>
            We only accept .pdf &amp; .doc files up to a size of 2mb. If you
            need to send us more, please contact us for an alternative method
          </Typography>
          <Button
            // onClick={() => handleSubmit()}
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
