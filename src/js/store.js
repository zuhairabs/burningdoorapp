import { createStore } from "framework7/lite";
import { Story } from "../components/Stories/Stories";
import { fetcher } from "../lib/utlis";

const store = createStore({
  state: {
    blogControls: [
      {
        id: 0,
        name: "size",
        value: 15,
      },
      {
        id: 1,
        name: "style",
        options: [
          {
            id: 0,
            name: "default",
            value: "'Montserrat', sans-serif;",
            isSelected: true,
          },
          {
            id: 1,
            name: "times new roman",
            value: "'EB Garamond', serif;",
            isSelected: false,
          },
          {
            id: 2,
            name: "mono",
            value: "'Roboto Mono', monospace;",
            isSelected: false,
          },
        ],
      },
      {
        id: 2,
        name: "theme",
        options: [
          {
            id: 0,
            name: "default",
            bg: "#f7f7f7",
            color: "#363636",
            quoteColor: "#fff",
            shadeColor: "247,247,247",
            isSelected: true,
          },
          {
            id: 1,
            name: "dark",
            bg: "#212121",
            color: "#d9d9d9",
            lightColor: "#aaaaaa",
            lightBg: "#383838",
            quoteColor: "#383838",
            shadeColor: "33,33,33",
            isSelected: false,
          },
          {
            id: 2,
            name: "sepia",
            bg: "#ffeacb",
            color: "#553e1b",
            lightColor: "#a07536",
            quoteColor: "#fff",
            shadeColor: "255, 234, 203",
            isSelected: false,
          },
        ],
      },
    ],
    allBlogs: [],
    recentBlogs: [],
    topTenBlogs: [],
    bookmarks: [],
    notes: [],
    categories: [],
    categoryBlogs: [],
    searchedBlogs: [],
    stories: [],
    currentStory: 0,
    singleBlog: {},
    appDetails: {},
    hideBanner: false,
    hideStory: false,
    loading: false,
  },
  getters: {
    blogControls({ state }) {
      return state.blogControls;
    },
    isLoading({ state }) {
      return state.loading;
    },
    getBlogs({ state }) {
      return state.allBlogs;
    },
    getRecentBlogs({ state }) {
      return state.recentBlogs;
    },
    getTopTenBlogs({ state }) {
      return state.topTenBlogs;
    },
    getBookmarks({ state }) {
      return state.bookmarks;
    },
    getCategories({ state }) {
      return state.categories;
    },
    getCategoryBlogs({ state }) {
      return state.categoryBlogs;
    },
    getSearchedBlogs({ state }) {
      return state.searchedBlogs;
    },
    getAppDetails({ state }) {
      return state.appDetails;
    },
    getSingleBlog({ state }) {
      return state.singleBlog;
    },
    getNotes({ state }) {
      return state.notes;
    },
    getHideStory({ state }) {
      return state.hideStory;
    },
    getHideBanner({ state }) {
      return state.hideBanner;
    },
    getStories({ state }) {
      return state.stories;
    },
    getCurrentStory({ state }) {
      return state.currentStory;
    },
  },
  actions: {
    updateSize({ state }, value) {
      state.blogControls[0] = { ...state.blogControls[0], value };
    },
    updateStyle({ state }, newValues) {
      state.blogControls[1] = newValues;
      state.blogControls = [...state.blogControls];
    },
    updateTheme({ state }, newValues) {
      state.blogControls[2] = newValues;
      state.blogControls = [...state.blogControls];
    },
    setIsLoading({ state }, value) {
      state.loading = value;
    },
    setBookmarks({ state }, blog) {
      console.log({ blog });
      state.bookmarks = [...state.bookmarks, blog];
    },
    removeBookmarks({ state }, blog) {
      const updatedBookmarks = state.bookmarks.filter(
        (mark) => mark.id !== blog.id
      );
      state.bookmarks = updatedBookmarks;
    },
    setNotes({ state }, note) {
      state.notes = [...state.notes, note];
    },
    removeNote({ state }, id) {
      const updatedNotes = state.notes.filter((note) => note.id !== id);
      state.notes = updatedNotes;
    },
    editNote({ state }, note) {
      const index = state.notes.findIndex((n) => n.id === note.id);
      state.notes[index] = note;
      state.notes = [...state.notes];
    },
    hideBanner({ state }, value) {
      state.hideBanner = value;
    },
    hideStory({ state }, value) {
      state.hideStory = value;
    },
    setCurrentStory({ state }, index) {
      state.currentStory = index;
    },
    async getStories({ state, dispatch }) {
      dispatch("setIsLoading", true);
      const data = await fetcher("/storys", () => {
        dispatch("setIsLoading", false);
      });
      const updatedData = data.storys.map((store) => {
        store.stories.map((story) => {
          story.content = Story;
          return story;
        });
        return store;
      });
      state.stories = updatedData;
    },
    async getAllBlogs({ state, dispatch }) {
      dispatch("setIsLoading", true);
      const data = await fetcher("/blogs", () => {
        dispatch("setIsLoading", false);
      });
      state.allBlogs = data;
    },
    async getRecentBlogs({ state, dispatch }) {
      dispatch("setIsLoading", true);
      const data = await fetcher("/recents", () => {
        dispatch("setIsLoading", false);
      });
      state.recentBlogs = data;
    },
    async getTopTenBlogs({ state, dispatch }) {
      dispatch("setIsLoading", true);
      const data = await fetcher("/topten", () => {
        dispatch("setIsLoading", false);
      });
      state.topTenBlogs = data;
    },
    async getCategories({ state, dispatch }) {
      dispatch("setIsLoading", true);
      const data = await fetcher("/categories", () => {
        dispatch("setIsLoading", false);
      });
      state.categories = data;
    },
    async getCategory({ state, dispatch }, id) {
      dispatch("setIsLoading", true);
      const data = await fetcher(`/category/${id}`, () => {
        dispatch("setIsLoading", false);
      });
      state.categoryBlogs = data;
    },
    async getSearchedBlogs({ state }, searchInput) {
      const data = await fetcher(`/search/${searchInput}`, () => {});
      state.searchedBlogs = data;
    },
    async getSingleBlog({ state, dispatch }, id) {
      dispatch("setIsLoading", true);
      const data = await fetcher(`/blog/${id}`, () => {
        dispatch("setIsLoading", false);
      });
      state.singleBlog = data[0];
    },
    async getAppDetails({ state }) {
      const data = await fetcher("/details", () => {});
      state.appDetails = data;
    },
  },
});
export default store;
