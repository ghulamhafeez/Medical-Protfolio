import "../styles/Home.module.css";
import { Grid } from "@mui/material";
import { Footer } from "./footer";
import Header from "./header";
import Tabs from "./Tabs";
import ChatMessage from "./ChatMessage";

export default function MainLayout({ children }) {
  return (
    <Grid>
      <Header></Header>
      <Grid position={"sticky"} top={0} zIndex={10}>
        <Tabs></Tabs>
      </Grid>

      {children}
      <Grid
        position={"sticky"}
        top={0}
        zIndex={10}
        display={"flex"}
        justifyContent={"end"}
        mr={5}
        mb={1}
      >
        <ChatMessage></ChatMessage>
      </Grid>
      <Footer></Footer>
    </Grid>
  );
}
