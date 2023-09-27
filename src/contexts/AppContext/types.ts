export interface Character {
  id: string;
  name?: string;
  edition?: string;
  team?: "townsfolk" | "outsider" | "minion" | "demon" | "traveler" | "fabled";
  ability?: string;
  image?: string | string[];
  firstNight?: number;
  firstNightReminder?: string;
  otherNight?: number;
  otherNightReminder?: string;
  reminders?: string[];
  setup?: boolean;
  jinxes?: {
    id: string;
    reason: string;
  }[];
  special?: {
    name:
      | "grimoire"
      | "pointing"
      | "ghost-votes"
      | "distribute-roles"
      | "bag-disabled"
      | "bag-duplicate";
    type: "signal" | "ability" | "selection";
    time:
      | "pregame"
      | "day"
      | "night"
      | "firstNight"
      | "firstDay"
      | "otherNight"
      | "otherDay";
    global: "townsfolk" | "outsider" | "minion" | "demon" | "traveler";
  }[];
  official: boolean;
}

export interface ScriptFileMetaInfo {
  id: string;
  name: string;
  author: string;
  logo?: string;
  background?: string;
}
