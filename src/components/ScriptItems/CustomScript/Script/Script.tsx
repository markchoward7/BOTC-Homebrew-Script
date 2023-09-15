import React, { useEffect, useRef } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { useAppContext } from "contexts/AppContext";
import ScriptEntry from "./ScriptEntry";
import ScriptDivider from "./ScriptDivider";
import StyledPaper from "components/StyledPaper";
import { useScriptStylingContext } from "contexts/ScriptStylingContext";

const Script: React.FC = () => {
  const scriptRef = useRef();
  const {
    appState: { scriptName, authorName, characterList },
    setScriptRef,
  } = useAppContext();

  const {
    scriptStyleState: {
      CUSTOM: { scriptXPosition, scriptYPosition },
    },
  } = useScriptStylingContext();

  useEffect(() => {
    setScriptRef(scriptRef);
  }, [scriptRef]);

  return (
    <StyledPaper ref={scriptRef}>
      <Stack
        marginTop="1%"
        position="relative"
        left={scriptXPosition}
        top={scriptYPosition}
      >
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
      <Grid container marginLeft="1%" position="absolute" bottom={10}>
        <Grid item sm={10}>
          <Typography variant="scriptFooter">
            Script created by {authorName}.
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography variant="scriptFooter">*Not the first night.</Typography>
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

export default Script;
