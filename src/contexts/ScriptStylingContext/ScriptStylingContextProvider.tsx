import React, { PropsWithChildren, useMemo, createContext } from "react";
import useScriptStylingContextReducer from "./ScriptStylingContext.reducer";

export type ScriptStylingContextType = ReturnType<
  typeof useScriptStylingContextReducer
>;
export const ScriptStylingContext =
  createContext<ScriptStylingContextType>(null);

const ScriptStylingContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useScriptStylingContextReducer();

  const value = useMemo<ScriptStylingContextType>(
    () => [state, dispatch],
    [state]
  );

  return (
    <ScriptStylingContext.Provider value={value}>
      {children}
    </ScriptStylingContext.Provider>
  );
};

export default ScriptStylingContextProvider;
