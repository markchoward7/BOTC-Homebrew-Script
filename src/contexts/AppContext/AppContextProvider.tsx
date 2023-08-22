import React, { PropsWithChildren, useMemo, createContext } from "react";
import useAppContextReducer from "./AppContext.reducer";

export type AppContextType = ReturnType<typeof useAppContextReducer>;
export const AppContext = createContext<AppContextType>(null);

const AppContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useAppContextReducer();

  const value = useMemo<AppContextType>(() => [state, dispatch], [state]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
