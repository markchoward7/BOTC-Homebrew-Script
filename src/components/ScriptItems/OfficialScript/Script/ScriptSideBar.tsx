import { Container } from "@mui/material";
import { useStylingContext } from "contexts/StylingContext";
import { getSidebarBackground } from "contexts/StylingContext/colors";
import React from "react";


const ScriptSideBar: React.FC = () => {
  const {
    styleState: { characterTypeHeaderWidth, colorTheme, pageHeight },
  } = useStylingContext();

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        maxWidth: characterTypeHeaderWidth + 1,
        position: "absolute",
        backgroundImage: getSidebarBackground(colorTheme),
        backgroundSize: "cover",
        height: pageHeight,
        top: -1,
        left: -1,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3,
      }}
    />
  );
};

export default ScriptSideBar;
