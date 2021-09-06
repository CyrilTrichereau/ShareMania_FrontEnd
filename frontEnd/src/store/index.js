import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import posts from "./posts.js";
import auth from "./auth.js";
import profile from "./profile.js";
import postsGiphy from "./postsGiphy.js";

export default new Vuex.Store({
  modules: {
    posts,
    auth,
    profile,
    postsGiphy,
  },
  state: {
    isOpen: {
      headerMenu: "none",
      modifyMyProfile: false,
    },
    apiUrl: {
      entryPoint: "http://localhost:8080/api",
      profile: "dataStatic.profilesList[0]",
      posts: "dataStatic.postsList",
      giphyTrending: "https://api.giphy.com/v1/gifs/trending",
      apiKey: {
        forFeed: "Ysa02CTSrAfmSpJoUWeEgEWflZVItJEJ",
        forSeasonning: "SKYHGhbHI1X29v64M6UMK2XM0oe5xHso",
      },
      giphySearch: "https://api.giphy.com/v1/gifs/search",
    },
    pattern: {
      alias: "^[a-zA-ZÀ-ÿ1-9]{5,12}$",
      email: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$",
      password:
        "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[+=,;.\\-])([a-zA-Z0-9+=,;.\\-]){8,20}$",
    },
  },

  mutations: {
    CHANGE_IS_OPEN_MENU(state, menu) {
      if (state.isOpen.headerMenu === menu) {
        state.isOpen.headerMenu = "none";
      } else {
        state.isOpen.headerMenu = menu;
      }
    },
    CHANGE_IS_OPEN_MENU_FORCE(state, menu) {
      state.isOpen.headerMenu = menu;
    },
    CHANGE_IS_OPEN_MODIFY_PROFILE(state) {
      state.isOpen.modifyMyProfile = !state.isOpen.modifyMyProfile;
    },
    CHANGE_IS_OPEN_MODIFY_PROFILE_FORCE(state, boolean) {
      state.isOpen.modifyMyProfile = boolean;
    },
  },

  getters: {
  },

  actions: {
    openOrCloseMenuHeader(context, menu) {
      context.commit("CHANGE_IS_OPEN_MENU", menu);
    },
    openOrCloseMenuHeaderForce(context, menu) {
      context.commit("CHANGE_IS_OPEN_MENU_FORCE", menu);
    },
    changeProfileModifyOrShow(context) {
      context.commit("CHANGE_IS_OPEN_MODIFY_PROFILE");
    },
    changeProfileModifyOrShowForce(context, boolean) {
      context.commit("CHANGE_IS_OPEN_MODIFY_PROFILE", boolean);
    },
  },
});
