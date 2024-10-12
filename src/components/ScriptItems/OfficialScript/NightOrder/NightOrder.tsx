import { Stack } from "@mui/material";
import { Character, useAppContext } from "contexts/AppContext";
import React, { useEffect, useRef } from "react";
import NightOrderEntry from "./NightOrderEntry";
import NightOrderFooter from "./NightOrderFooter";
import NightOrderSideBar from "./NightOrderSideBar";
import StyledPaper from "components/StyledPaper";
import { useStylingContext } from "contexts/StylingContext";

const dawn: Character = {
  id: "dawn",
  name: "Dawn",
  team: "townsfolk",
  ability: "",
  official: false,
  image: "dawn.png",
  firstNight: 69,
  otherNight: 87,
  firstNightReminder: "Wait a few seconds. Call for eyes open.",
  otherNightReminder:
    "Wait a few seconds. Call for eyes open & immediately say who died.",
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
  firstNightReminder:
    "Check that all eyes are closed. Some Travellers & Fabled act.",
  otherNightReminder:
    "Check that all eyes are closed. Some Travellers & Fabled act.",
};
const minion: Character = {
  id: "minion info",
  name: "Minion info",
  team: "minion",
  ability: "",
  official: false,
  image: "minion-info.png",
  firstNight: 14,
  otherNight: 0,
  firstNightReminder:
    "If there are 7 or more players, wake all Minions: Show the THIS IS THE DEMON token. Point to the Demon.",
};
const demon: Character = {
  id: "demon info",
  name: "Demon info",
  team: "demon",
  ability: "",
  official: false,
  image: "demon-info.png",
  firstNight: 18,
  otherNight: 0,
  firstNightReminder:
    "If there are 7 or more players, wake the Demon: Show the THESE ARE YOUR MINIONS token. Point to all Minions. Show the THESE CHARACTERS ARE NOT IN PLAY token. Show 3 not-in-play good character tokens.",
};

const NightOrder: React.FC = () => {
  const nightOrderFrontRef = useRef();
  const nightOrderBackRef = useRef();
  const {
    appState: { characterList, scriptName, scriptLogo },
    setNightOrderRefs,
  } = useAppContext();

  const {
    styleState: { pageXPosition, pageYPosition },
  } = useStylingContext();

  useEffect(() => {
    setNightOrderRefs([nightOrderFrontRef, nightOrderBackRef]);
  }, [nightOrderFrontRef, nightOrderBackRef]);

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
    (char1, char2) => char1.otherNight - char2.otherNight
  );

  return (
    <Stack spacing={1} margin="5%">
      <StyledPaper ref={nightOrderFrontRef}>
        <NightOrderSideBar night="FIRST" />
        <Stack
          spacing={1}
          position="relative"
          top={pageYPosition}
          left={pageXPosition}
        >
          {firstNightCharacters.map((char) => (
            <NightOrderEntry character={char} key={char.id} night="FIRST" />
          ))}
        </Stack>
        <NightOrderFooter title={scriptName} image={scriptLogo} />
      </StyledPaper>
      <StyledPaper ref={nightOrderBackRef}>
        <NightOrderSideBar night="OTHER" />
        <Stack
          spacing={1}
          position="relative"
          top={pageYPosition}
          left={pageXPosition}
        >
          {otherNightCharacters.map((char) => (
            <NightOrderEntry character={char} key={char.id} night="OTHER" />
          ))}
        </Stack>
        <NightOrderFooter title={scriptName} image={scriptLogo} />
      </StyledPaper>
    </Stack>
  );
};

export default NightOrder;
