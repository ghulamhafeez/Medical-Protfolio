import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import { supabase } from "./api/supabase";
import CardHeader from "@mui/material/CardHeader";

import { FIRST_PATH } from "../constants/Constant";
/* eslint-disable @next/next/no-img-element */
export const getServerSideProps = async () => {
  const res = await supabase
    .from("transformation")
    .select()
    .order("id", { ascending: false });

  const transformationData = res.data;

  return { props: { transformationData } };
};
export default function Transformation({ transformationData }) {
  const [transformation, setTransformation] = useState(transformationData);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 500);
  }, []);

  return (
    <Grid px={{ xl: 30, lg: 20, md: 15, sm: 6 }}>
      {transformation?.map((x) => {
        return (
          <Grid key={x} display={"flex"} direction={"column"}>
            <CardHeader sx={{ ml: 2 }} title={x.title} />
            <Grid
              container
              spacing={{ xl: 24, lg: 20, md: 12, sm: 6, xs: 2 }}
              padding={2}
            >
              <Grid item xs={6} display={"flex"} direction={"column"}>
                <Typography variant="body1" ml={2}>
                  Before
                </Typography>

                <Grid mt={2}>
                  {x.beforeFile.map((x) => {
                    return (
                      <Grid key={x}>
                        <img
                          width={"100%"}
                          height={270}
                          object-fit="cover"
                          src={`${FIRST_PATH}${x}`}
                          multiple
                        ></img>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
              <Grid item xs={6} display={"flex"} direction={"column"}>
                <Typography variant="body1" ml={2}>
                  After
                </Typography>

                <Grid mt={2}>
                  {x.afterFile.map((x) => {
                    return (
                      <Grid key={x}>
                        <img
                          width={"100%"}
                          height={270}
                          object-fit="cover"
                          src={`${FIRST_PATH}${x}`}
                          multiple
                        ></img>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}
