import { Stack, Typography } from "@mui/material";
import { useStylingContext } from "contexts/StylingContext";
import React from "react";

const ScriptTabHeader: React.FC<{ title: string }> = ({ title }) => {
  const {
    styleState: { characterTypeHeaderWidth, pageHeight },
  } = useStylingContext();

  const text = pageHeight > 900 ? title : title[0]

  return (
    <Stack 
      direction="row" 
      width={characterTypeHeaderWidth}
      justifyContent="center">
      <Typography
        variant="scriptSubtitle"
        textAlign="center"
        fontSize={14}
        color="rgb(230, 230, 220)"
        sx={{
          writingMode: "vertical-lr",
          textOrientation: "upright",
          letterSpacing: '-3px'
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
};

export default ScriptTabHeader;
