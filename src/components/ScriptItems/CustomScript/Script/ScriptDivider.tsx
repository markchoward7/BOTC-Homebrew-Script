import React from "react";
import { Box, Chip, Divider, Typography } from "@mui/material";

const ScriptDivider: React.FC<{ team: string; scriptName?: string }> = ({
  team,
  scriptName,
}) => {
  return (
    <Divider
      textAlign="right"
      sx={{
        "&::before, &::after": { borderColor: "black" },
      }}
    >
      {scriptName ? (
        <Box
          sx={{
            position: "absolute",
            left: "6%",
            backgroundImage: "url('/page.png')"
          }}
        >
          <Typography variant="scriptName">{scriptName}</Typography>
        </Box>
      ) : (
        <></>
      )}
      <Chip label={team} variant="outlined" sx={{ color: "black" }} />
    </Divider>
  );
};

export default ScriptDivider;
