import React from "react";
import { Stack } from "@mui/material";
import SaveImageButton from "components/SaveImageButton";
import NightOrder from "./NightOrder";
import Script from "./Script";
import { StylingContextProvider } from "contexts/StylingContext";
import StyleConfig from "components/ScriptItems/StyleConfig";

const CustomScript: React.FC = () => {
  return (
    <Stack alignItems="center">
      <StylingContextProvider style="CUSTOM" item="SCRIPT">
        <StyleConfig style="CUSTOM" item="SCRIPT" />
        <Script />
      </StylingContextProvider>
      <SaveImageButton item="SCRIPT" />
      <StylingContextProvider style="CUSTOM" item="NIGHT_ORDER">
        <StyleConfig style="CUSTOM" item="NIGHT_ORDER" />
        <NightOrder />
      </StylingContextProvider>
      <SaveImageButton item="NIGHT_ORDER" />
    </Stack>
  );
};

export default CustomScript;
