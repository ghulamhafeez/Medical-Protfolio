import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Link from "next/link";
import { TabsData } from "../constants/Constant";
import Typography from "@mui/material/Typography";
export default function Tabs() {
  return (
    <Grid
      display={"flex"}
      flexWrap={"wrap"}
      pt={2}
      pb={1}
      //   sx={{ display: { sm: "none", xs: "none", md: "block", lg: "block" } }}
      px={{ md: 8, lg: 32 }}
      className={styles.tabs}
      bgcolor={"white"}
    >
      {TabsData?.map((x) => {
        return (
          <Link href={x.path} key={x}>
            <Typography
              variant="h6"
              gutterBottom
              ml={2}
              fontSize={{ sm: "16px", md: "19px", lg: "20px" }}
            >
              {x.name}
            </Typography>{" "}
            <br></br>
          </Link>
        );
      })}
    </Grid>
  );
}
