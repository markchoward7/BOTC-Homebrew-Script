import { Character, useAppContext } from "contexts/AppContext";
import React, { useEffect, useRef } from "react";
import { Stack, Typography } from "@mui/material";
import NightOrderEntry from "./NightOrderEntry";
import StyledPaper from "components/StyledPaper";
import { useStylingContext } from "contexts/StylingContext";

const dawn: Character = {
  id: "dawn",
  name: "Dawn",
  team: "townsfolk",
  ability: "",
  official: false,
  image: "dawn.png",
  firstNight: 63,
  otherNight: 81,
};
const dusk: Character = {
  id: "dusk",
  name: "Dusk",
  team: "townsfolk",
  ability: "",
  official: false,
  image: "dusk.png",
  firstNight: 1,
  otherNight: 1,
};
const minion: Character = {
  id: "minion info",
  name: "Minion info",
  team: "minion",
  ability: "",
  official: false,
  image: "minion-info.png",
  firstNight: 8,
  otherNight: 0,
};
const demon: Character = {
  id: "demon info",
  name: "Demon info",
  team: "demon",
  official: false,
  ability: "",
  image: "demon-info.png",
  firstNight: 12,
  otherNight: 0,
};

const NightOrder: React.FC = () => {
  const nightOrderRef = useRef();
  const {
    appState: { characterList, scriptName },
    setNightOrderRefs,
  } = useAppContext();

  const {
    styleState: { pageXPosition, pageYPosition },
  } = useStylingContext();

  useEffect(() => {
    setNightOrderRefs([nightOrderRef, null]);
  }, [nightOrderRef]);

  const firstNightCharacters = characterList
    .concat([dawn, dusk, minion, demon])
    .filter(
      (char) =>
        char.firstNight && char.team !== "fabled" && char.team !== "traveler"
    );
  firstNightCharacters.sort(
    (char1, char2) => char1.firstNight - char2.firstNight
  );

  const otherNightCharacters = characterList
    .concat([dawn, dusk])
    .filter(
      (char) =>
        char.otherNight && char.team !== "fabled" && char.team !== "traveler"
    );
  otherNightCharacters.sort(
    (char1, char2) => char2.otherNight - char1.otherNight
  );

  return (
    <StyledPaper ref={nightOrderRef}>
      <Stack
        direction="row"
        spacing={26}
        position="relative"
        left={pageXPosition}
        top={pageYPosition}
      >
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
            <NightOrderEntry character={char} key={char.id} upsideDown />
          ))}
        </Stack>
      </Stack>
    </StyledPaper>
  );
};

export default NightOrder;
