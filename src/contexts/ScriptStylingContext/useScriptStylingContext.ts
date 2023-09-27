import { useContext } from "react";
import { ActionTypes } from "./ScriptStylingContext.reducer";
import { ScriptStylingContext } from "./ScriptStylingContextProvider";

const useScriptStylingContext = () => {
  const context = useContext(ScriptStylingContext);
  const [scriptStyleState, dispatch] = context;

  const setScriptType = (scriptType: "CUSTOM" | "OFFICIAL") => {
    dispatch({ type: ActionTypes.SET_STYLE_TYPE, value: scriptType });
  };
  const setImageSize = (size: number, version: "HOMEBREW" | "OFFICIAL") => {
    dispatch({ type: ActionTypes.SET_IMAGE_SIZE, version, value: size });
  };
  const setImagePosition = (size: number, version: "HOMEBREW" | "OFFICIAL") => {
    dispatch({ type: ActionTypes.SET_IMAGE_POSITION, version, value: size });
  };
  const setRowSize = (size: number) => {
    dispatch({ type: ActionTypes.SET_ROW_SIZE, value: size });
  };
  const setFontSize = (size: number) => {
    dispatch({ type: ActionTypes.SET_FONT_SIZE, value: size });
  };
  const setAbilityTextPosition = (
    position: number,
    version: "HOMEBREW" | "OFFICIAL"
  ) => {
    dispatch({
      type: ActionTypes.SET_ABILITY_TEXT_POSITION,
      version,
      value: position,
    });
  };
  const setNameTextPosition = (
    position: number,
    version: "HOMEBREW" | "OFFICIAL"
  ) => {
    dispatch({
      type: ActionTypes.SET_NAME_TEXT_POSITION,
      version,
      value: position,
    });
  };
  const setScriptXPosition = (position: number) => {
    dispatch({ type: ActionTypes.SET_SCRIPT_X_POSITION, value: position });
  };
  const setScriptYPosition = (position: number) => {
    dispatch({ type: ActionTypes.SET_SCRIPT_Y_POSITION, value: position });
  };

  return {
    scriptStyleState,
    setScriptType,
    setImageSize,
    setImagePosition,
    setRowSize,
    setFontSize,
    setAbilityTextPosition,
    setNameTextPosition,
    setScriptXPosition,
    setScriptYPosition,
  };
};

export default useScriptStylingContext;
