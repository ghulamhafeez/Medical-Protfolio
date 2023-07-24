import "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Grid textAlign={"center"} bgcolor={"#333333"}>
      <Grid display={"flex"} direction={"row"} justifyContent={"space-around"}>
        <Grid pt={3}>
          <img
            loading="lazy"
            src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2018/12/dr-ektor-grammatopoulos-orthodontics-logo3.jpg"
            alt="dr ektor grammatopoulos orthodontics"
            height={"50%"}
            width={"60%"}
          />
        </Grid>
        <Grid pt={3}>
          <Typography variant="h4" gutterBottom color={"white"} pb={4}>
            VISIT US
          </Typography>
          <Typography variant="h6" gutterBottom color={"#C0BAB2"}>
            (480) 325-7500
          </Typography>
          <Typography variant="h6" gutterBottom color={"#C0BAB2"}>
            Lister House, 11-12 <br></br>Wimpole Street,
          </Typography>
        </Grid>
        <Grid pt={3} pb={2}>
          <Typography variant="h4" gutterBottom color={"white"} pb={4}>
            FOLLOW US
          </Typography>
          <Typography variant="h6" gutterBottom color={"#C0BAB2"}>
            Facebook
          </Typography>
          <Typography variant="h6" gutterBottom color={"#C0BAB2"}>
            Instagram
          </Typography>
        </Grid>
      </Grid>
      <Typography
        pt={6}
        variant="overline"
        display="block"
        gutterBottom
        color={"#C0BAB2"}
      >
        © 2023 Frost Nichols Orthodontics | Online Advantage by RoosterGrin
        Media <br></br>
        Click here for Accessibility | Privacy Policy
      </Typography>
    </Grid>
  );
}
