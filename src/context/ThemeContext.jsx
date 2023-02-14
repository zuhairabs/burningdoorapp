import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const DarkThemeProvider = ({ children }) => {
  const getTheme = () =>
    JSON.parse(localStorage.getItem("isDarkTheme")) ||
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const getBanner = () =>
    JSON.parse(localStorage.getItem("hideBanner")) || false;

  const getStory = () => JSON.parse(localStorage.getItem("hideStory")) || false;

  const [isDarkTheme, setIsDarkTheme] = useState(getTheme());
  const [hideBanner, setHideBanner] = useState(getBanner());
  const [hideStory, setHideStory] = useState(getStory());

  useEffect(() => {
    localStorage.setItem("isDarkTheme", isDarkTheme);
  }, [isDarkTheme]);

  useEffect(() => {
    localStorage.setItem("hideBanner", hideBanner);
  }, [hideBanner]);

  useEffect(() => {
    localStorage.setItem("hideStory", hideStory);
  }, [hideStory]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        setIsDarkTheme,
        hideBanner,
        hideStory,
        setHideBanner,
        setHideStory,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const {
    isDarkTheme,
    setIsDarkTheme,
    hideBanner,
    hideStory,
    setHideBanner,
    setHideStory,
  } = useContext(ThemeContext);
  return {
    isDarkTheme,
    setIsDarkTheme,
    hideBanner,
    hideStory,
    setHideBanner,
    setHideStory,
  };
};

export default ThemeContext;
