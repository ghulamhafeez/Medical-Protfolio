import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { supabase } from "../../api/supabase";
import { Field } from "../../../components/Field";
import { FIRST_PATH } from "../../../constants/Constant";
export default function TreatmentOptionDetail() {
  const [treatmentOption, setTreatmentOption] = React.useState();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      getTreatmentOption();
    }
    // setTimeout(() => {
    //   setOpen(false);
    // }, 500);
  }, [id]);

  const getTreatmentOption = () => {
    supabase
      .from("treatment_option")
      .select()
      .eq("id", id)
      .single()
      .then((response) => {
        console.log("data", response?.data);
        setTreatmentOption(response?.data);
      });
  };
  return (
    <Grid>
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
            {treatmentOption?.title}
          </Typography>
        </Grid>

        <Grid px={{ xs: 2, sm: 5, md: 10, lg: 28, xl: 42 }}>
          <Typography variant="h5">{treatmentOption?.title}</Typography>
          {treatmentOption?.items.map((x) => {
            return (
              <Grid
                key={x}
                container
                display={"flex"}
                direction={"row"}
                mb={2}
                mt={2}
              >
                <Field type={x?.type} value={x?.value} width={400} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
