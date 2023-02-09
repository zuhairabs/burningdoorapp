import React from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../../context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "../../lib/utlis";

const ThemeWrapper = ({ children }) => {
  const { isDarkTheme } = useTheme();

  return (
    <ThemeProvider theme={isDarkTheme ? DARK_THEME : LIGHT_THEME}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
