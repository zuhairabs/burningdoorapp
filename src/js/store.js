import { createStore } from "framework7/lite";
import { isEmpty } from "lodash";
import { Story } from "../components/Stories/Stories";
import {
  fetcher,
  updateBlogControls,
  updateBookmarkState,
  updateNotesState,
} from "../lib/utils";

const store = createStore({
  state: {
    // local state
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
    bookmarks: [],
    notes: [],
    // end local state
    allBlogs: [],
    recentBlogs: [],
    topTenBlogs: [],
    categories: [],
    categoryBlogs: [],
    searchedBlogs: [],
    stories: [],
    singleBlog: {},
    appDetails: {},
    currentStory: 0,
    loading: true,
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
      updateBlogControls(state.blogControls);
    },
    updateStyle({ state }, newValues) {
      state.blogControls[1] = newValues;
      state.blogControls = [...state.blogControls];
      updateBlogControls(state.blogControls);
    },
    updateTheme({ state }, newValues) {
      state.blogControls[2] = newValues;
      state.blogControls = [...state.blogControls];
      updateBlogControls(state.blogControls);
    },
    setBlogControls({ state }, controls) {
      state.blogControls = controls;
    },
    setIsLoading({ state }, value) {
      state.loading = value;
    },
    setBookmarks({ state }, blog) {
      state.bookmarks = [...state.bookmarks, ...blog];
      updateBookmarkState(state.bookmarks);
    },
    setSTBookmarks({ state }, blog) {
      state.bookmarks = [...state.bookmarks, ...blog];
    },
    removeBookmarks({ state }, blog) {
      const updatedBookmarks = state.bookmarks.filter(
        (mark) => mark.id !== blog.id
      );
      state.bookmarks = updatedBookmarks;
      updateBookmarkState(state.bookmarks);
    },
    setNotes({ state }, note) {
      state.notes = [...state.notes, ...note];
      updateNotesState(state.notes);
    },
    setSTNotes({ state }, note) {
      state.notes = [...state.notes, ...note];
    },
    removeNote({ state }, id) {
      const updatedNotes = state.notes.filter((note) => note.id !== id);
      state.notes = updatedNotes;
      updateNotesState(state.notes);
    },
    editNote({ state }, note) {
      const index = state.notes.findIndex((n) => n.id === note.id);
      state.notes[index] = note;
      state.notes = [...state.notes];
      updateNotesState(state.notes);
    },
    setCurrentStory({ state }, index) {
      state.currentStory = index;
    },
    getStories({ state }, data) {
      if (!isEmpty(data)) {
        const updatedData = data.storys.map((store) => {
          store.stories.map((story) => {
            story.content = Story;
            return story;
          });
          return store;
        });
        state.stories = updatedData;
      }
    },
    getAllBlogs({ state }, data) {
      state.allBlogs = data;
    },
    getRecentBlogs({ state }, data) {
      state.recentBlogs = data;
    },
    getTopTenBlogs({ state }, data) {
      state.topTenBlogs = data;
    },
    getCategories({ state }, data) {
      state.categories = data;
    },
    getAppDetails({ state }, data) {
      state.appDetails = data;
    },
    async getCategory({ state }, id) {
      const data = await fetcher(`/category/${id}`);
      state.categoryBlogs = data;
    },
    async getSearchedBlogs({ state }, searchInput) {
      const data = await fetcher(`/search/${searchInput}`, () => {});
      state.searchedBlogs = data;
    },
    async getSingleBlog({ state }, id) {
      const data = await fetcher(`/blog/${id}`);
      state.singleBlog = data[0];
    },
  },
});
export default store;
