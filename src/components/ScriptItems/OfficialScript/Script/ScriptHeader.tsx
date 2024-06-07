import { Divider, Stack, Typography } from "@mui/material";
import { useStylingContext } from "contexts/StylingContext";
import { getTitleColor } from "contexts/StylingContext/colors";
import React from "react";

const ScriptHeader: React.FC<{ title: string; image?: string }> = ({
  title,
  image,
}) => {

  const {
    styleState: { colorTheme },
  } = useStylingContext();

  return (
    <Stack justifyContent="center" alignItems="center" marginTop="15px">
      <span style={{ display: "flex", alignItems: "center" }}>
        <Divider
          sx={{
            position: "absolute",
            borderColor: "rgba(135, 91, 46, 0.25)",
            width: 700,
            left: 100,
            top: 75,
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
            background: getTitleColor(colorTheme),
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
