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
export default function CasesGallery() {
  const [open, setOpen] = useState(true);
  const [casesGallery, setCasesGallery] = useState();

  useEffect(() => {
    getCasesGallery();
    setTimeout(() => {
      setOpen(false);
    }, 500);
  }, []);

  const getCasesGallery = () => {
    supabase
      .from("cases_gallery")
      .select()
      .order("id", { ascending: false })
      .then((response) => {
        console.log("data", response.data);
        setCasesGallery(response?.data);
      });
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
        <Typography
          variant="h1"
          color={"white"}
          fontSize={{ xs: "40px", sm: "40px", md: "50px", lg: "50px" }}
        >
          Dr Haris
        </Typography>
      </Backdrop>
      <CasesGalleryTabs></CasesGalleryTabs>

      <Grid>
        {casesGallery?.map((x) => {
          return (
            <Grid
              key={x}
              display={"flex"}
              direction={"column"}
              mb={4}
              mt={5}
              px={{ xs: 2, sm: 6, md: 8, lg: 36, xl: 42 }}
            >
              <Grid mt={2} direction={"column"} container>
                <Typography variant="h6">Before</Typography>
                <Grid display={"flex"} xs={4} gap={3}>
                  {x.beforeFile.map((x) => {
                    return (
                      <img
                        key={x}
                        loading="lazy"
                        alt="iamge"
                        src={`${FIRST_PATH}${x}`}
                        width={320}
                      />
                    );
                  })}
                </Grid>
              </Grid>
              <Grid mt={2} container direction={"column"}>
                <Typography variant="h6">After</Typography>
                <Grid xs={4} display={"flex"} gap={3}>
                  {x.afterFile.map((x) => {
                    return (
                      <img
                        key={x}
                        loading="lazy"
                        alt="iamge"
                        src={`${FIRST_PATH}${x}`}
                        width={320}
                        height={220}
                      />
                    );
                  })}
                </Grid>
              </Grid>

              {/* <Grid container key={x} spacing={4}>
                <Grid item xs={6} sm={4} md={4} lg={4}>
                  <img loading="lazy" alt="iamge" src={""} width={"100%"} />
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4}>
                  <img loading="lazy" alt="iamge" src={x.src3} width={"100%"} />
                </Grid>
              </Grid> */}
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
