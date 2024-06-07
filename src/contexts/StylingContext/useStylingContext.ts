import { useContext } from "react";
import { ActionTypes } from "./StylingContext.reducer";
import { StylingContext } from "./StylingContextProvider";
import { ColorTheme } from "./colors";

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
  const setPageRightPosition = (position: number) => {
    dispatch({ type: ActionTypes.SET_PAGE_RIGHT_POSITION, value: position });
  };
  const setPageWidth = (position: number) => {
    dispatch({ type: ActionTypes.SET_PAGE_WIDTH, value: position });
  };
  const setPageHeight = (position: number) => {
    dispatch({ type: ActionTypes.SET_PAGE_HEIGHT, value: position });
  };
  const setCharacterTypeHeaderWidth = (w: number) => {
    dispatch({ type: ActionTypes.SET_CHARACTER_TYPE_HEADER_WIDTH, value: w });
  }
  const setColumnGap = (gap: number) => {
    dispatch({ type: ActionTypes.SET_COLUMN_GAP, value: gap });
  }
  const setColorTheme = (colorTheme: ColorTheme) => {
    dispatch({ type: ActionTypes.SET_COLOR_THEME, value: colorTheme });
  }

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
    setPageRightPosition,
    setPageWidth,
    setPageHeight,
    setCharacterTypeHeaderWidth,
    setColumnGap,
    setColorTheme,
  };
};

export default useStylingContext;
