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
  const setScriptRefs = (refs: MutableRefObject<undefined>[]) => {
    dispatch({ type: ActionTypes.SET_SCRIPT_REFS, value: refs });
  };
  const setNightOrderRefs = (refs: MutableRefObject<undefined>[]) => {
    dispatch({ type: ActionTypes.SET_NIGHT_ORDER_REFS, value: refs });
  };
  const setOfficialCharacters = (characters: Character[]) => {
    dispatch({ type: ActionTypes.SET_OFFICIAL_CHARACTERS, value: characters.map(c => ({ ...c, image: `/images/${c.id}.webp` })) });
  };

  return {
    appState,
    loadJSON,
    setScriptRefs,
    setNightOrderRefs,
    setOfficialCharacters,
  };
};

export default useAppContext;
