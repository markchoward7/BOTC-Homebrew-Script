import React from "react";
import { Stack } from "@mui/material";
import SaveImageButton from "components/SaveImageButton";
import Script from "./Script";

const OfficialScript: React.FC = () => {
  return (
    <Stack alignItems="center">
      <Script />
      <SaveImageButton item="SCRIPT" />
    </Stack>
  );
};

export default OfficialScript;
