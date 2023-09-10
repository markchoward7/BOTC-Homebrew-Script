import { Typography } from "@mui/material";
import React from "react";

const TabHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Typography
      variant="script"
      textAlign="center"
      fontSize={16}
      color="rgb(230, 230, 220)"
      sx={{
        writingMode: "vertical-lr",
        textOrientation: "upright",
        position: "relative",
        left: 4,
      }}
    >
      {title}
    </Typography>
  );
};

export default TabHeader;
