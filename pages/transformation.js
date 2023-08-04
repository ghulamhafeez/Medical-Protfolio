import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
/* eslint-disable @next/next/no-img-element */
export default function Transformation() {
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
          fontSize={{ xs: "35px", sm: "35px", md: "40px", lg: "40px" }}
        >
          Transformation
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
        direction={"row"}
        spacing={4}
        px={{ xs: 3, sm: 3, md: 5, lg: 22, xl: 32 }}
        pb={5}
        container
      >
        <Grid item xs={12} sm={6} display={"flex"} direction={"column"}>
          <Typography variant="h4">Before</Typography>
          <Grid item display={"flex"} direction={"row"} gap={2}>
            <Grid
              item
              xs={12}
              sm={6}
              display={"flex"}
              direction={"column"}
              gap={2}
            >
              <img
                loading="lazy"
                src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2020/10/Frontal-1-1.jpg"
                width={"100%"}
                alt="iamge"
              ></img>
              <img
                loading="lazy"
                src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2020/10/IMG_6365.jpg"
                width={"100%"}
                alt="iamge"
              ></img>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              display={"flex"}
              direction={"column"}
              gap={2}
            >
              <img
                loading="lazy"
                src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2020/10/Right-side-.jpg"
                width={"100%"}
                alt="iamge"
              ></img>
              <img
                loading="lazy"
                src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2020/10/IMG_6369.jpg"
                width={"100%"}
                alt="iamge"
              ></img>
              <img
                loading="lazy"
                src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2020/10/IMG_6371.jpg"
                width={"100%"}
                alt="iamge"
              ></img>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} display={"flex"} direction={"column"}>
          <Typography variant="h4">After</Typography>
          <Grid item display={"flex"} direction={"row"} gap={2}>
            <Grid
              item
              xs={12}
              sm={6}
              display={"flex"}
              direction={"column"}
              gap={2}
            >
              {" "}
              <img
                loading="lazy"
                src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2020/10/00148-copy.jpg"
                width={"100%"}
                alt="iamge"
              />
              <img
                loading="lazy"
                src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2020/10/00141.jpg"
                width={"100%"}
                alt="iamge"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              display={"flex"}
              direction={"column"}
              gap={2}
            >
              <img
                loading="lazy"
                src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2020/10/side-right.jpg"
                width={"100%"}
                height={"32%"}
                alt="iamge"
              ></img>
              <img
                loading="lazy"
                src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2020/10/fontal-newest.jpg"
                width={"100%"}
                height={"32%"}
                alt="iamge"
              ></img>
              <img
                loading="lazy"
                src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2020/10/Side-left-.jpg"
                width={"100%"}
                height={"32%"}
                alt="iamge"
              ></img>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        display={"flex"}
        justifyContent={"center"}
        px={{ xs: 2, sm: 4, md: 12, lg: 36 }}
        pb={6}
        pt={2}
      >
        <Typography variant="body1">
          Patient presented with a small upper jaw and a protrusive lower jaw.
          She had asymmetry in the upper and lower jaws with the right side of
          her face being longer than the left side of the face. This was
          displacing the mid-point of the chin to the left hand-side as well as
          causing all the left teeth to be higher on the left side than the
          right side. The upper left canine had become impacted to the palate
          and this was surgically removed a few years before the initial
          presentation of the patient to our clinic. As a consequence, all the
          the roots of the upper front teeth resulting in the roots of the upper
          front teeth being short and weak.The orthodontic treatment duration
          was less than 18 months and it entailed upper and lower fixed
          appliances. The upper centerline was corrected through gaining space
          from the loss of the upper right second premolar. The upper and lower
          teeth were prepared for double-jaw(orthognathic) surgery with a view
          to correcting the facial asymmetry, giving our patient the ideal
          dimension if upper and lower jaws, and improving her bite. The upper
          left front teeth were built up to the ideal dimensions with composite
          completed and after a brief course of tooth-whitening. The upper left
          premolar was build-up with composite resin to resemble the appearance
          of the upper left canine. All the orthodontic treatment was done
          carefully with bearing in mind that the roots of upper front teeth did
          not weaken any further.Acknowledgements:&nbsp;The orthognathic surgery
          was done by&nbsp;Mr Manolis Heliotis, Consultant Oral and
          Maxillofacial Surgeon,&nbsp;152 Harley street, London, W1G 7LH.
        </Typography>
      </Grid>
      <Typography variant="h4" textAlign={"center"} color={"grey"} pb={4}>
        Transformations
      </Typography>
    </Grid>
  );
}
