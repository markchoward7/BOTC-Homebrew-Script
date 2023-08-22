import { useContext } from "react";
import { ActionTypes } from "./ScriptStylingContext.reducer";
import { ScriptStylingContext } from "./ScriptStylingContextProvider";

const useScriptStylingContext = () => {
  const context = useContext(ScriptStylingContext);
  const [scriptStyleState, dispatch] = context;

  const setImageSize = (size: number) => {
    dispatch({ type: ActionTypes.SET_IMAGE_SIZE, value: size });
  };
  const setRowSize = (size: number) => {
    dispatch({ type: ActionTypes.SET_ROW_SIZE, value: size });
  };
  const setFontSize = (size: number) => {
    dispatch({ type: ActionTypes.SET_FONT_SIZE, value: size });
  };
  const setAbilityTextPosition = (position: number) => {
    dispatch({ type: ActionTypes.SET_ABILITY_TEXT_POSITION, value: position });
  };

  return {
    scriptStyleState,
    setImageSize,
    setRowSize,
    setFontSize,
    setAbilityTextPosition,
  };
};

export default useScriptStylingContext;
