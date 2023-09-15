import { MutableRefObject, useContext } from "react";
import { ActionTypes } from "./AppContext.reducer";
import { AppContext } from "./AppContextProvider";
import { Character } from "./types";

const useAppContext = () => {
  const context = useContext(AppContext);
  const [appState, dispatch] = context;

  const loadJSON = (jsonData: string) => {
    dispatch({ type: ActionTypes.LOAD_JSON, value: jsonData });
  };
  const setScriptRef = (ref: MutableRefObject<undefined>) => {
    dispatch({ type: ActionTypes.SET_SCRIPT_REF, value: ref });
  };
  const setNightOrderRef = (ref: MutableRefObject<undefined>) => {
    dispatch({ type: ActionTypes.SET_NIGHT_ORDER_REF, value: ref });
  };
  const setOfficialCharacters = (characters: Character[]) => {
    dispatch({ type: ActionTypes.SET_OFFICIAL_CHARACTERS, value: characters });
  };

  return {
    appState,
    loadJSON,
    setScriptRef,
    setNightOrderRef,
    setOfficialCharacters,
  };
};

export default useAppContext;
