import React from "react";
import { Stack } from "@mui/material";
import SaveImageButton from "components/SaveImageButton";
import Script from "./Script";
import NightOrder from "./NightOrder";
import { StylingContextProvider } from "contexts/StylingContext";
import StyleConfig from "components/ScriptItems/StyleConfig";

const OfficialScript: React.FC = () => {
  return (
    <Stack alignItems="center">
      <StylingContextProvider style="OFFICIAL" item="SCRIPT">
        <StyleConfig style="OFFICIAL" item="SCRIPT" />
        <Script />
      </StylingContextProvider>
      <SaveImageButton item="SCRIPT" />
      <StylingContextProvider style="OFFICIAL" item="NIGHT_ORDER">
        <StyleConfig style="OFFICIAL" item="NIGHT_ORDER" />
        <NightOrder />
      </StylingContextProvider>
      <SaveImageButton item="NIGHT_ORDER" />
    </Stack>
  );
};

export default OfficialScript;
