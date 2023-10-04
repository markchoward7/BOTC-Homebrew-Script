import React from "react";
import ThemeWrapper from "styling";
import { AppContextProvider } from "contexts/AppContext";
import ScriptItems from "components/ScriptItems";
import LoadData from "components/LoadData";
import { Stack } from "@mui/material";

const App: React.FC = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      spacing={5}
    >
      <ThemeWrapper>
        <AppContextProvider>
            <LoadData />
            <ScriptItems />
        </AppContextProvider>
      </ThemeWrapper>
    </Stack>
  );
};

export default App;
