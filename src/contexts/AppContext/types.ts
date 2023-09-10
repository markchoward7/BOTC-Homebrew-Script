export interface Character {
  id: string;
  name: string;
  team: "townsfolk" | "outsider" | "minion" | "demon";
  ability: string;
  image?: string;
  firstNight?: number;
  firstNightReminder?: string;
  otherNight?: number;
  otherNightReminder?: string;
  reminders?: string[];
  setup?: boolean;
}

export interface ScriptFileMetaInfo {
  id: string;
  name: string;
  author: string;
  almanac: string;
  logo?: string;
}
