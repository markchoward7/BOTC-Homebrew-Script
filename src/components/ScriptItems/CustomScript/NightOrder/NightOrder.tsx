import { Character, useAppContext } from "contexts/AppContext";
import React, { useEffect, useRef } from "react";
import { Stack, Typography } from "@mui/material";
import NightOrderEntry from "./NightOrderEntry";
import StyledPaper from "components/StyledPaper";

const dawn: Character = {
  id: "dawn",
  name: "Dawn",
  team: "townsfolk",
  ability: "",
  image: "dawn.png",
  firstNight: Infinity,
  otherNight: Infinity,
};
const dusk: Character = {
  id: "dusk",
  name: "Dusk",
  team: "townsfolk",
  ability: "",
  image: "dusk.png",
  otherNight: -1,
};
const minion: Character = {
  id: "minion info",
  name: "Minion info",
  team: "minion",
  ability: "",
  image: "minion-info.png",
  firstNight: -2,
};
const demon: Character = {
  id: "demon info",
  name: "Demon info",
  team: "demon",
  ability: "",
  image: "demon-info.png",
  firstNight: -1,
};

const NightOrder: React.FC = () => {
  const nightOrderRef = useRef();
  const {
    appState: { characterList, scriptName },
    setNightOrderRef,
  } = useAppContext();

  useEffect(() => {
    setNightOrderRef(nightOrderRef);
  }, [nightOrderRef]);

  const firstNightCharacters = characterList
    .concat([dawn, minion, demon])
    .filter((char) => char.firstNight);
  firstNightCharacters.sort(
    (char1, char2) => char1.firstNight - char2.firstNight
  );

  const otherNightCharacters = characterList
    .concat([dawn, dusk])
    .filter((char) => char.otherNight);
  otherNightCharacters.sort(
    (char1, char2) => char2.otherNight - char1.otherNight
  );

  const upsideDownStyling = {
    transform: "scale(-1, -1)",
  };

  return (
    <StyledPaper ref={nightOrderRef}>
      <Stack direction="row" spacing={26}>
        <Stack spacing={0}>
          {firstNightCharacters.map((char) => (
            <NightOrderEntry character={char} key={char.id} />
          ))}
        </Stack>
        <Stack alignItems="center" justifyContent="center">
          <Typography variant="scriptName" fontSize={36}>
            {scriptName}
          </Typography>
          <img src="/night-order-arrow.png" />
          <Typography variant="script" fontSize={20}>
            First Night
          </Typography>
          <div style={{ height: 900 }} />
          <Typography
            variant="script"
            fontSize={20}
            sx={{ transform: "scale(-1, -1)" }}
          >
            Other Nights
          </Typography>
          <img
            src="/night-order-arrow.png"
            style={{ transform: "scale(-1, -1)" }}
          />
          <Typography
            variant="scriptName"
            fontSize={36}
            sx={{ transform: "scale(-1, -1)" }}
          >
            {scriptName}
          </Typography>
        </Stack>
        <Stack spacing={0} sx={{ position: "absolute", bottom: 5, right: 5 }}>
          {otherNightCharacters.map((char) => (
            <NightOrderEntry
              character={char}
              styleOptions={upsideDownStyling}
              key={char.id}
            />
          ))}
        </Stack>
      </Stack>
    </StyledPaper>
  );
};

export default NightOrder;
