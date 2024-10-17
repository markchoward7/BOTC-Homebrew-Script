import React from "react";
import { Stack, Typography } from "@mui/material";
import { Character, useAppContext } from "contexts/AppContext";
import { useStylingContext } from "contexts/StylingContext";

const ScriptEntry: React.FC<{ character: Character }> = ({ character }) => {
  const {
    styleState: { HOMEBREW, OFFICIAL, rowSize, fontSize },
  } = useStylingContext();
  const {
    appState: { characterList },
  } = useAppContext();

  const image =
    typeof character.image === "string" ? character.image : character.image[0];
  const jinxes = character.jinxes
    ?.filter((jinx) => characterList.find((char) => char.id === jinx.id))
    ?.map((jinx) => {
      const jinxedChar = characterList.find((char) => char.id === jinx.id);
      return typeof jinxedChar.image === "string"
        ? jinxedChar.image
        : jinxedChar.image[0];
    });

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
      <Stack>
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
        <Stack direction="row">
          {jinxes?.map((jinx) => {
            return <img key={jinx} height={25} src={jinx} />;
          })}
        </Stack>
      </Stack>
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
