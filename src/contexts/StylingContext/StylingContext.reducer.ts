import { useReducer } from "react";
import { ColorTheme } from "./colors";

export enum ActionTypes {
  SET_IMAGE_SIZE = "SET_IMAGE_SIZE",
  SET_IMAGE_POSITION = "SET_IMAGE_POSITION",
  SET_ROW_SIZE = "SET_ROW_SIZE",
  SET_FONT_SIZE = "SET_FONT_SIZE",
  SET_ABILITY_TEXT_POSITION = "SET_ABILITY_TEXT_POSITION",
  SET_NAME_TEXT_POSITION = "SET_NAME_TEXT_POSITION",
  SET_PAGE_X_POSITION = "SET_PAGE_X_POSITION",
  SET_PAGE_Y_POSITION = "SET_PAGE_Y_POSITION",
  SET_PAGE_RIGHT_POSITION = "SET_PAGE_RIGHT_POSITION",
  SET_PAGE_WIDTH = 'SET_PAGE_WIDTH',
  SET_PAGE_HEIGHT = 'SET_PAGE_HEIGHT',
  SET_CHARACTER_TYPE_HEADER_WIDTH = "SET_CHARACTER_TYPE_HEADER_WIDTH",
  SET_COLUMN_GAP = "SET_COLUMN_GAP",
  SET_COLOR_THEME = 'SET_COLOR_THEME',
}

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
type setPageXPosition = {
  type: ActionTypes.SET_PAGE_X_POSITION;
  value: number;
};
type setPageYPosition = {
  type: ActionTypes.SET_PAGE_Y_POSITION;
  value: number;
};
type setPageRightPosition = {
  type: ActionTypes.SET_PAGE_RIGHT_POSITION;
  value: number;
};
type setPageWidth = {
  type: ActionTypes.SET_PAGE_WIDTH;
  value: number;
};
type setPageHeight = {
  type: ActionTypes.SET_PAGE_HEIGHT;
  value: number;
};
type setCharacterTypeHeaderWidth = {
  type: ActionTypes.SET_CHARACTER_TYPE_HEADER_WIDTH;
  value: number;
};
type setColumnGap = {
  type: ActionTypes.SET_COLUMN_GAP;
  value: number;
}
type setColorTheme = {
  type: ActionTypes.SET_COLOR_THEME;
  value: ColorTheme;
}

type State = {
  HOMEBREW: {
    imageSize: number;
    imagePosition: number;
    abilityTextPosition: number;
    nameTextPosition: number;
  };
  OFFICIAL: {
    imageSize: number;
    imagePosition: number;
    abilityTextPosition: number;
    nameTextPosition: number;
  };
  rowSize: number;
  fontSize: number;
  pageXPosition: number;
  pageYPosition: number;
  pageRightPosition: number;
  pageWidth: number;
  pageHeight: number;
  characterTypeHeaderWidth: number;
  columnGap: number;
  colorTheme: ColorTheme
};

type Action =
  | setImageSize
  | setImagePosition
  | setRowSize
  | setFontSize
  | setAbilityTextPosition
  | setNameTextPosition
  | setPageXPosition
  | setPageYPosition
  | setPageRightPosition
  | setPageWidth
  | setPageHeight
  | setCharacterTypeHeaderWidth
  | setColumnGap
  | setColorTheme;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SET_IMAGE_SIZE:
      return {
        ...state,
        [action.version]: {
          ...state[action.version],
          imageSize: action.value,
        },
      };
    case ActionTypes.SET_IMAGE_POSITION:
      return {
        ...state,
        [action.version]: {
          ...state[action.version],
          imagePosition: action.value,
        },
      };
    case ActionTypes.SET_ABILITY_TEXT_POSITION:
      return {
        ...state,
        [action.version]: {
          ...state[action.version],
          abilityTextPosition: action.value,
        },
      };
    case ActionTypes.SET_NAME_TEXT_POSITION:
      return {
        ...state,
        [action.version]: {
          ...state[action.version],
          nameTextPosition: action.value,
        },
      };
    case ActionTypes.SET_ROW_SIZE:
      return {
        ...state,
        rowSize: action.value,
      };
    case ActionTypes.SET_FONT_SIZE:
      return {
        ...state,
        fontSize: action.value,
      };
    case ActionTypes.SET_PAGE_X_POSITION:
      return {
        ...state,
        pageXPosition: action.value,
      };
    case ActionTypes.SET_PAGE_Y_POSITION:
      return {
        ...state,
        pageYPosition: action.value,
      };
    case ActionTypes.SET_PAGE_RIGHT_POSITION:
      return {
        ...state,
        pageRightPosition: action.value,
      };
    case ActionTypes.SET_PAGE_WIDTH:
      return {
        ...state,
        pageWidth: action.value,
      };
    case ActionTypes.SET_PAGE_HEIGHT:
      return {
        ...state,
        pageHeight: action.value,
      };
    case ActionTypes.SET_CHARACTER_TYPE_HEADER_WIDTH:
      return {
        ...state,
        characterTypeHeaderWidth: action.value,
      };
    case ActionTypes.SET_COLUMN_GAP:
      return {
        ...state,
        columnGap: action.value,
      };
    case ActionTypes.SET_COLOR_THEME:
      return {
        ...state,
        colorTheme: action.value,
      };
    default:
      return state;
  }
};

const customScriptPreset: State = {
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
  pageXPosition: 0,
  pageYPosition: 0,
  pageRightPosition: 0,
  pageWidth: 900,
  pageHeight: 1272,
  characterTypeHeaderWidth: 30,
  columnGap: 0,
  colorTheme: 'red',
};
const officialScriptPreset: State = {
  HOMEBREW: {
    imageSize: 95,
    imagePosition: 0,
    abilityTextPosition: 0,
    nameTextPosition: 0,
  },
  OFFICIAL: {
    imageSize: 50,
    imagePosition: 15,
    abilityTextPosition: 15,
    nameTextPosition: 0,
  },
  rowSize: 82,
  fontSize: 14,
  pageXPosition: 0,
  pageYPosition: 0,
  pageRightPosition: 20,
  pageWidth: 900,
  pageHeight: 1272,
  characterTypeHeaderWidth: 40,
  columnGap: 15,
  colorTheme: 'red',
};
const customNightOrderPreset: State = {
  HOMEBREW: {
    imageSize: 60,
    imagePosition: 0,
    abilityTextPosition: 0,
    nameTextPosition: 10,
  },
  OFFICIAL: {
    imageSize: 40,
    imagePosition: 5,
    abilityTextPosition: 0,
    nameTextPosition: 10,
  },
  rowSize: 50,
  fontSize: 14,
  pageXPosition: 0,
  pageYPosition: 0,
  pageRightPosition: 0,
  pageWidth: 900,
  pageHeight: 1272,
  characterTypeHeaderWidth: 30,
  columnGap: 0,
  colorTheme: 'red',
};
const officialNightOrderPreset: State = {
  HOMEBREW: {
    imageSize: 50,
    imagePosition: 0,
    abilityTextPosition: 0,
    nameTextPosition: 0,
  },
  OFFICIAL: {
    imageSize: 50,
    imagePosition: 0,
    abilityTextPosition: 0,
    nameTextPosition: 0,
  },
  rowSize: 50,
  fontSize: 14,
  pageXPosition: 15,
  pageYPosition: 15,
  pageRightPosition: 0,
  pageWidth: 900,
  pageHeight: 1272,
  characterTypeHeaderWidth: 40,
  columnGap: 0,
  colorTheme: 'red',
};

const useStylingContextReducer = (
  style: "OFFICIAL" | "CUSTOM",
  item: "SCRIPT" | "NIGHT_ORDER"
): [State, React.Dispatch<Action>] => {
  const officialScriptReducer = reducer;
  const customScriptReducer = reducer;
  const officialNightOrderReducer = reducer;
  const customNightOrderReducer = reducer;

  if (style === "CUSTOM" && item === "SCRIPT") {
    return useReducer(customScriptReducer, customScriptPreset);
  } else if (style === "OFFICIAL" && item === "SCRIPT") {
    return useReducer(officialScriptReducer, officialScriptPreset);
  } else if (style === "CUSTOM" && item === "NIGHT_ORDER") {
    return useReducer(customNightOrderReducer, customNightOrderPreset);
  } else if (style === "OFFICIAL" && item === "NIGHT_ORDER") {
    return useReducer(officialNightOrderReducer, officialNightOrderPreset);
  }
};

export default useStylingContextReducer;
