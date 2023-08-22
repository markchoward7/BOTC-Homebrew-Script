import { useReducer, MutableRefObject } from "react";
import { Character, ScriptFileMetaInfo } from "./types";

export enum ActionTypes {
  LOAD_JSON = "LOAD_JSON",
  SET_SCRIPT_REF = "SET_SCRIPT_REF",
}
type setFile = {
  type: ActionTypes.LOAD_JSON;
  value: string;
};
type setScriptRef = {
  type: ActionTypes.SET_SCRIPT_REF;
  value: MutableRefObject<undefined>;
};

const buildInitialState = () => {
  const characterList: Character[] = [];
  const scriptRef: MutableRefObject<undefined> = null;
  return {
    scriptName: "",
    authorName: "",
    characterList,
    error: "",
    scriptRef,
  };
};

type State = ReturnType<typeof buildInitialState>;
type Action = setFile | setScriptRef;

const parseFileContents = (
  fileData: string
): { metaData: ScriptFileMetaInfo; characterList: Character[] } => {
  const data = JSON.parse(fileData) as Object[];
  const metaData = data.shift() as ScriptFileMetaInfo;
  const characterList = data as Character[];

  return { metaData, characterList };
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.LOAD_JSON:
      try {
        const { metaData, characterList } = parseFileContents(action.value);
        return {
          ...state,
          characterList,
          scriptName: metaData.name,
          authorName: metaData.author,
          error: "",
        };
      } catch {
        return { ...state, error: "Error parsing JSON file" };
      }
    case ActionTypes.SET_SCRIPT_REF:
      return { ...state, scriptRef: action.value };
    default:
      return state;
  }
};

const useAppContextReducer = (): [State, React.Dispatch<Action>] => {
  const initialState = buildInitialState();
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
};

export default useAppContextReducer;
