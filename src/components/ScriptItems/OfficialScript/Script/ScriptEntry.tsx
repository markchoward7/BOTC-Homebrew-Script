import React from "react";
import { Stack, Typography } from "@mui/material";
import { Character } from "contexts/AppContext";
import { useStylingContext } from "contexts/StylingContext";

const ScriptEntry: React.FC<{ character: Character }> = ({ character }) => {
  const {
    styleState: { HOMEBREW, OFFICIAL, rowSize, fontSize, characterTypeHeaderWidth, pageXPosition, pageRightPosition, pageWidth, columnGap },
  } = useStylingContext();

  const teamColor =
    character.team === "townsfolk" || character.team === "outsider"
      ? "rgb(35, 90, 180)"
      : "rgb(150, 30, 30)";

  const abilitySplit = character.ability.split("[");

  const image =
    typeof character.image === "string" ? character.image : character.image[0];

  const characterContainerWidth = pageWidth - pageXPosition - pageRightPosition - characterTypeHeaderWidth

  const entryWidth = (characterContainerWidth - columnGap) / 2

  const imagePosition = character.official
  ? OFFICIAL.imagePosition
  : HOMEBREW.imagePosition

  const imageSize = character.official ? OFFICIAL.imageSize : HOMEBREW.imageSize

  const abilityTextPosition = imagePosition + (character.official
  ? OFFICIAL.abilityTextPosition
  : HOMEBREW.abilityTextPosition)

  return (
    <Stack direction="row" alignItems="center" spacing={0} height={rowSize}>
      <img
        src={image}
        height={imageSize}
        style={{
          position: "relative",
          left: imagePosition,
        }}
      />
      <Stack
        position="relative"
        left={
          abilityTextPosition
        }
      >
        <Typography color={teamColor} fontWeight="bold" variant="scriptSubtitle">
          {character.name}
        </Typography>
        <Stack>
          <Typography variant="script" fontSize={fontSize} width={entryWidth - abilityTextPosition - imageSize}>
            {abilitySplit[0]} {abilitySplit.length > 1 ? <b>[{abilitySplit[1]}</b> : ""}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ScriptEntry;
