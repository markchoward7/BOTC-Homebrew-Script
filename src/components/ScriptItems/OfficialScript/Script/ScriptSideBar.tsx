import { Container } from "@mui/material";
import React from "react";

const ScriptSideBar: React.FC = () => {
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
        left: -1,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3,
      }}
    />
  );
};

export default ScriptSideBar;
