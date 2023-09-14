import { Stack, Typography } from "@mui/material";
import { Character } from "contexts/AppContext";
import React from "react";

const NightOrderEntry: React.FC<{
  character: Character;
  night: "FIRST" | "OTHER";
}> = ({ character, night }) => {
  const reminder =
    night === "FIRST" ? "firstNightReminder" : "otherNightReminder";
  const lines = character[reminder].split(".").filter((line) => line !== "");
  const teamColor =
    character.team === "townsfolk" || character.team === "outsider"
      ? "rgb(35, 90, 180)"
      : "rgb(150, 30, 30)";
  return (
    <Stack direction="row" spacing={1}>
      <img src={character.image} height={50} />
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
      <Stack justifyContent="center">
        {lines.map((line, index) => (
          <Typography
            variant="script"
            key={line}
            left={index === 0 ? 0 : 20}
            position="relative"
          >
            {line}.
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
};

export default NightOrderEntry;
