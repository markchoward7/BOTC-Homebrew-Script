import { Stack, Typography } from "@mui/material";
import { Character } from "contexts/AppContext";
import { useStylingContext } from "contexts/StylingContext";
import React from "react";

const NightOrderEntry: React.FC<{
  character: Character;
  upsideDown?: boolean;
}> = ({ character, upsideDown }) => {
  const {
    styleState: { HOMEBREW, OFFICIAL, rowSize, fontSize },
  } = useStylingContext();

  const image =
    typeof character.image === "string" ? character.image : character.image[0];

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent={upsideDown ? "end" : "start"}
      height={rowSize}
    >
      <div
        style={
          upsideDown
            ? { display: "flex", transform: "scale(-1, -1)" }
            : { display: "flex" }
        }
      >
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
          variant="script"
          fontSize={fontSize}
          position="relative"
          alignSelf="center"
          left={
            character.official
              ? OFFICIAL.nameTextPosition
              : HOMEBREW.nameTextPosition
          }
        >
          {character.name}
        </Typography>
      </div>
    </Stack>
  );
};

export default NightOrderEntry;
