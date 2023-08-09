import styles from "../styles/Home.module.css";
import { Button, Grid } from "@mui/material";
import Link from "next/link";
import { CasesGalleryData } from "../constants/Constant";
import Typography from "@mui/material/Typography";
export default function CasesGalleryTabs() {
  return (
    <Grid
      display={"flex"}
      flexWrap={"wrap"}
      px={{ xs: 1, sm: 10, md: 11, lg: 37, xl: 45 }}
      gap={2}
    >
      {CasesGalleryData?.map((x) => {
        return (
          <Link href={x.path} key={x}>
            <Button
              sx={{
                backgroundColor: "#AFB5B9",
                borderRadius: 0,
                color: "white",
                width: "270px",
                height: "70px",
                ":hover": {
                  backgroundColor: "#89C1CB",
                },
              }}
              variant="contained"
            >
              <Typography gutterBottom fontSize={15}>
                {x.name}
              </Typography>
            </Button>
          </Link>
        );
      })}
    </Grid>
  );
}
