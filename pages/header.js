import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Tabs from "../components/Tabs";
import { TabsData } from "../constants/Constant";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Box from "@mui/material/Box";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Grid
      display={"flex"}
      direction={"column"}
      flexWrap={"wrap"}
      bgcolor={"#FAFAFA"}
      pt={3}
      // position={"sticky"}
      // top={0}
    >
      <Grid display={"flex"}>
        <img
          loading="lazy"
          src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2018/12/dr-ektor-grammatopoulos-orthodontics-logo3.jpg"
          alt="dr ektor grammatopoulos orthodontics"
          className={styles.img}
        ></img>

        <MenuIcon
          sx={{
            height: "47px",
            width: "47px",
          }}
          className={styles.menu}
          onClick={() => setOpen(true)}
        />
      </Grid>
      <Drawer open={open} anchor={"top"} onClose={() => setOpen(false)}>
        <Box
          sx={{ width: 350, backgroundColor: "#FAFAFA" }}
          onClick={() => setOpen(false)}
        >
          {TabsData?.map((x) => {
            return (
              <Link href={x.path} key={x}>
                <Typography variant="h6" gutterBottom ml={3}>
                  {x.name}
                </Typography>
              </Link>
            );
          })}
        </Box>
      </Drawer>
    </Grid>
  );
}
