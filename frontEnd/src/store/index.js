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
      logIn: "http://...",
      forgottenPassword: "http://...",
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
      alias: "^[a-zA-ZÀ-ÿ1-9]{1,18}$",
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
    byOrderRecent: (state) => {
      return state.listPost.sort((a, b) => (a.time > b.time ? -1 : 1));
    },
    byOrderPopular: (state) => {
      return state.listPost.sort((a, b) =>
        (a.onFire_id.length / a.cold_id.length) > (b.onFire_id.length / b.cold_id.length) ? -1 : 1
      );
    },
    byOrderShared: (state) => {
      return state.listPost.sort((a, b) =>
        a.shareNumber > b.shareNumber ? -1 : 1
      );
    },
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
    onFirePercentage(onFireArray, coldArray) {
      return Math.round(
        onFireArray.length / ((onFireArray.length + coldArray.length) / 100)
      );
    },
    elapsedTime(time) {
      // calculate time elapsed in minutes
      let calcTime = Math.round((Date.now() / 1000 - time) / 60);
      let timeValue = "min";
      // if inferior at 60 min
      if (calcTime <= 60) {
        return calcTime.toString() + " " + timeValue;
      } else {
        // if inferior at 24 hours
        calcTime = Math.round(calcTime / 60);
        if (calcTime <= 24) {
          if (calcTime === 1) {
            timeValue = "heure";
          } else {
            timeValue = "heures";
          }
          return calcTime.toString() + " " + timeValue;
        } else {
          // if inferior at 30 days
          calcTime = Math.round(calcTime / 24);
          if (calcTime <= 30) {
            if (calcTime === 1) {
              timeValue = "jour";
            } else {
              timeValue = "jours";
            }
            return calcTime.toString() + " " + timeValue;
          } else {
            // if inferior at 12 months
            calcTime = Math.round(calcTime / 30);
            if (calcTime <= 12) {
              timeValue = "mois";

              return calcTime.toString() + " " + timeValue;
            } else {
              // else in years
              calcTime = Math.round(calcTime / 12);
              if (calcTime === 1) {
                timeValue = "an";
              } else {
                timeValue = "ans";
              }
              return calcTime.toString() + " " + timeValue;
            }
          }
        }
      }
    },
  },
});
