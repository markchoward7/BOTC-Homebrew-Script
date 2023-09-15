import { useReducer, MutableRefObject } from "react";
import { Character, ScriptFileMetaInfo } from "./types";

export enum ActionTypes {
  LOAD_JSON = "LOAD_JSON",
  SET_SCRIPT_REF = "SET_SCRIPT_REF",
  SET_NIGHT_ORDER_REF = "SET_NIGHT_ORDER_REF",
  SET_OFFICIAL_CHARACTERS = "SET_OFFICIAL_CHARACTERS",
  SET_OFFICIAL_NIGHT_ORDER = "SET_OFFICIAL_NIGHT_ORDER",
}
type setFile = {
  type: ActionTypes.LOAD_JSON;
  value: string;
};
type setScriptRef = {
  type: ActionTypes.SET_SCRIPT_REF;
  value: MutableRefObject<undefined>;
};
type setNightOrderRef = {
  type: ActionTypes.SET_NIGHT_ORDER_REF;
  value: MutableRefObject<undefined>;
};
type setOfficialCharacters = {
  type: ActionTypes.SET_OFFICIAL_CHARACTERS;
  value: Character[];
};

const buildInitialState = () => {
  const characterList: Character[] = [];
  const scriptRef: MutableRefObject<undefined> = null;
  const nightOrderRef: MutableRefObject<undefined> = null;
  const officialCharacters: Character[] = [];
  return {
    scriptName: "",
    authorName: "",
    scriptLogo: "",
    characterList,
    error: "",
    scriptRef,
    nightOrderRef,
    officialCharacters,
  };
};

type State = ReturnType<typeof buildInitialState>;
type Action = setFile | setScriptRef | setNightOrderRef | setOfficialCharacters;

const parseFileContents = (
  fileData: string
): { metaData: ScriptFileMetaInfo; characterList: (string | Character)[] } => {
  const data = JSON.parse(fileData) as Object[];
  const metaData = data.shift() as ScriptFileMetaInfo;
  const characterList = data as (Character | string)[];

  return { metaData, characterList };
};

const formatCharId = (str: string): string => {
  return str.replace("_", "").replace("-", "").toLowerCase();
};

const validateCharacterList = (
  characters: (string | Character)[],
  state: State
): Character[] => {
  const characterList: Character[] = [];
  characters.forEach((char) => {
    if (typeof char === "string") {
      const officialCharacter = state.officialCharacters.find(
        (official) => official.id === formatCharId(char)
      );
      if (officialCharacter === undefined) {
        throw Error(`Invalid character ${char}`);
      }
      officialCharacter.image = `https://github.com/bra1n/townsquare/blob/develop/src/assets/icons/${officialCharacter.id}.png?raw=true`;
      characterList.push(officialCharacter);
    } else if (char.name === undefined) {
      const officialCharacter = state.officialCharacters.find(
        (official) => official.id === formatCharId(char.id)
      );
      if (officialCharacter === undefined) {
        throw Error(`Invalid character ${char.id}`);
      }
      officialCharacter.image = `https://github.com/bra1n/townsquare/blob/develop/src/assets/icons/${officialCharacter.id}.png?raw=true`;
      characterList.push(officialCharacter);
    } else {
      characterList.push(char);
    }
  });
  return characterList;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.LOAD_JSON:
      try {
        const { metaData, characterList } = parseFileContents(action.value);
        return {
          ...state,
          characterList: validateCharacterList(characterList, state),
          scriptName: metaData.name,
          authorName: metaData.author,
          scriptLogo: metaData.logo,
          error: "",
        };
      } catch {
        return { ...state, error: "Error parsing JSON file" };
      }
    case ActionTypes.SET_SCRIPT_REF:
      return { ...state, scriptRef: action.value };
    case ActionTypes.SET_NIGHT_ORDER_REF:
      return { ...state, nightOrderRef: action.value };
    case ActionTypes.SET_OFFICIAL_CHARACTERS:
      return { ...state, officialCharacters: action.value };
    default:
      return state;
  }
};

const useAppContextReducer = (): [State, React.Dispatch<Action>] => {
  const initialState = buildInitialState();
  return useReducer(reducer, initialState);
};

export default useAppContextReducer;
