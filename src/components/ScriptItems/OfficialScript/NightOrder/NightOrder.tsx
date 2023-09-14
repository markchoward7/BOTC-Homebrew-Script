import { Stack } from "@mui/material";
import { Character, useAppContext } from "contexts/AppContext";
import React, { useEffect, useRef } from "react";
import NightOrderEntry from "./NightOrderEntry";
import NightOrderFooter from "./NightOrderFooter";
import NightOrderSideBar from "./NightOrderSideBar";
import StyledPaper from "components/StyledPaper";

const dawn: Character = {
  id: "dawn",
  name: "Dawn",
  team: "townsfolk",
  ability: "",
  image: "dawn.png",
  firstNight: Infinity,
  otherNight: Infinity,
  firstNightReminder: "Wait a few seconds. Call for eyes open.",
  otherNightReminder:
    "Wait a few seconds. Call for eyes open & immediately say who died.",
};
const dusk: Character = {
  id: "dusk",
  name: "Dusk",
  team: "townsfolk",
  ability: "",
  image: "dusk.png",
  firstNight: -3,
  otherNight: -1,
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
  image: "minion-info.png",
  firstNight: -2,
  firstNightReminder:
    "If there are 7 or more players, wake all Minions: Show the THIS IS THE DEMON token. Point to the Demon.",
};
const demon: Character = {
  id: "demon info",
  name: "Demon info",
  team: "demon",
  ability: "",
  image: "demon-info.png",
  firstNight: -1,
  firstNightReminder:
    "If there are 7 or more players, wake the Demon: Show the THESE ARE YOUR MINIONS token. Point to all Minions. Show the THESE CHARACTERS ARE NOT IN PLAY token. Show 3 not-in-play good character tokens.",
};

const NightOrder: React.FC = () => {
  const nightOrderRef = useRef();
  const {
    appState: { characterList, scriptName, scriptLogo },
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

  return (
    <Stack ref={nightOrderRef} spacing={1} margin="5%">
      <StyledPaper>
        <NightOrderSideBar night="FIRST" />
        <Stack spacing={1}>
          {firstNightCharacters.map((char) => (
            <NightOrderEntry character={char} key={char.id} night="FIRST" />
          ))}
        </Stack>
        <NightOrderFooter title={scriptName} image={scriptLogo} />
      </StyledPaper>
      <StyledPaper>
        <NightOrderSideBar night="OTHER" />
        <Stack spacing={1}>
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
