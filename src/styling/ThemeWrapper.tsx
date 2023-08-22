import React, { PropsWithChildren } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "styling/theme";

const ThemeWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
