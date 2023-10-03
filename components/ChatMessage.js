import Fab from "@mui/material/Fab";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Grid } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

export default function ChatMessage() {
  const [isOpen, setIsOpen] = useState(false);

  const handlePopoverOpen = (event) => {
    setIsOpen(event.currentTarget);
  };

  return (
    <Grid>
      <Grid>
        <Popover
          open={isOpen}
          onClose={() => setIsOpen(false)}
          anchorEl={isOpen}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{
            "& .MuiPaper-root": {
              marginTop: "-80px",
              marginLeft: "30px",
            },
          }}
        >
          <Grid
            width={"100%"}
            height={50}
            display={"flex"}
            justifyContent={"center"}
            bgcolor={"#89C1CB"}
          >
            <ChatIcon sx={{ mt: 2, mr: 1, ml: 1, color: "white" }} />
            <Typography
              sx={{ mt: 2, mr: 1 }}
              variant="body1"
              color={"white"}
              textAlign={"center"}
            >
              <b>Get a quick response</b>
            </Typography>
          </Grid>
          <Grid height={300}>
            <Avatar
              alt="Travis Howard"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 140, height: 140, ml: 8, mt: 2 }}
            />
            <Button
              variant="contained"
              sx={{
                borderRadius: 5,
                mt: 12,
                ml: 3,
                mr: 3,
                backgroundColor: "#89C1CB",
                ":hover": {
                  backgroundColor: "#89C1CB",
                },
              }}
            >
              Connect to Facebook
            </Button>
          </Grid>
        </Popover>
      </Grid>

      <Grid mt={1}>
        {isOpen ? (
          <Fab
            sx={{ backgroundColor: "#89C1CB" }}
            onClick={() => setIsOpen(false)}
          >
            <CloseIcon sx={{ color: "white" }} />
          </Fab>
        ) : (
          <Fab
            sx={{
              backgroundColor: "#89C1CB",
              ":hover": {
                backgroundColor: "#89C1CB",
              },
            }}
            onClick={handlePopoverOpen}
          >
            <ChatIcon sx={{ color: "white" }} />
          </Fab>
        )}
      </Grid>
    </Grid>
  );
}
