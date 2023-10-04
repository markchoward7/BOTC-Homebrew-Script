import React, { useMemo, createContext, ReactNode } from "react";
import useStylingContextReducer from "./StylingContext.reducer";

export type StylingContextType = ReturnType<typeof useStylingContextReducer>;
export const StylingContext = createContext<StylingContextType>(null);

const StylingContextProvider: React.FC<{
  children: ReactNode;
  style: "OFFICIAL" | "CUSTOM";
  item: "SCRIPT" | "NIGHT_ORDER";
}> = ({ children, style, item }) => {
  const [state, dispatch] = useStylingContextReducer(style, item);

  const value = useMemo<StylingContextType>(() => [state, dispatch], [state]);

  return (
    <StylingContext.Provider value={value}>{children}</StylingContext.Provider>
  );
};

export default StylingContextProvider;
