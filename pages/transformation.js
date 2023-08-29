import styles from "../styles/Home.module.css";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import { supabase } from "./api/supabase";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { FIRST_PATH } from "../constants/Constant";
/* eslint-disable @next/next/no-img-element */

export default function Transformation() {
  const [transformation, setTransformation] = useState();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    getTransformation();

    setTimeout(() => {
      setOpen(false);
    }, 500);
  }, []);

  const getTransformation = () => {
    supabase
      .from("transformation")
      .select()
      .order("id", { ascending: false })
      .then((response) => {
        console.log("asdresponse", response?.data);
        setTransformation(response?.data);
      });
  };
  return (
    <Grid px={{ xl: 30, lg: 20, md: 15, sm: 6 }}>
      {transformation?.map((x) => {
        console.log("x", x);
        return (
          <Grid key={x} display={"flex"} direction={"column"}>
            <CardHeader
              sx={{ ml: 2 }}
              title={x.title}
              // <Typography variant="h6">{x.title}</Typography>
            />
            <Grid
              container
              spacing={{ xl: 24, lg: 20, md: 12, sm: 6, xs: 2 }}
              padding={2}
            >
              <Grid item xs={6} display={"flex"} direction={"column"}>
                <Typography variant="body1" ml={2}>
                  Before
                </Typography>
                {/* <Card
                  key={x}
                  sx={{
                    width: "100%",
                    boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.7",
                  }}
                > */}
                <Grid mt={2}>
                  {x.beforeFile.map((x) => {
                    return (
                      <Grid key={x}>
                        {/* <Field type={x?.type} value={x?.value} /> */}
                        <img
                          width={"100%"}
                          height={270}
                          object-fit="cover"
                          src={`${FIRST_PATH}${x}`}
                          multiple
                        ></img>
                      </Grid>
                    );
                  })}
                </Grid>
                {/* </Card> */}
              </Grid>
              <Grid item xs={6} display={"flex"} direction={"column"}>
                <Typography variant="body1" ml={2}>
                  After
                </Typography>
                {/* <Card
                  key={x}
                  sx={{
                    width: "100%",
                    boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.7",
                  }}
                > */}
                <Grid mt={2}>
                  {x.afterFile.map((x) => {
                    return (
                      <Grid key={x}>
                        {/* <Field type={x?.type} value={x?.value} /> */}
                        <img
                          width={"100%"}
                          height={270}
                          object-fit="cover"
                          src={`${FIRST_PATH}${x}`}
                          multiple
                        ></img>
                      </Grid>
                    );
                  })}
                </Grid>
                {/* </Card> */}
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}
