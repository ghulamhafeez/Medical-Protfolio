import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function TreatmentOptionDetail() {
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
          TreatmentOptionDetail
        </Typography>
      </Grid>
    </Grid>
  );
}
