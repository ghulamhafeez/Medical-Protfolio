import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
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
      position={"sticky"}
      top={0}
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

      <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
        <Box
          sx={{ width: 320, backgroundColor: "#FAFAFA" }}
          onClick={() => setOpen(false)}
        >
          <h3>Heloo 1</h3>
          <h3>Heloo 2</h3>
          <h3>Heloo 3</h3>
          <h3>Heloo 4</h3>
          <h3>Heloo 5</h3>
        </Box>
      </Drawer>
      {/* xs={0}
          sm={2}
          md={2}
          lg={2} */}
      <Grid
        display={"flex"}
        direction={"column"}
        ml={36}
        flexWrap={"wrap"}
        pt={6}
        pb={2}
        sx={{ display: { sm: "none", lg: "block" } }}
      >
        <Link href="/">
          <Typography variant="h6" gutterBottom ml={3}>
            Home
          </Typography>
        </Link>

        <Link href="/about">
          <Typography variant="h6" gutterBottom ml={3}>
            About
          </Typography>
        </Link>

        <Link href="/treatment-options">
          <Typography variant="h6" gutterBottom ml={3}>
            Treatment Options
          </Typography>
        </Link>

        <Link href="/cases-gallery">
          <Typography variant="h6" gutterBottom ml={3}>
            Cases Gallery
          </Typography>
        </Link>

        <Link href="/transformation">
          <Typography variant="h6" gutterBottom ml={3}>
            Transformation
          </Typography>
        </Link>

        <Link href="/patient-stories">
          <Typography variant="h6" gutterBottom ml={3}>
            Patient Stories
          </Typography>
        </Link>

        <Link href="/blog">
          <Typography variant="h6" gutterBottom ml={3}>
            Blog
          </Typography>
        </Link>

        <Link href="/contact">
          <Typography variant="h6" gutterBottom ml={3}>
            Contact
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
}
