import { Container, Typography } from "@mui/material";
import React from "react";

const NightOrderSideBar: React.FC<{ night: "FIRST" | "OTHER" }> = ({
  night,
}) => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        maxWidth: 30,
        position: "absolute",
        backgroundImage: "url('/side-bar.png')",
        height: 1200,
        top: -1,
        right: -1,
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
      }}
    >
      <Typography
        variant="script"
        textAlign="center"
        fontSize={24}
        color="rgb(230, 230, 220)"
        sx={{
          writingMode: "vertical-lr",
          textOrientation: "upright",
          position: "relative",
          top: 20,
        }}
      >
        {night === "FIRST" ? "FIRST NIGHT" : "OTHER NIGHTS"}
      </Typography>
    </Container>
  );
};

export default NightOrderSideBar;
