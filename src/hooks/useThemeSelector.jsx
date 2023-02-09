import { useEffect, useState } from "react";

export const useThemeOld = () => {
  const getTheme = () =>
    JSON.parse(localStorage.getItem("isDarkTheme")) ||
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getTheme());

  useEffect(() => {
    localStorage.setItem("isDarkTheme", isDarkTheme);
  }, [isDarkTheme]);

  return [isDarkTheme, setIsDarkTheme];
};
