import { useReducer } from "react";

export enum ActionTypes {
  SET_STYLE_TYPE = "SET_STYLE_TYPE",
  SET_IMAGE_SIZE = "SET_IMAGE_SIZE",
  SET_IMAGE_POSITION = "SET_IMAGE_POSITION",
  SET_ROW_SIZE = "SET_ROW_SIZE",
  SET_FONT_SIZE = "SET_FONT_SIZE",
  SET_ABILITY_TEXT_POSITION = "SET_ABILITY_TEXT_POSITION",
  SET_NAME_TEXT_POSITION = "SET_NAME_TEXT_POSITION",
  SET_SCRIPT_X_POSITION = "SET_SCRIPT_X_POSITION",
  SET_SCRIPT_Y_POSITION = "SET_SCRIPT_Y_POSITION",
}
type setStyleType = {
  type: ActionTypes.SET_STYLE_TYPE;
  value: "CUSTOM" | "OFFICIAL";
};
type setImageSize = {
  type: ActionTypes.SET_IMAGE_SIZE;
  version: "HOMEBREW" | "OFFICIAL";
  value: number;
};
type setImagePosition = {
  type: ActionTypes.SET_IMAGE_POSITION;
  version: "HOMEBREW" | "OFFICIAL";
  value: number;
};
type setAbilityTextPosition = {
  type: ActionTypes.SET_ABILITY_TEXT_POSITION;
  version: "HOMEBREW" | "OFFICIAL";
  value: number;
};
type setNameTextPosition = {
  type: ActionTypes.SET_NAME_TEXT_POSITION;
  version: "HOMEBREW" | "OFFICIAL";
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
type setScriptXPosition = {
  type: ActionTypes.SET_SCRIPT_X_POSITION;
  value: number;
};
type setScriptYPosition = {
  type: ActionTypes.SET_SCRIPT_Y_POSITION;
  value: number;
};

const buildInitialState = () => {
  const styleType = "OFFICIAL" as "CUSTOM" | "OFFICIAL";
  return {
    styleType,
    CUSTOM: {
      HOMEBREW: {
        imageSize: 60,
        imagePosition: 0,
        abilityTextPosition: -25,
        nameTextPosition: 0,
      },
      OFFICIAL: {
        imageSize: 35,
        imagePosition: 5,
        abilityTextPosition: -15,
        nameTextPosition: 8,
      },
      rowSize: 40,
      fontSize: 14,
      scriptXPosition: 0,
      scriptYPosition: 0,
    },
    OFFICIAL: {
      HOMEBREW: {
        imageSize: 95,
        imagePosition: 0,
        abilityTextPosition: 0,
        nameTextPosition: 0,
      },
      OFFICIAL: {
        imageSize: 50,
        imagePosition: 10,
        abilityTextPosition: 20,
        nameTextPosition: 0,
      },
      rowSize: 75,
      fontSize: 14,
      scriptXPosition: 0,
      scriptYPosition: 0,
    },
  };
};

type State = ReturnType<typeof buildInitialState>;
type Action =
  | setStyleType
  | setImageSize
  | setImagePosition
  | setRowSize
  | setFontSize
  | setAbilityTextPosition
  | setNameTextPosition
  | setScriptXPosition
  | setScriptYPosition;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SET_STYLE_TYPE:
      return { ...state, styleType: action.value };
    case ActionTypes.SET_IMAGE_SIZE:
      return {
        ...state,
        [state.styleType]: {
          ...state[state.styleType],
          [action.version]: {
            ...state[state.styleType][action.version],
            imageSize: action.value,
          },
        },
      };
    case ActionTypes.SET_IMAGE_POSITION:
      return {
        ...state,
        [state.styleType]: {
          ...state[state.styleType],
          [action.version]: {
            ...state[state.styleType][action.version],
            imagePosition: action.value,
          },
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
          [action.version]: {
            ...state[state.styleType][action.version],
            abilityTextPosition: action.value,
          },
        },
      };
    case ActionTypes.SET_NAME_TEXT_POSITION:
      return {
        ...state,
        CUSTOM: {
          ...state.CUSTOM,
          [action.version]: {
            ...state.CUSTOM[action.version],
            nameTextPosition: action.value,
          },
        },
      };
    case ActionTypes.SET_SCRIPT_X_POSITION:
      return {
        ...state,
        [state.styleType]: {
          ...state[state.styleType],
          scriptXPosition: action.value,
        },
      };
    case ActionTypes.SET_SCRIPT_Y_POSITION:
      return {
        ...state,
        [state.styleType]: {
          ...state[state.styleType],
          scriptYPosition: action.value,
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
