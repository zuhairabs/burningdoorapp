import axios from "axios";

const url = "https://theburningdoor.com/api";

export const fetcher = async (path, cb) => {
  try {
    const res = await axios.get(`${url}${path}`);
    cb();
    return res.data.data;
  } catch (err) {
    cb();
    throw err;
  }
};

export function readingTime(text) {
  const wordsPerMinute = 200;
  const numberOfWords = text?.split(" ").length;
  const readingTimeInMinutes = numberOfWords / wordsPerMinute;
  return Math.ceil(readingTimeInMinutes);
}

export function getLink(photoId) {
  return `https://theburningdoor.com/blogadmin/images/${photoId}`;
}

export const LIGHT_THEME = {
  primary: "#fff",
  card: "#fff",
  cardImage: "#dddddd",
  pill: "#eee",
  pillText: "#4d4d4d",
  textPrimary: "#000",
  textCard: "#2d2d2d",
  textCardLight: "#9d9d9d",
  seeMore: "#7d7d7d",
  settingsIconBg: "#eee",
  settingsIcon: "#aaa",
  tabMain: "#fff",
  tabIconBg: "#fff",
  tabIcon: "#868686",
  searchBg: "#eee",
  inputColor: "#000",
  searchPlaceholder: "#adadad",
  searchIcon: "#adadad",

  aboutImage: "#212121",
  shade: "255, 255, 255",
  iconColor: "#aaa",
  toggleInactiveColor: "#ddd",
};

export const DARK_THEME = {
  primary: "#1d1d1d",
  card: "#2b2b2b",
  cardImage: "#4b4b4b",
  pill: "#2b2b2b",
  pillText: "#d9d9d9",
  textPrimary: "#d9d9d9",
  textCard: "#d9d9d9",
  textCardLight: "#888",
  seeMore: "#888",
  settingsIconBg: "#2b2b2b",
  settingsIcon: "#888",
  tabMain: "#2b2b2b",
  tabIconBg: "#2b2b2b",
  tabIcon: "#d9d9d9",
  searchBg: "#2b2b2b",
  inputColor: "#d9d9d9",
  searchPlaceholder: "#888",
  searchIcon: "#888",

  aboutImage: "#fff",
  shade: "29, 29, 29",
  iconColor: "#aaa",
  toggleInactiveColor: "#444",
};
