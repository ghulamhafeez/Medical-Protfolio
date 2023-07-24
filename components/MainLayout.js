import "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Footer from "../pages/Footer";
import Header from "../pages/Header";
export default function MainLayout({ children }) {
  console.log("children", children);
  return (
    <Grid>
      <Header></Header>
      {children}
      <Footer></Footer>
    </Grid>
  );
}
