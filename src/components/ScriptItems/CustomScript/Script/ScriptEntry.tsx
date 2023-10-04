import React from "react";
import { Stack, Typography } from "@mui/material";
import { Character } from "contexts/AppContext";
import { useStylingContext } from "contexts/StylingContext";

const ScriptEntry: React.FC<{ character: Character }> = ({ character }) => {
  const {
    styleState: { HOMEBREW, OFFICIAL, rowSize, fontSize },
  } = useStylingContext();

  const image =
    typeof character.image === "string" ? character.image : character.image[0];

  return (
    <Stack direction="row" alignItems="center" height={rowSize}>
      <img
        src={image}
        height={character.official ? OFFICIAL.imageSize : HOMEBREW.imageSize}
        style={{
          position: "relative",
          left: character.official
            ? OFFICIAL.imagePosition
            : HOMEBREW.imagePosition,
        }}
      />
      <Typography
        fontSize={fontSize}
        variant="script"
        position="relative"
        width={100}
        left={
          character.official
            ? OFFICIAL.nameTextPosition
            : HOMEBREW.nameTextPosition
        }
      >
        {character.name}
      </Typography>
      <Typography
        fontSize={fontSize}
        variant="script"
        position="relative"
        left={
          character.official
            ? OFFICIAL.abilityTextPosition
            : HOMEBREW.abilityTextPosition
        }
        sx={{ maxWidth: 700 }}
      >
        {character.ability}
      </Typography>
    </Stack>
  );
};

export default ScriptEntry;
