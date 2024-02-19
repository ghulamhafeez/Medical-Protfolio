import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { supabase } from "../../api/supabase";
import { FIRST_PATH } from "../../../constants/Constant";
import { Youtube } from "../../../components/Youtube";

export default function BlogDetail() {
  const [blogs, setBlogs] = React.useState();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      getBlog();
    }
  }, [id]);

  const getBlog = () => {
    supabase
      .from("blog")
      .select()
      .eq("id", id)
      .single()
      .then((response) => {
        console.log("data", response?.data);
        setBlogs(response?.data);
      });
  };
  return (
    <Grid mt={2} mb={8}>
      <Grid
        bgcolor={"#89C1CB"}
        height={250}
        textAlign={"center"}
        mb={6}
        pt={12}
      >
        <Typography
          variant="h3"
          color={"white"}
          fontSize={{ xs: "30px", sm: "30px", md: "40px", lg: "40px" }}
        >
          {blogs?.title}
        </Typography>
      </Grid>
      <Grid px={{ xs: 2, sm: 8, md: 22, lg: 32, xl: 48 }}>
        {blogs?.items.map((x) => {
          return (
            <Grid key={x} textAlign={"center"} gap={4} mt={3}>
              {x?.type === "text" && (
                <Typography variant="body1" color={"#333333"}>
                  {x?.value}
                </Typography>
              )}
              {x?.type == "file" && (
                <img
                  loading="lazy"
                  src={`${FIRST_PATH}${x?.value}`}
                  alt="iamge"
                  width={"100%"}
                ></img>
              )}
              {x?.type == "url" && <Youtube data={x?.value} />}{" "}
            </Grid>
          );
        })}
        <Grid mt={3}>
          {" "}
          <iframe
            src={`${FIRST_PATH}${blogs?.pdfFile}`}
            width={"100%"}
            height={600}
          ></iframe>
        </Grid>
      </Grid>
    </Grid>
  );
}
