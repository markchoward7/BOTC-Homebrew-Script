import React from "react";
import { Stack } from "@mui/material";
import SaveImageButton from "components/SaveImageButton";
import Script from "./Script"
import NightOrder from "./NightOrder";

const OfficialScript: React.FC = () => {
  return (
    <Stack alignItems="center">
      <Script />
      <SaveImageButton item="SCRIPT" />
      <NightOrder />
      <SaveImageButton item="NIGHT_ORDER" />
    </Stack>
  );
};

export default OfficialScript;
