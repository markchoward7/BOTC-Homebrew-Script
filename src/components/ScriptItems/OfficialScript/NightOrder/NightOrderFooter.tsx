import { Stack, Typography } from "@mui/material";
import React from "react";

const NightOrderFooter: React.FC<{ title: string; image?: string }> = ({
  title,
  image,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        left: 650,
        bottom: 0,
        width: 200,
        height: 200,
      }}
    >
      <Stack>
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
              "-webkit-radial-gradient(rgb(200, 50, 50), rgb(100, 75, 75))",
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
