import { Container } from "@mui/material";
import React from "react";

const SideBar: React.FC = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        maxWidth: 30,
        position: "absolute",
        backgroundImage: "url('/side-bar.png')",
        height: "100%",
      }}
    />
  );
};

export default SideBar;
