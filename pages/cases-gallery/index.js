import styles from "../../styles/Home.module.css";
import { Grid } from "@mui/material";
import { Crowding } from "../../constants/Constant";
import CasesGalleryTabs from "../../components/CasesGalleryTabs";
import Typography from "@mui/material/Typography";
/* eslint-disable @next/next/no-img-element */
export default function CasesGallery() {
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

      <CasesGalleryTabs></CasesGalleryTabs>

      <Grid>
        {Crowding.map((x) => {
          return (
            <Grid
              key={x}
              display={"flex"}
              direction={"column"}
              mb={4}
              mt={5}
              px={{ xs: 2, sm: 6, md: 8, lg: 36, xl: 48 }}
            >
              <Typography variant="h6">{x.title}</Typography>
              <Grid container key={x} spacing={4}>
                <Grid item xs={6} sm={4} md={4} lg={4}>
                  <img loading="lazy" alt="iamge" src={x.src1} width={"100%"} />
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4}>
                  <img loading="lazy" alt="iamge" src={x.src2} width={"100%"} />
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4}>
                  <img loading="lazy" alt="iamge" src={x.src3} width={"100%"} />
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
