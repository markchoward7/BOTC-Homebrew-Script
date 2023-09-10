import { Divider, Stack, Typography } from "@mui/material";
import React from "react";

const ScriptHeader: React.FC<{ title: string; image?: string }> = ({
  title,
  image,
}) => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <span style={{ display: "flex", alignItems: "center" }}>
        <Divider
          sx={{
            position: "absolute",
            borderColor: "rgba(0, 0, 0, 0.25)",
            width: 700,
            left: 100,
          }}
        />
        {image ? (
          <img src={image} style={{ height: 100, position: "relative" }} />
        ) : null}
        <Typography
          textAlign="center"
          fontSize={48}
          variant="scriptName"
          position="relative"
          sx={{
            background:
              "-webkit-radial-gradient(rgb(200, 50, 50), rgb(100, 75, 75))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </Typography>
      </span>
    </Stack>
  );
};

export default ScriptHeader;
