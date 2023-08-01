/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
export default function About() {
  return (
    <Grid direction={"column"}>
      <Grid bgcolor={"#89C1CB"} height={250} mb={6} textAlign={"center"} pt={8}>
        <Typography
          variant="h3"
          color={"white"}
          fontSize={{ xs: "30px", sm: "30px", md: "40px", lg: "40px" }}
        >
          Dr Ektor Grammatopoulos
        </Typography>
        <Typography
          variant="h6"
          color={"white"}
          fontSize={{ xs: "18px", sm: "18px", md: "22px", lg: "25px" }}
        >
          Specialist and Consultant Orthodontist
        </Typography>
        <Typography
          variant="body2"
          color={"white"}
          fontSize={{ xs: "15px", sm: "15px", md: "15px", lg: "15px" }}
        >
          BDS MFDS RCPSG MPHIL(Orth) MORTH RCSED FDS(ORTH) RCSED PGCert(KCL)
          FHEA
        </Typography>
      </Grid>

      <Grid
        container
        flexWrap={"wrap"}
        direction={"row"}
        px={{ xs: 3, sm: 6, md: 15, lg: 30 }}
        spacing={3}
      >
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <img
            loading="lazy"
            src="https://www.ektorgrammatopoulos.com/wp-content/uploads/2018/12/about-thumb1.jpg"
            width={"100%"}
            max-width="340px"
            height={"360px"}
            alt={"Thumbnail"}
          ></img>
        </Grid>
        <Grid item xs={12} sm={8} md={8} lg={8} mb={6}>
          <Typography pb={2}>
            Dr Grammatopoulos attended secondary school in Athens and completed
            his ultimate two years at Dulwich College under the Ishigaki
            Scholarship. He gained his Dental Degree from the University of
            Newcastle in 2004. Following further training in Restorative
            Dentistry, Paediatric Dentistry and Oral and Maxillofacial Surgery,
            he qualified as a Specialist Orthodontist in 2010 and Consultant
            Orthodontist in 2012. He was appointed Consultant in Orthodontics at
            Guy’s and St Thomas’ Hospitals and Honorary Senior Specialist
            Clinical Teacher at King’s College London in 2012, remaining in the
            post until 2020. For over a decade he has trained Dentists,
            Specialists in Orthodontics and Consultants in Orthodontics.
          </Typography>
          <Typography>
            His work has been awarded a variety of distinguished national and
            international prizes and awards from a number of highly recognised
            professional societies such as the European Orthodontic Society,
            British Orthodontic Society, Royal College of Physicians and
            Surgeons of Glasgow and British Society of Dental Research,
            including the prestigious European Orthodontic Society W.J.B.
            Houston Award.
          </Typography>
          <Typography pt={2}>
            He has a special interest in optimal smile aesthetics,
            non-extraction treatments and providing high-quality and efficient
            orthodontic treatment for children and adults. He is highly
            experienced in all modern techniques including Incognito
            lingual(hidden) and Invisalign appliances.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
