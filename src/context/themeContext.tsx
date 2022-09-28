import React, { ReactNode, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { IThemeContextApi } from "../types";

declare module "@mui/material/styles" {
  interface Theme {
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xl2: string;
      xl3: string;
      xl4: string;
      xl5: string;
      xl6: string;
    };
    button: {
      background1: string;
      background2: string;
    };
    page: {
      gutter: string;
    };
    selectedColor: string;
    cursor: number;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    fontSize?: {
      xs?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
      xl2?: string;
      xl3?: string;
      xl4?: string;
      xl5?: string;
      xl6?: string;
    };
    button?: {
      background1?: string;
      background2?: string;
    };
    page?: {
      gutter?: string;
    };
    selectedColor?: string;
    cursor?: number;
  }
}

const themeContextValue = {
  selectedColor: "#ff0000",
  cursor: 1,
};

const ThemeContext = React.createContext<IThemeContextApi>(themeContextValue);

interface Props {
  children: ReactNode;
}

const ThemeContextProvider = (props: Props) => {
  const { children } = props;
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const [selectedColor, setSelectedColor] = React.useState<string>(
    themeContextValue.selectedColor
  );
  const [cursor, setCursor] = React.useState<number>(themeContextValue.cursor);

  const value = React.useMemo(
    () => ({
      selectedColor: selectedColor,
      setSelectedColor: setSelectedColor,
      cursor: cursor,
      setCursor: setCursor,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        fontSize: {
          xs: "0.75rem",
          sm: "0.875rem",
          md: "1rem",
          lg: "1.25rem",
          xl: "1.5rem",
          xl2: "1.875rem",
          xl3: "2.25rem",
          xl4: "3rem",
          xl5: "3.75rem",
          xl6: "4.5rem",
        },
        button: {
          background1: "#5A32E1",
          background2: "#27CC8B",
        },
        palette: {
          mode,
        },
        page: {
          gutter: "5%",
        },
        selectedColor: selectedColor,
        cursor: cursor,
      }),
    [mode, selectedColor, cursor]
  );

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
