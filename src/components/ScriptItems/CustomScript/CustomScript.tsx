import React from "react";
import { Stack } from "@mui/material";
import SaveImageButton from "components/SaveImageButton";
import NightOrder from "./NightOrder";
import Script from "./Script";

const CustomScript: React.FC = () => {
  return (
    <Stack alignItems="center">
      <Script />
      <SaveImageButton item="SCRIPT" />
      <NightOrder />
      <SaveImageButton item="NIGHT_ORDER" />
    </Stack>
  );
};

export default CustomScript;
