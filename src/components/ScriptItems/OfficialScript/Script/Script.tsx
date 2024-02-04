import React, { useEffect, useRef } from "react";
import { Stack } from "@mui/material";
import { useAppContext } from "contexts/AppContext";
import ScriptEntry from "./ScriptEntry";
import ScriptTabHeader from "./ScriptTabHeader";
import ScriptDivider from "./ScriptDivider";
import ScriptSideBar from "./ScriptSideBar";
import ScriptFooter from "./ScriptFooter";
import ScriptHeader from "./ScriptHeader";
import StyledPaper from "components/StyledPaper";
import { useStylingContext } from "contexts/StylingContext";

function splitArray<T>(array: T[]): [T[], T[]] {
  const midIndex = Math.round(array.length / 2);
  const leftArray = array.slice(0, midIndex);
  const rightArray = array.slice(midIndex);
  return [leftArray, rightArray];
}

const Script: React.FC = () => {
  const scriptRef = useRef();
  const {
    appState: { scriptName, authorName, scriptLogo, characterList },
    setScriptRefs,
  } = useAppContext();

  const {
    styleState: { pageXPosition, pageYPosition },
  } = useStylingContext();

  useEffect(() => {
    setScriptRefs([scriptRef, null]);
  }, [scriptRef]);

  const townsfolk = characterList.filter((char) => char.team === "townsfolk");
  const [leftTownsfolk, rightTownsfolk] = splitArray(townsfolk);
  const outsiders = characterList.filter((char) => char.team === "outsider");
  const [leftOutsiders, rightOutsiders] = splitArray(outsiders);
  const minions = characterList.filter((char) => char.team === "minion");
  const [leftMinions, rightMinions] = splitArray(minions);
  const demons = characterList.filter((char) => char.team === "demon");
  const [leftDemons, rightDemons] = splitArray(demons);

  if (leftTownsfolk.length !== rightTownsfolk.length) {
    rightTownsfolk.unshift({
      id: "blank",
      name: "",
      team: "townsfolk",
      ability: "",
      image: "",
      official: false,
    });
  }

  return (
    <StyledPaper ref={scriptRef}>
      <ScriptSideBar />
      <ScriptHeader title={scriptName} image={scriptLogo} />
      <Stack position="relative" top={pageYPosition}>
        <Stack direction="row">
          <ScriptTabHeader title="TOWNSFOLK" />
          <Stack
            direction="row"
            position="relative"
            left={pageXPosition}
            width={"100%"}
          >
            <Stack maxWidth={425} width={"50%"}>
              {leftTownsfolk.map((char) => (
                <ScriptEntry character={char} key={char.id} />
              ))}
            </Stack>
            <Stack maxWidth={425} width={"50%"}>
              {rightTownsfolk.map((char) => (
                <ScriptEntry character={char} key={char.id} />
              ))}
            </Stack>
          </Stack>
        </Stack>
        <ScriptDivider />
        <Stack direction="row">
          <ScriptTabHeader title="OUTSIDERS" />
          <Stack
            direction="row"
            position="relative"
            left={pageXPosition}
            width={"100%"}
          >
            <Stack maxWidth={425} width={"50%"}>
              {leftOutsiders.map((char) => (
                <ScriptEntry character={char} key={char.id} />
              ))}
            </Stack>
            <Stack maxWidth={425} width={"50%"}>
              {rightOutsiders.map((char) => (
                <ScriptEntry character={char} key={char.id} />
              ))}
            </Stack>
          </Stack>
        </Stack>
        <ScriptDivider />
        <Stack direction="row">
          <ScriptTabHeader title="MINIONS" />
          <Stack
            direction="row"
            position="relative"
            left={pageXPosition}
            width={"100%"}
          >
            <Stack maxWidth={425} width={"50%"}>
              {leftMinions.map((char) => (
                <ScriptEntry character={char} key={char.id} />
              ))}
            </Stack>
            <Stack maxWidth={425} width={"50%"}>
              {rightMinions.map((char) => (
                <ScriptEntry character={char} key={char.id} />
              ))}
            </Stack>
          </Stack>
        </Stack>
        <ScriptDivider />
        <Stack direction="row">
          <ScriptTabHeader title="DEMONS" />
          <Stack
            direction="row"
            position="relative"
            left={pageXPosition}
            width={"100%"}
          >
            <Stack maxWidth={425} width={"50%"}>
              {leftDemons.map((char) => (
                <ScriptEntry character={char} key={char.id} />
              ))}
            </Stack>
            <Stack maxWidth={425} width={"50%"}>
              {rightDemons.map((char) => (
                <ScriptEntry character={char} key={char.id} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <ScriptFooter author={authorName} />
    </StyledPaper>
  );
};

export default Script;
