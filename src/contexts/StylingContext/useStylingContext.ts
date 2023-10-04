import { useContext } from "react";
import { ActionTypes } from "./StylingContext.reducer";
import { StylingContext } from "./StylingContextProvider";

const useStylingContext = () => {
  const context = useContext(StylingContext);
  const [styleState, dispatch] = context;

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
  const setPageXPosition = (position: number) => {
    dispatch({ type: ActionTypes.SET_PAGE_X_POSITION, value: position });
  };
  const setPageYPosition = (position: number) => {
    dispatch({ type: ActionTypes.SET_PAGE_Y_POSITION, value: position });
  };

  return {
    styleState,
    setImageSize,
    setImagePosition,
    setRowSize,
    setFontSize,
    setAbilityTextPosition,
    setNameTextPosition,
    setPageXPosition,
    setPageYPosition,
  };
};

export default useStylingContext;
