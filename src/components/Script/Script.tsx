import React, { useRef } from "react";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import { useAppContext } from "contexts/AppContext";
import ScriptEntry from "./ScriptEntry";
import ScriptDivider from "./ScriptDivider";
import SaveScriptButton from "./SaveScriptButton";
import ScriptConfig from "./ScriptConfig";
import NightOrder from "./NightOrder";
import SaveNightOrderButton from "./SaveNightOrderButton";

const Script: React.FC = () => {
  const scriptRef = useRef();
  const {
    appState: { scriptName, authorName, characterList },
    setScriptRef,
  } = useAppContext();

  setScriptRef(scriptRef);

  if (characterList.length === 0) {
    return null;
  }

  return (
    <Stack alignItems="center">
      <ScriptConfig />
      <Paper
        variant="outlined"
        sx={{
          display: "inline-block",
          width: "900px",
          margin: "5%",
          position: "relative",
        }}
        ref={scriptRef}
      >
        <Stack marginTop={"1%"}>
          <ScriptDivider team="TOWNSFOLK" scriptName={scriptName} />
          {characterList
            .filter((char) => char.team == "townsfolk")
            .map((char) => (
              <ScriptEntry character={char} key={char.id} />
            ))}
          <ScriptDivider team="OUTSIDERS" />
          {characterList
            .filter((char) => char.team == "outsider")
            .map((char) => (
              <ScriptEntry character={char} key={char.id} />
            ))}
          <ScriptDivider team="MINIONS" />
          {characterList
            .filter((char) => char.team == "minion")
            .map((char) => (
              <ScriptEntry character={char} key={char.id} />
            ))}
          <ScriptDivider team="DEMONS" />
          {characterList
            .filter((char) => char.team == "demon")
            .map((char) => (
              <ScriptEntry character={char} key={char.id} />
            ))}
        </Stack>
        <Grid container marginLeft={"1%"}>
          <Grid item sm={10}>
            <Typography variant="scriptFooter">
              Homebrew script created by {authorName}.
            </Typography>
          </Grid>
          <Grid item sm={2}>
            <Typography variant="scriptFooter">
              *Not the first night.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <SaveScriptButton />
      <NightOrder />
      <SaveNightOrderButton />
    </Stack>
  );
};

export default Script;
