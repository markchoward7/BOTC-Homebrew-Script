import React, { SyntheticEvent } from "react";
import { Tab, Tabs } from "@mui/material";
import { useScriptStylingContext } from "contexts/ScriptStylingContext";
import CustomScript from "./CustomScript";
import OfficialScript from "./OfficialScript";
import { useAppContext } from "contexts/AppContext";
import ScriptConfig from "./ScriptConfig";

const ScriptItems: React.FC = () => {
  const {
    scriptStyleState: { styleType },
    setScriptType,
  } = useScriptStylingContext();

  const {
    appState: { characterList },
  } = useAppContext();

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setScriptType(newValue === 0 ? "OFFICIAL" : "CUSTOM");
  };

  if (characterList.length === 0) {
    return null;
  }

  return (
    <>
      <Tabs value={styleType === "OFFICIAL" ? 0 : 1} onChange={handleChange}>
        <Tab label="Official" />
        <Tab label="Custom" />
      </Tabs>
      <ScriptConfig />
      {styleType === "OFFICIAL" ? <OfficialScript /> : <CustomScript />}
    </>
  );
};

export default ScriptItems;
