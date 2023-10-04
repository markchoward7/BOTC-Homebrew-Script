import React, { SyntheticEvent, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import CustomScript from "./CustomScript";
import OfficialScript from "./OfficialScript";
import { useAppContext } from "contexts/AppContext";

const ScriptItems: React.FC = () => {
  const [scriptStyle, setScriptStyle] = useState<string>("OFFICIAL");

  const {
    appState: { characterList },
  } = useAppContext();

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setScriptStyle(newValue === 0 ? "OFFICIAL" : "CUSTOM");
  };

  if (characterList.length === 0) {
    return null;
  }

  return (
    <>
      <Tabs value={scriptStyle === "OFFICIAL" ? 0 : 1} onChange={handleChange}>
        <Tab label="Official" />
        <Tab label="Custom" />
      </Tabs>
      {scriptStyle === "OFFICIAL" ? <OfficialScript /> : <CustomScript />}
    </>
  );
};

export default ScriptItems;
