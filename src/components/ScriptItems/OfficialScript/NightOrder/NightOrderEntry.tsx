import { Stack, Typography } from "@mui/material";
import { Character } from "contexts/AppContext";
import React from "react";

const NightOrderEntry: React.FC<{
  character: Character;
  night: "FIRST" | "OTHER";
}> = ({ character, night }) => {
  const reminder =
    night === "FIRST" ? "firstNightReminder" : "otherNightReminder";
  const teamColor =
    character.team === "townsfolk" || character.team === "outsider"
      ? "rgb(35, 90, 180)"
      : "rgb(150, 30, 30)";
  const image =
    typeof character.image === "string" ? character.image : character.image[0];
  return (
    <Stack direction="row" spacing={1}>
      <img src={image} height={50} />
      <div
        style={{
          borderRight: "solid",
          borderColor: teamColor,
          display: "flex",
          alignItems: "center",
          paddingRight: 5,
        }}
      >
        <Typography
          width={80}
          textAlign="right"
          variant="script"
          color={teamColor}
          fontWeight="bold"
        >
          {character.name}
        </Typography>
      </div>
      <Typography
        variant="script"
        position="relative"
        alignSelf="center"
        width={600}
      >
        {character[reminder]}
      </Typography>
    </Stack>
  );
};

export default NightOrderEntry;
