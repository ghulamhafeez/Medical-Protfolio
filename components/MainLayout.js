import "../styles/Home.module.css";
import { Grid } from "@mui/material";
import { Footer } from "./footer";
import Header from "./header";
import Tabs from "./Tabs";
import ChatMessage from "./ChatMessage";
import Fab from "@mui/material/Fab";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
export default function MainLayout({ children }) {
  return (
    <Grid>
      <Header></Header>
      <Grid position={"sticky"} top={0} zIndex={10}>
        <Tabs></Tabs>
      </Grid>

      {children}
      <Grid
        position={"fixed"}
        direction={"column"}
        display={"flex"}
        bottom={25}
        right={30}
        zIndex={10}
        gap={1}
      >
        {/* <Fab
          sx={{
            mt: 1,
            color: "white",
            backgroundColor: "#89C1CB",
            ":hover": {
              backgroundColor: "#89C1CB",
            },
          }}
          // onClick={handlePopoverOpen}
        >
          <AddRoundedIcon> </AddRoundedIcon>
        </Fab> */}
        <ChatMessage></ChatMessage>
      </Grid>
      <Footer></Footer>
    </Grid>
  );
}
