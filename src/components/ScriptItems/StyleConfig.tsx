import { Grid, TextField } from "@mui/material";
import { useStylingContext } from "contexts/StylingContext";
import React, { ChangeEventHandler } from "react";

const StyleConfig: React.FC<{
  style: "OFFICIAL" | "CUSTOM";
  item: "SCRIPT" | "NIGHT_ORDER";
}> = ({ style, item }) => {
  const {
    styleState,
    setImageSize,
    setImagePosition,
    setRowSize,
    setFontSize,
    setAbilityTextPosition,
    setNameTextPosition,
    setPageXPosition,
    setPageYPosition,
  } = useStylingContext();
  const {
    HOMEBREW,
    OFFICIAL,
    rowSize,
    fontSize,
    pageXPosition,
    pageYPosition,
  } = styleState;

  const itemLabelText = item === "SCRIPT" ? "Script" : "Night Order";

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

  const inputProps = { sx: { color: "rgba(255, 255, 255, 0.7)" } };

  return (
    <Grid container width={400} spacing={1} marginTop="5%">
      <Grid item xs={6}>
        <TextField
          label="Homebrew Image Size"
          type="number"
          value={HOMEBREW.imageSize}
          onChange={handleHomebrewImageSizeChange}
          InputProps={inputProps}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Homebrew Image Position"
          type="number"
          value={HOMEBREW.imagePosition}
          onChange={handleHomebrewImagePositionChange}
          InputProps={inputProps}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Official Image Size"
          type="number"
          value={OFFICIAL.imageSize}
          onChange={handleOfficialImageSizeChange}
          InputProps={inputProps}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Official Image Position"
          type="number"
          value={OFFICIAL.imagePosition}
          onChange={handleOfficialImagePositionChange}
          InputProps={inputProps}
        />
      </Grid>
      {style === "OFFICIAL" || item === "SCRIPT" ? (
        <>
          <Grid item xs={6}>
            <TextField
              label="Homebrew Ability Text Position"
              type="number"
              value={HOMEBREW.abilityTextPosition}
              onChange={handleHomebrewAbilityPositionChange}
              InputProps={inputProps}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Official Ability Text Position"
              type="number"
              value={OFFICIAL.abilityTextPosition}
              onChange={handleOfficialAbilityPositionChange}
              InputProps={inputProps}
            />
          </Grid>
        </>
      ) : null}
      {style === "CUSTOM" || item == "NIGHT_ORDER" ? (
        <>
          <Grid item xs={6}>
            <TextField
              label="Homebrew Name Text Position"
              type="number"
              value={HOMEBREW.nameTextPosition}
              onChange={handleHomebrewNamePositionChange}
              InputProps={inputProps}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Official Name Text Position"
              type="number"
              value={OFFICIAL.nameTextPosition}
              onChange={handleOfficialNamePositionChange}
              InputProps={inputProps}
            />
          </Grid>
        </>
      ) : null}
      <Grid item xs={6}>
        <TextField
          label="Row Size"
          type="number"
          value={rowSize}
          onChange={(event) => setRowSize(Number(event.target.value))}
          InputProps={inputProps}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Font Size"
          type="number"
          value={fontSize}
          onChange={(event) => setFontSize(Number(event.target.value))}
          InputProps={inputProps}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label={`${itemLabelText} X Axis Position`}
          type="number"
          value={pageXPosition}
          onChange={(event) => setPageXPosition(Number(event.target.value))}
          InputProps={inputProps}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label={`${itemLabelText} Y Axis Position`}
          type="number"
          value={pageYPosition}
          onChange={(event) => setPageYPosition(Number(event.target.value))}
          InputProps={inputProps}
        />
      </Grid>
    </Grid>
  );
};

export default StyleConfig;
