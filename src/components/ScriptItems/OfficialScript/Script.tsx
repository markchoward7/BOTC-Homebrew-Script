import React, { useEffect, useRef } from "react";
import {
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useAppContext } from "contexts/AppContext";
import ScriptEntry from "./ScriptEntry";
import TabHeader from "./TabHeader";
import ScriptDivider from "./ScriptDivider";
import SideBar from "./SideBar";
import ScriptFooter from "./ScriptFooter";
import ScriptHeader from "./ScriptHeader";

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
    setScriptRef,
  } = useAppContext();

  useEffect(() => {
    setScriptRef(scriptRef);
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
    });
  }

  return (
    <Paper
      variant="outlined"
      sx={{
        display: "inline-block",
        width: 900,
        height: 1200,
        margin: "5%",
        position: "relative",
      }}
      ref={scriptRef}
    >
      <SideBar />
      <ScriptHeader title={scriptName} image={scriptLogo} />
      <Stack marginTop={"1%"}>
        <Stack direction="row">
          <TabHeader title="TOWNSFOLK" />
          <Stack direction="row">
            <Stack maxWidth={425}>
              {leftTownsfolk.map((char) => (
                <ScriptEntry character={char} key={char.id} />
              ))}
            </Stack>
            <Stack maxWidth={425}>
              {rightTownsfolk.map((char) => (
                <ScriptEntry character={char} key={char.id} />
              ))}
            </Stack>
          </Stack>
        </Stack>
        <ScriptDivider />
        <Stack direction="row">
          <TabHeader title="OUTSIDERS" />
          <Stack direction="row">
            <Stack maxWidth={425}>
              {leftOutsiders.map((char) => (
                <ScriptEntry character={char} key={char.id} />
              ))}
            </Stack>
            <Stack maxWidth={425}>
              {rightOutsiders.map((char) => (
                <ScriptEntry character={char} key={char.id} />
              ))}
            </Stack>
          </Stack>
        </Stack>
        <ScriptDivider />
        <Stack direction="row">
          <TabHeader title="MINIONS" />
          <Stack direction="row">
            <Stack maxWidth={425}>
              {leftMinions.map((char) => (
                <ScriptEntry character={char} key={char.id} />
              ))}
            </Stack>
            <Stack maxWidth={425}>
              {rightMinions.map((char) => (
                <ScriptEntry character={char} key={char.id} />
              ))}
            </Stack>
          </Stack>
        </Stack>
        <ScriptDivider />
        <Stack direction="row">
          <TabHeader title="DEMONS" />
          <Stack direction="row">
            <Stack maxWidth={425}>
              {leftDemons.map((char) => (
                <ScriptEntry character={char} key={char.id} />
              ))}
            </Stack>
            <Stack maxWidth={425}>
              {rightDemons.map((char) => (
                <ScriptEntry character={char} key={char.id} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <ScriptFooter author={authorName} />
    </Paper>
  );
};

export default Script;
