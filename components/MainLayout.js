import "../styles/Home.module.css";
import { Grid } from "@mui/material";
import { Footer } from "../pages/footer";
import Header from "../pages/header";
import Tabs from "./Tabs";
export default function MainLayout({ children }) {
  return (
    <Grid>
      <Header></Header>
      <Grid position={"sticky"} top={0} zIndex={10}>
        <Tabs></Tabs>
      </Grid>
      {children}
      <Footer></Footer>
    </Grid>
  );
}
