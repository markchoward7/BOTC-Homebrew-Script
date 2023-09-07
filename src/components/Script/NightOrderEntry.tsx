import { Stack, Typography } from "@mui/material";
import { Character } from "contexts/AppContext";
import React from "react";

const NightOrderEntry: React.FC<{
  character: Character;
  styleOptions?: Object;
}> = ({ character, styleOptions }) => {
  return (
    <Stack direction="row" alignItems="center" height={50}>
      <img src={character.image} height={60} style={styleOptions} />
      <Typography sx={styleOptions} variant="script">
        {character.name}
      </Typography>
    </Stack>
  );
};

export default NightOrderEntry;
