import React from "react";
import { Stack, Typography } from "@mui/material";
import { Character } from "contexts/AppContext";
import { useScriptStylingContext } from "contexts/ScriptStylingContext";

const ScriptEntry: React.FC<{ character: Character }> = ({ character }) => {
  const {
    scriptStyleState: { imageSize, rowSize, fontSize, abilityTextPosition },
  } = useScriptStylingContext();

  return (
    <Stack direction="row" alignItems="center" spacing={0} height={rowSize}>
      <img src={character.image} height={imageSize} />
      <Typography
        sx={{ fontSize }}
        variant="script"
        position="relative"
        width={100}
      >
        {character.name}
      </Typography>
      <Typography
        sx={{ fontSize }}
        variant="script"
        position="relative"
        left={abilityTextPosition}
      >
        {character.ability}
      </Typography>
    </Stack>
  );
};

export default ScriptEntry;
