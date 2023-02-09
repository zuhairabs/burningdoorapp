import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const DarkThemeProvider = ({ children }) => {
  const getTheme = () =>
    JSON.parse(localStorage.getItem("isDarkTheme")) ||
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDarkTheme, setIsDarkTheme] = useState(getTheme());

  useEffect(() => {
    localStorage.setItem("isDarkTheme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);
  return { isDarkTheme, setIsDarkTheme };
};

export default ThemeContext;
