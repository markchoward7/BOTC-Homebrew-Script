import { Stack, Typography } from "@mui/material";
import { Character } from "contexts/AppContext";
import { useStylingContext } from "contexts/StylingContext";
import React from "react";

const NightOrderEntry: React.FC<{
  character: Character;
  night: "FIRST" | "OTHER";
}> = ({ character, night }) => {
  const {
    styleState: { OFFICIAL, HOMEBREW, fontSize, rowSize },
  } = useStylingContext();

  const reminder =
    night === "FIRST" ? "firstNightReminder" : "otherNightReminder";

  const getTeamColor = () => {
    if (["dawn", "dusk"].includes(character.id)) {
      return "rgb(100, 90, 80)";
    }
    if (["townsfolk", "outsider"].includes(character.team)) {
      return "rgb(35, 90, 180)";
    }
    return "rgb(150, 30, 30)";
  };
  const teamColor = getTeamColor();
  const image =
    typeof character.image === "string" ? character.image : character.image[0];
  return (
    <Stack direction="row" spacing={1} maxHeight={rowSize}>
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
      <div
        style={{
          borderRight: "solid",
          borderColor: teamColor,
          display: "flex",
          alignItems: "center",
          paddingRight: 5,
          position: "relative",
          left: character.official
            ? OFFICIAL.nameTextPosition
            : HOMEBREW.nameTextPosition,
        }}
      >
        <Typography
          width={80}
          textAlign="right"
          variant="script"
          color={teamColor}
          fontWeight="bold"
          fontSize={fontSize}
          position="relative"
          left={
            character.official
              ? OFFICIAL.nameTextPosition
              : HOMEBREW.nameTextPosition
          }
        >
          {character.name}
        </Typography>
      </div>
      <Typography
        variant="script"
        position="relative"
        alignSelf="center"
        width={600}
        fontSize={fontSize}
        left={
          character.official
            ? OFFICIAL.abilityTextPosition
            : HOMEBREW.abilityTextPosition
        }
      >
        {character[reminder]}
      </Typography>
    </Stack>
  );
};

export default NightOrderEntry;
