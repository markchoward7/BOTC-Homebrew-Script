import { Stack, TextField } from "@mui/material";
import { useScriptStylingContext } from "contexts/ScriptStylingContext";
import React, { ChangeEventHandler } from "react";

const ScriptConfig: React.FC = () => {
  const {
    scriptStyleState: { imageSize, rowSize, fontSize, abilityTextPosition },
    setImageSize,
    setRowSize,
    setFontSize,
    setAbilityTextPosition,
  } = useScriptStylingContext();

  const handleImageSizeChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setImageSize(Number(event.target.value));
  };
  const handleRowSizeChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setRowSize(Number(event.target.value));
  };
  const handleFontSizeChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFontSize(Number(event.target.value));
  };
  const handleAbilityPositionChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setAbilityTextPosition(Number(event.target.value));
  };

  return (
    <Stack width={200} spacing={1} marginTop={"5%"}>
      <TextField
        label="Image Size"
        type="number"
        value={imageSize}
        onChange={handleImageSizeChange}
      />
      <TextField
        label="Row Size"
        type="number"
        value={rowSize}
        onChange={handleRowSizeChange}
      />
      <TextField
        label="Font Size"
        type="number"
        value={fontSize}
        onChange={handleFontSizeChange}
      />
      <TextField
        label="Ability Text Position"
        type="number"
        value={abilityTextPosition}
        onChange={handleAbilityPositionChange}
      />
    </Stack>
  );
};

export default ScriptConfig;
