import { useReducer } from "react";

export enum ActionTypes {
  SET_IMAGE_SIZE = "SET_IMAGE_SIZE",
  SET_ROW_SIZE = "SET_ROW_SIZE",
  SET_FONT_SIZE = "SET_FONT_SIZE",
  SET_ABILITY_TEXT_POSITION = "SET_ABILITY_TEXT_POSITION",
}
type setImageSize = {
  type: ActionTypes.SET_IMAGE_SIZE;
  value: number;
};
type setRowSize = {
  type: ActionTypes.SET_ROW_SIZE;
  value: number;
};
type setFontSize = {
  type: ActionTypes.SET_FONT_SIZE;
  value: number;
};
type setAbilityTextPosition = {
  type: ActionTypes.SET_ABILITY_TEXT_POSITION;
  value: number;
};

const buildInitialState = () => {
  return {
    imageSize: 60,
    rowSize: 40,
    fontSize: 14,
    abilityTextPosition: -25,
  };
};

type State = ReturnType<typeof buildInitialState>;
type Action = setImageSize | setRowSize | setFontSize | setAbilityTextPosition;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SET_IMAGE_SIZE:
      return { ...state, imageSize: action.value };
    case ActionTypes.SET_ROW_SIZE:
      return { ...state, rowSize: action.value };
    case ActionTypes.SET_FONT_SIZE:
      return { ...state, fontSize: action.value };
    case ActionTypes.SET_ABILITY_TEXT_POSITION:
      return { ...state, abilityTextPosition: action.value };
    default:
      return state;
  }
};

const useScriptStylingContextReducer = (): [State, React.Dispatch<Action>] => {
  const initialState = buildInitialState();
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
};

export default useScriptStylingContextReducer;
