import styles from "../../styles/Home.module.css";
import { Grid } from "@mui/material";
import { Crowding } from "../../constants/Constant";
import CasesGalleryTabs from "../../components/CasesGalleryTabs";
import Backdrop from "@mui/material/Backdrop";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { supabase } from "../api/supabase";
import { FIRST_PATH } from "../../constants/Constant";
/* eslint-disable @next/next/no-img-element */

export const getServerSideProps = async () => {
  const res = await supabase
    .from("cases_gallery")
    .select()
    .order("id", { ascending: false });

  const cases = res.data;

  return { props: { cases } };
};

export default function CasesGallery({ cases }) {
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
          Crowding
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
      <CasesGalleryTabs></CasesGalleryTabs>

      <Grid px={{ xs: 1, sm: 6, md: 14, lg: 20, xl: 26 }} mt={2}>
        {cases?.map((x) => {
          return (
            <Grid
              key={x}
              container
              spacing={{ xl: 24, lg: 20, md: 12, sm: 6, xs: 1 }}
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
          );
        })}
      </Grid>
    </Grid>
  );
}
