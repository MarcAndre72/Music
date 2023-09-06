import { defineStore } from "pinia";

export default defineStore("modal", {
  state: () => ({
    isOpen: false,
  }),
  getters: {
    hiddenClass(state) {
      return !state.isOpen ? "hidden" : "";
    },
  },
});

// Path: Music3/music3/src/stores/user.js
