import React from "react";
import { createTheme } from "@mui/material/styles";
import OhChewy from "./fonts/Oh Chewy.ttf";
import Lordish from "./fonts/Lordish-Regular.ttf"
import Seagram from "./fonts/Seagram tfb.ttf"
import Vollkorn from "./fonts/Vollkorn-Regular.ttf"
import AppleGaramond from "./fonts/AppleGaramond.ttf";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    script: React.CSSProperties;
    scriptName: React.CSSProperties;
    scriptSubtitle: React.CSSProperties;
    scriptFooter: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    script?: React.CSSProperties;
    scriptName: React.CSSProperties;
    scriptSubtitle: React.CSSProperties;
    scriptFooter: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    script: true;
    scriptName: true;
    scriptSubtitle: true;
    scriptFooter: true;
  }
}

const theme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "rgb(0,0,0)",
    },
  },
  typography: {
    script: {
      color: "black",
      fontFamily: "applegaramond",
      fontSize: 14,
      lineHeight: 1.25,
    },
    scriptSubtitle: {
      color: "black",
      fontFamily: "vollkorn",
      fontSize: 16,
      lineHeight: 1.25,
    },
    scriptName: {
      color: "black",
      fontFamily: "lordish",
      fontSize: 24,
    },
    scriptFooter: {
      color: "rgb(100, 75, 75)",
      fontFamily: "applegaramond",
      fontSize: 12,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "url('/page.jpg')",
          backgroundSize: "cover",
        },
      },
    },
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
              fontFamily: "lordish",
              src: `url(${Lordish}) format("truetype")`,
            },
          },
          {
            "@font-face": {
              fontFamily: "vollkorn",
              src: `url(${Vollkorn}) format("truetype")`,
            },
          },
          {
            "@font-face": {
              fontFamily: "seagram",
              src: `url(${Seagram}) format("truetype")`,
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
