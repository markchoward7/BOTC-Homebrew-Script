import { useReducer } from "react";

export enum ActionTypes {
  SET_STYLE_TYPE = "SET_STYLE_TYPE",
  SET_IMAGE_SIZE = "SET_IMAGE_SIZE",
  SET_ROW_SIZE = "SET_ROW_SIZE",
  SET_FONT_SIZE = "SET_FONT_SIZE",
  SET_ABILITY_TEXT_POSITION = "SET_ABILITY_TEXT_POSITION",
}
type setStyleType = {
  type: ActionTypes.SET_STYLE_TYPE;
  value: "CUSTOM" | "OFFICIAL";
};
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
  const styleType = "OFFICIAL" as "CUSTOM" | "OFFICIAL";
  return {
    styleType,
    CUSTOM: {
      imageSize: 60,
      rowSize: 40,
      fontSize: 14,
      abilityTextPosition: -25,
    },
    OFFICIAL: {
      imageSize: 95,
      rowSize: 75,
      fontSize: 14,
      abilityTextPosition: 0,
    },
  };
};

type State = ReturnType<typeof buildInitialState>;
type Action =
  | setStyleType
  | setImageSize
  | setRowSize
  | setFontSize
  | setAbilityTextPosition;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SET_STYLE_TYPE:
      return { ...state, styleType: action.value };
    case ActionTypes.SET_IMAGE_SIZE:
      return {
        ...state,
        [state.styleType]: {
          ...state[state.styleType],
          imageSize: action.value,
        },
      };
    case ActionTypes.SET_ROW_SIZE:
      return {
        ...state,
        [state.styleType]: { ...state[state.styleType], rowSize: action.value },
      };
    case ActionTypes.SET_FONT_SIZE:
      return {
        ...state,
        [state.styleType]: {
          ...state[state.styleType],
          fontSize: action.value,
        },
      };
    case ActionTypes.SET_ABILITY_TEXT_POSITION:
      return {
        ...state,
        [state.styleType]: {
          ...state[state.styleType],
          abilityTextPosition: action.value,
        },
      };
    default:
      return state;
  }
};

const useScriptStylingContextReducer = (): [State, React.Dispatch<Action>] => {
  const initialState = buildInitialState();
  return useReducer(reducer, initialState);
};

export default useScriptStylingContextReducer;
