import React from "react";
import { createTheme } from "@mui/material/styles";
import OhChewy from "./fonts/Oh Chewy.ttf";
import AppleGaramond from "./fonts/AppleGaramond.ttf";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    script: React.CSSProperties;
    scriptName: React.CSSProperties;
    scriptFooter: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    script?: React.CSSProperties;
    scriptName: React.CSSProperties;
    scriptFooter: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    script: true;
    scriptName: true;
    scriptFooter: true;
  }
}

const theme = createTheme({
  palette: {
    mode: "dark",
    background: { paper: "white" },
  },
  typography: {
    script: {
      color: "black",
      fontFamily: "applegaramond",
      fontSize: 14,
    },
    scriptName: {
      color: "black",
      fontFamily: "ohchewwy",
      fontSize: 24,
    },
    scriptFooter: {
      color: "black",
      fontFamily: "applegaramond",
      fontSize: 12,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: [
          {
            "@font-face": {
              fontFamily: "ohchewwy",
              src: `url(${OhChewy}) format("truetype")`,
            },
          },
          {
            "@font-face": {
              fontFamily: "applegaramond",
              src: `url(${AppleGaramond}) format("truetype")`,
            },
          },
        ],
      },
    },
  },
});

export default theme;
