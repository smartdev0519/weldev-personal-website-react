import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { IThemeContextApi } from "../types";

const useAppTheme = () => {
  const themeContextApi = useContext<IThemeContextApi>(ThemeContext);

  return themeContextApi;
};

export default useAppTheme;
