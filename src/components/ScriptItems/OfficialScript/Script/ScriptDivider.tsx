import { Box, Divider, Stack } from "@mui/material";
import { useStylingContext } from "contexts/StylingContext";
import React from "react";

const ScriptDivider: React.FC = () => {
  const {
    styleState: {
      pageWidth, 
    },
  } = useStylingContext();

  return (
    <Divider
      sx={{ 
        borderColor: "rgba(135, 91, 46, 0.25)", 
        marginY: "10px",
        position: "relative" }}
    />
  );
};

export default ScriptDivider;
