import React from "react";
import { Stack } from "@mui/material";
import { useAppContext } from "contexts/AppContext";
import NightOrder from "./NightOrder";
import Script from "./Script";
import ScriptConfig from "./ScriptConfig";
import SaveNightOrderButton from "./SaveNightOrderButton";
import SaveScriptButton from "./SaveScriptButton";

const ScriptItems: React.FC = () => {
  const {
    appState: { characterList },
  } = useAppContext();

  if (characterList.length === 0) {
    return null;
  }

  return (
    <Stack alignItems="center">
      <ScriptConfig />
      <Script />
      <SaveScriptButton />
      <NightOrder />
      <SaveNightOrderButton />
    </Stack>
  );
};

export default ScriptItems;
