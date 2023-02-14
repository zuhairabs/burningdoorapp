import { Network } from "@capacitor/network";
import { Preferences } from "@capacitor/preferences";
import axios from "axios";
import { isEmpty } from "lodash";
import store from "../js/store";

const url = "https://theburningdoor.com/api";

export const fetcher = async (path) => {
  try {
    const res = await axios.get(`${url}${path}`);
    return res.data.data;
  } catch (err) {
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
  iconBg: "#eee",
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
  iconBg: "#444",
};

export const loadAsyncData = async () => {
  try {
    const allBlogs = await fetcher("/blogs");
    const recentBlogs = await fetcher("/recents");
    const topTenBlogs = await fetcher("/topten");
    const categoriesBlogs = await fetcher("/categories");
    const appDetails = await fetcher("/details");
    const stories = await fetcher("/storys");

    // update store
    store.dispatch("getAllBlogs", allBlogs);
    store.dispatch("getRecentBlogs", recentBlogs);
    store.dispatch("getTopTenBlogs", topTenBlogs);
    store.dispatch("getCategories", categoriesBlogs);
    store.dispatch("getAppDetails", appDetails);
    store.dispatch("getStories", stories);
    store.dispatch("setIsLoading", false);

    // Set Preferences
    setPreferences("blogs", allBlogs);
    setPreferences("recents", recentBlogs);
    setPreferences("topten", topTenBlogs);
    setPreferences("categories", categoriesBlogs);
    setPreferences("details", appDetails);
    setPreferences("storys", stories);
  } catch (err) {
    console.log(err);
  }
};

export const loadLocalData = async () => {
  try {
    const allBlogs = await getPreferences("blogs");
    const recentBlogs = await getPreferences("recents");
    const topTenBlogs = await getPreferences("topten");
    const categoriesBlogs = await getPreferences("categories");
    const appDetails = await getPreferences("details");
    const stories = await getPreferences("storys");

    store.dispatch("getAllBlogs", allBlogs ?? []);
    store.dispatch("getRecentBlogs", recentBlogs ?? []);
    store.dispatch("getTopTenBlogs", topTenBlogs ?? []);
    store.dispatch("getCategories", categoriesBlogs ?? []);
    store.dispatch("getAppDetails", appDetails ?? []);
    store.dispatch("getStories", stories ?? []);
  } catch (err) {
    console.log(err);
  }
};

export const updateBookmarkState = async (state) => {
  await Preferences.set({
    key: "bookmarks",
    value: JSON.stringify(state),
  });
};

export const setBookmarkState = async () => {
  const { value } = await Preferences.get({
    key: "bookmarks",
  });
  if (!isEmpty(JSON.parse(value))) {
    store.dispatch("setSTBookmarks", JSON.parse(value));
  }
};

export const updateNotesState = async (state) => {
  await Preferences.set({
    key: "notes",
    value: JSON.stringify(state),
  });
};

export const setNotesState = async () => {
  const { value } = await Preferences.get({
    key: "notes",
  });
  if (!isEmpty(JSON.parse(value))) {
    store.dispatch("setSTNotes", JSON.parse(value));
  }
};

export const updateBlogControls = async (state) => {
  await Preferences.set({
    key: "controls",
    value: JSON.stringify(state),
  });
};

export const setBlogControls = async () => {
  const { value } = await Preferences.get({
    key: "controls",
  });
  if (!isEmpty(JSON.parse(value))) {
    store.dispatch("setBlogControls", JSON.parse(value));
  }
};

const getPreferences = async (key) => {
  const { value } = await Preferences.get({
    key,
  });
  return JSON.parse(value);
};

const setPreferences = async (key, data) => {
  await Preferences.set({
    key,
    value: JSON.stringify(data),
  });
};

export async function checkStatus() {
  const status = await Network.getStatus();
  if (!status.connected) return false;
  const urlT = new URL(`${url}/blogs`);
  urlT.searchParams.set("rand", Date.now());

  try {
    const response = await fetch(urlT.toString(), { method: "HEAD" });

    return response.ok;
  } catch {
    return false;
  }
}
