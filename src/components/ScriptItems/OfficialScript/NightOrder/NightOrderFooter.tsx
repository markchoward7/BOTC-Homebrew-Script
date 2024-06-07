import { Stack, Typography } from "@mui/material";
import { useStylingContext } from "contexts/StylingContext";
import { getTitleColor } from "contexts/StylingContext/colors";
import React from "react";

const NightOrderFooter: React.FC<{ title: string; image?: string }> = ({
  title,
  image,
}) => {

  const {
    styleState: { colorTheme },
  } = useStylingContext();

  return (
    <div
      style={{
        position: "absolute",
        left: 450,
        bottom: 15,
        width: 400,
        height: 200,
      }}
    >
      <Stack height="200px" justifyContent="flex-end">
        {image ? (
          <img
            src={image}
            style={{
              height: 100,
              width: 100,
              alignSelf: "center",
              margin: -20,
            }}
          />
        ) : null}
        <Typography
          textAlign="center"
          fontSize={48}
          variant="scriptName"
          position="relative"
          lineHeight={1}
          sx={{
            background:
              getTitleColor(colorTheme),
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </Typography>
      </Stack>
    </div>
  );
};

export default NightOrderFooter;
