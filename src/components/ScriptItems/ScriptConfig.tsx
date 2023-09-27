import { Grid, Stack, TextField } from "@mui/material";
import { useScriptStylingContext } from "contexts/ScriptStylingContext";
import React, { ChangeEventHandler } from "react";

const ScriptConfig: React.FC = () => {
  const {
    scriptStyleState,
    setImageSize,
    setImagePosition,
    setRowSize,
    setFontSize,
    setAbilityTextPosition,
    setNameTextPosition,
    setScriptXPosition,
    setScriptYPosition,
  } = useScriptStylingContext();
  const { styleType } = scriptStyleState;
  const {
    HOMEBREW,
    OFFICIAL,
    rowSize,
    fontSize,
    scriptXPosition,
    scriptYPosition,
  } = scriptStyleState[styleType];

  const handleHomebrewImageSizeChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setImageSize(Number(event.target.value), "HOMEBREW");
  };
  const handleOfficialImageSizeChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setImageSize(Number(event.target.value), "OFFICIAL");
  };
  const handleHomebrewImagePositionChange: ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    setImagePosition(Number(event.target.value), "HOMEBREW");
  };
  const handleOfficialImagePositionChange: ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    setImagePosition(Number(event.target.value), "OFFICIAL");
  };
  const handleRowSizeChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setRowSize(Number(event.target.value));
  };
  const handleFontSizeChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFontSize(Number(event.target.value));
  };
  const handleHomebrewAbilityPositionChange: ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    setAbilityTextPosition(Number(event.target.value), "HOMEBREW");
  };
  const handleOfficialAbilityPositionChange: ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    setAbilityTextPosition(Number(event.target.value), "OFFICIAL");
  };
  const handleHomebrewNamePositionChange: ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    setNameTextPosition(Number(event.target.value), "HOMEBREW");
  };
  const handleOfficialNamePositionChange: ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    setNameTextPosition(Number(event.target.value), "OFFICIAL");
  };
  const handleScriptXPositionChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setScriptXPosition(Number(event.target.value));
  };
  const handleScriptYPositionChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setScriptYPosition(Number(event.target.value));
  };

  return (
    <Grid container width={400} spacing={1} marginTop="5%">
      <Grid item xs={6}>
        <TextField
          label="Homebrew Image Size"
          type="number"
          value={HOMEBREW.imageSize}
          onChange={handleHomebrewImageSizeChange}
          InputProps={{ sx: { color: "rgba(255, 255, 255, 0.7)" } }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Homebrew Image Position"
          type="number"
          value={HOMEBREW.imagePosition}
          onChange={handleHomebrewImagePositionChange}
          InputProps={{ sx: { color: "rgba(255, 255, 255, 0.7)" } }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Official Image Size"
          type="number"
          value={OFFICIAL.imageSize}
          onChange={handleOfficialImageSizeChange}
          InputProps={{ sx: { color: "rgba(255, 255, 255, 0.7)" } }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Official Image Position"
          type="number"
          value={OFFICIAL.imagePosition}
          onChange={handleOfficialImagePositionChange}
          InputProps={{ sx: { color: "rgba(255, 255, 255, 0.7)" } }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Homebrew Ability Text Position"
          type="number"
          value={HOMEBREW.abilityTextPosition}
          onChange={handleHomebrewAbilityPositionChange}
          InputProps={{ sx: { color: "rgba(255, 255, 255, 0.7)" } }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Official Ability Text Position"
          type="number"
          value={OFFICIAL.abilityTextPosition}
          onChange={handleOfficialAbilityPositionChange}
          InputProps={{ sx: { color: "rgba(255, 255, 255, 0.7)" } }}
        />
      </Grid>
      {styleType === "CUSTOM" ? (
        <>
          <Grid item xs={6}>
            <TextField
              label="Homebrew Name Text Position"
              type="number"
              value={HOMEBREW.nameTextPosition}
              onChange={handleHomebrewNamePositionChange}
              InputProps={{ sx: { color: "rgba(255, 255, 255, 0.7)" } }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Official Name Text Position"
              type="number"
              value={OFFICIAL.nameTextPosition}
              onChange={handleOfficialNamePositionChange}
              InputProps={{ sx: { color: "rgba(255, 255, 255, 0.7)" } }}
            />
          </Grid>
        </>
      ) : null}
      <Grid item xs={6}>
        <TextField
          label="Row Size"
          type="number"
          value={rowSize}
          onChange={handleRowSizeChange}
          InputProps={{ sx: { color: "rgba(255, 255, 255, 0.7)" } }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Font Size"
          type="number"
          value={fontSize}
          onChange={handleFontSizeChange}
          InputProps={{ sx: { color: "rgba(255, 255, 255, 0.7)" } }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Script X Axis Position"
          type="number"
          value={scriptXPosition}
          onChange={handleScriptXPositionChange}
          InputProps={{ sx: { color: "rgba(255, 255, 255, 0.7)" } }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Script Y Axis Position"
          type="number"
          value={scriptYPosition}
          onChange={handleScriptYPositionChange}
          InputProps={{ sx: { color: "rgba(255, 255, 255, 0.7)" } }}
        />
      </Grid>
    </Grid>
  );
};

export default ScriptConfig;
