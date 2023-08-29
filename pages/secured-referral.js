import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Backdrop from "@mui/material/Backdrop";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { supabase } from "./api/supabase";

export default function SecuredReferral() {
  const [open, setOpen] = useState(true);

  const [securedData, setSecuredData] = useState({
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

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 500);
  }, []);

  const handleSubmit = () => {
    const data = {
      firstName: securedData?.firstName,
      surName: securedData?.surName,
      email: securedData?.email,
      dayPhone: securedData?.dayPhone,
      address: securedData?.address,
      streetAddress: securedData?.streetAddress,
      city: securedData?.city,
      state: securedData?.state,
      zipCode: securedData?.zipCode,
      guardianName: securedData?.guardianName,
      relationPatient: securedData?.relationPatient,
      dentistName: securedData?.dentistName,
      dentistPhone: securedData?.dentistPhone,
      notes: securedData?.notes,
      recordsFile: securedData?.recordsFile,
    };

    supabase
      .from("secured_referral")
      .insert(data)
      .then((response) => {
        console.log("responseS", response);
      });
  };
  const handleFile = (e) => {
    console.log("res123", e?.target?.files[0]);
    const filedata = e?.target?.files[0];

    supabase.storage
      .from("media")
      .upload(filedata?.name + Date.now(), filedata, {
        cacheControl: "3600",
        upsert: false,
      })
      .then((res) => {
        console.log("res", res?.data?.path);
        setSecuredData({ ...securedData, recordsFile: res?.data?.path });
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
          value={securedData?.firstName}
          onChange={(e) =>
            setSecuredData({ ...securedData, firstName: e.target.value })
          }
        />
        <TextField
          id="outlined-basic"
          label="Sur Name"
          variant="outlined"
          sx={{ width: "100%" }}
          value={securedData?.surName}
          onChange={(e) =>
            setSecuredData({ ...securedData, surName: e.target.value })
          }
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          sx={{ width: "100%" }}
          value={securedData?.email}
          onChange={(e) =>
            setSecuredData({ ...securedData, email: e.target.value })
          }
        />
        <TextField
          id="outlined-basic"
          label="Daytime Telephone Number"
          variant="outlined"
          sx={{ width: "100%" }}
          value={securedData?.dayPhone}
          onChange={(e) =>
            setSecuredData({ ...securedData, dayPhone: e.target.value })
          }
        />
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          sx={{ width: "100%" }}
          value={securedData?.address}
          onChange={(e) =>
            setSecuredData({ ...securedData, address: e.target.value })
          }
        />
        <TextField
          id="outlined-basic"
          label="Street Address"
          variant="outlined"
          sx={{ width: "100%" }}
          value={securedData?.streetAddress}
          onChange={(e) =>
            setSecuredData({ ...securedData, streetAddress: e.target.value })
          }
        />
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          sx={{ width: "100%" }}
          value={securedData?.city}
          onChange={(e) =>
            setSecuredData({ ...securedData, city: e.target.value })
          }
        />
        <TextField
          id="outlined-basic"
          label="State/Province/Region"
          variant="outlined"
          sx={{ width: "100%" }}
          value={securedData?.state}
          onChange={(e) =>
            setSecuredData({ ...securedData, state: e.target.value })
          }
        />
        <TextField
          id="outlined-basic"
          label="Postal/Zip Code"
          variant="outlined"
          sx={{ width: "100%" }}
          value={securedData?.zipCode}
          onChange={(e) =>
            setSecuredData({ ...securedData, zipCode: e.target.value })
          }
        />
        <TextField
          id="outlined-basic"
          label="Name of Parent or Guardian If under 16 years of age"
          variant="outlined"
          sx={{ width: "100%" }}
          value={securedData?.guardianName}
          onChange={(e) =>
            setSecuredData({ ...securedData, guardianName: e.target.value })
          }
        />
        <TextField
          id="outlined-basic"
          label="Relationship to Patient If a parent of guardian"
          variant="outlined"
          sx={{ width: "100%" }}
          value={securedData?.relationPatient}
          onChange={(e) =>
            setSecuredData({ ...securedData, relationPatient: e.target.value })
          }
        />
        <Typography
          variant="h3"
          color={"#333333"}
          fontSize={{ xs: "25px", sm: "25px", md: "25px", lg: "25px" }}
          textAlign={"left"}
          value={securedData?.guardianName}
          onChange={(e) =>
            setSecuredData({ ...securedData, guardianName: e.target.value })
          }
        >
          Reffering Dentist`s Details
        </Typography>
        <TextField
          id="outlined-basic"
          label="Dentist`s Name"
          variant="outlined"
          sx={{ width: "100%" }}
          value={securedData?.dentistName}
          onChange={(e) =>
            setSecuredData({ ...securedData, dentistName: e.target.value })
          }
        />
        <TextField
          id="outlined-basic"
          label="Dentist`s Telephone Number"
          variant="outlined"
          sx={{ width: "100%" }}
          value={securedData?.dentistPhone}
          onChange={(e) =>
            setSecuredData({ ...securedData, dentistPhone: e.target.value })
          }
        />
        <TextField
          id="outlined-basic"
          label="Notes/Comments/Resons for Referal"
          variant="outlined"
          sx={{ width: "100%" }}
          value={securedData?.notes}
          onChange={(e) =>
            setSecuredData({ ...securedData, notes: e.target.value })
          }
        />
        <Typography variant="body1" textAlign={"left"}>
          Upload Records
        </Typography>
        <input type="file" value={""} onChange={(e) => handleFile(e)} />

        <Typography variant="body2" color={"grey"} textAlign={"left"}>
          We only accept .pdf &amp; .doc files up to a size of 2mb. If you need
          to send us more, please contact us for an alternative method
        </Typography>
        <Button
          onClick={() => handleSubmit()}
          sx={{
            backgroundColor: "#AFB5B9",
            color: "white",
            width: "45px",
            mb: 4,
            ":hover": {
              backgroundColor: "#89C1CB",
            },
          }}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}
