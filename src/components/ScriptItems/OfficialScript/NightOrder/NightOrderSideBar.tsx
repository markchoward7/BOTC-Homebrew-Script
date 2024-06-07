import { Container, Typography } from "@mui/material";
import { useStylingContext } from "contexts/StylingContext";
import { getSidebarBackground } from "contexts/StylingContext/colors";
import React from "react";

const NightOrderSideBar: React.FC<{ night: "FIRST" | "OTHER" }> = ({
  night,
}) => {
  const {
    styleState: { characterTypeHeaderWidth, colorTheme, pageHeight },
  } = useStylingContext();


  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        maxWidth: characterTypeHeaderWidth,
        position: "absolute",
        backgroundImage: getSidebarBackground(colorTheme),
        backgroundSize: "cover",
        height: pageHeight,
        top: -1,
        right: -1,
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
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
