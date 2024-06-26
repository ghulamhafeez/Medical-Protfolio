import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Link from "next/link";
import { TabsData } from "../constants/Constant";
import Typography from "@mui/material/Typography";
export default function Tabs() {
  return (
    <Grid
      display={{ xs: "none", sm: "flex" }}
      flexWrap={"wrap"}
      pt={2}
      pb={1}
      px={{ sm: 2, md: 5, lg: 22, xl: 28 }}
      bgcolor={"white"}
      visibility={{}}
      justifyContent={"center"}
    >
      {TabsData?.map((x) => {
        return (
          <Link href={x.path} key={x}>
            <Typography
              variant="h6"
              gutterBottom
              ml={2}
              fontSize={{ sm: "15px", md: "17px", lg: "20px" }}
              sx={{ fontWeight: 500 }}
              color="black"
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
