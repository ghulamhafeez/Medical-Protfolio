import { Button, Grid } from "@mui/material";
import Link from "next/link";
import Typography from "@mui/material/Typography";

export default function CasesGalleryTabs() {
  return (
    <Grid
      display={"flex"}
      container
      px={{ xs: 4, sm: 15, md: 12, lg: 16, xl: 40 }}
    >
      {" "}
      <Grid
        item
        display={"flex"}
        sx={{ marginBottom: "15px" }}
        direction={"column"}
        gap={2}
        xs={12}
        md={4}
      >
        <Link href={"/"} className="">
          <Button
            sx={{
              backgroundColor: "#AFB5B9",
              borderRadius: 0,
              color: "white",
              width: "calc(100% - 15px)",
              height: "70px",
              margin: "0 7.5px",
              ":hover": {
                backgroundColor: "#89C1CB",
              },
            }}
            variant="contained"
          >
            <Typography gutterBottom fontSize={15}>
              Crowding
            </Typography>
          </Button>
        </Link>
        <Link href={"/cases-gallery/protruding-upper-teeth"}>
          <Button
            sx={{
              backgroundColor: "#AFB5B9",
              borderRadius: 0,
              color: "white",
              width: "calc(100% - 15px)",
              height: "70px",
              margin: "0 7.5px",
              display: "block",
              ":hover": {
                backgroundColor: "#89C1CB",
              },
            }}
            variant="contained"
          >
            <Typography gutterBottom fontSize={15}>
              Protruding Upper Teeth
            </Typography>
          </Button>
        </Link>
      </Grid>
      <Grid
        item
        sx={{ marginBottom: "15px" }}
        display={"flex"}
        direction={"column"}
        gap={2}
        xs={12}
        md={4}
      >
        <Link href={"/cases-gallery/deep-bite"}>
          <Button
            sx={{
              backgroundColor: "#AFB5B9",
              borderRadius: 0,
              color: "white",
              width: "calc(100% - 15px)",
              height: "70px",
              margin: "0 7.5px",
              ":hover": {
                backgroundColor: "#89C1CB",
              },
            }}
            variant="contained"
          >
            <Typography gutterBottom fontSize={15}>
              Deep Bite
            </Typography>
          </Button>
        </Link>
        <Link href={"/cases-gallery/restorative"}>
          <Button
            sx={{
              backgroundColor: "#AFB5B9",
              borderRadius: 0,
              color: "white",
              width: "calc(100% - 15px)",
              height: "70px",
              margin: "0 7.5px",
              ":hover": {
                backgroundColor: "#89C1CB",
              },
            }}
            variant="contained"
          >
            <Typography gutterBottom fontSize={15}>
              Restorative
            </Typography>
          </Button>
        </Link>
      </Grid>
      <Grid
        item
        sx={{ marginBottom: "15px" }}
        display={"flex"}
        direction={"column"}
        gap={2}
        xs={12}
        md={4}
      >
        <Link href={"/cases-gallery/protruding-lower-teeth"}>
          <Button
            sx={{
              backgroundColor: "#AFB5B9",
              borderRadius: 0,
              color: "white",
              width: "calc(100% - 15px)",
              height: "70px",
              margin: "0 7.5px",
              ":hover": {
                backgroundColor: "#89C1CB",
              },
            }}
            variant="contained"
          >
            <Typography gutterBottom fontSize={15}>
              Protruding Lower Teeth
            </Typography>
          </Button>
        </Link>
        <Link href={"/cases-gallery/spaced-teeth"}>
          <Button
            sx={{
              backgroundColor: "#AFB5B9",
              borderRadius: 0,
              color: "white",
              width: "calc(100% - 15px)",
              height: "70px",
              margin: "0 7.5px",
              ":hover": {
                backgroundColor: "#89C1CB",
              },
            }}
            variant="contained"
          >
            <Typography gutterBottom fontSize={15}>
              Spaced Teeth
            </Typography>
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}
