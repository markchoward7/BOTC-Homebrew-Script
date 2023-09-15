import React from "react";
import { Stack, Typography } from "@mui/material";
import { Character } from "contexts/AppContext";
import { useScriptStylingContext } from "contexts/ScriptStylingContext";

const ScriptEntry: React.FC<{ character: Character }> = ({ character }) => {
  const {
    scriptStyleState: {
      OFFICIAL: { imageSize, rowSize, fontSize, abilityTextPosition },
    },
  } = useScriptStylingContext();

  const teamColor =
    character.team === "townsfolk" || character.team === "outsider"
      ? "rgb(35, 90, 180)"
      : "rgb(150, 30, 30)";

  const abilitySplit = character.ability.split("[");

  const image =
    typeof character.image === "string" ? character.image : character.image[0];

  return (
    <Stack direction="row" alignItems="center" spacing={0} height={rowSize}>
      <img src={image} height={imageSize} />
      <Stack position="relative" left={abilityTextPosition}>
        <Typography color={teamColor} fontWeight="bold" variant="script">
          {character.name}
        </Typography>
        <Stack>
          <Typography variant="script" fontSize={fontSize}>
            {abilitySplit[0]}
          </Typography>
          {abilitySplit.length > 1 ? (
            <Typography fontWeight="bold" variant="script">
              [{abilitySplit[1]}
            </Typography>
          ) : (
            <></>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ScriptEntry;
