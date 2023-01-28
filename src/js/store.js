import { createStore } from "framework7/lite";

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
  },
  getters: {
    blogControls({ state }) {
      console.log("reactive called");
      return state.blogControls;
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
  },
});
export default store;
