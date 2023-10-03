import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { supabase } from "../../api/supabase";
import { FIRST_PATH } from "../../../constants/Constant";
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
    <Grid>
      {/* {blogs?.map((x) => { */}

      <Grid>
        <Grid
          bgcolor={"#89C1CB"}
          height={250}
          mb={6}
          textAlign={"center"}
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
        <Grid
          container
          alignItems="center"
          px={{ xs: 2, sm: 5, md: 10, lg: 32 }}
          mb={2}
          spacing={2}
        >
          {blogs?.items.map((x) => {
            return (
              <>
                {x?.type === "text" && (
                  <Grid item xs={12} sm={6} px={4}>
                    <Typography variant="body1" color={"#333333"}>
                      {x?.value}
                    </Typography>
                  </Grid>
                )}
                {x?.type == "file" && (
                  <Grid item xs={12} sm={6} px={4}>
                    <img
                      loading="lazy"
                      src={`${FIRST_PATH}${x?.value}`}
                      alt="iamge"
                      width={"100%"}
                    ></img>
                  </Grid>
                )}
              </>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
