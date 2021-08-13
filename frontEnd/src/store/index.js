import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import * as dataStatic from "./dataStatic.js";

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  // -----------------------------------
  // ----------- STATE -----------------
  // -----------------------------------
  state: {
    apiUrl: {
      logIn: "http://...",
      forgottenPassword: "http://...",
      profile: "http://...",
      posts: "http://...",
    },
    header: {
      isOpenMenu: "none",
    },

    myProfileModify: false,

    // -----------------
    // MY PROFILE OBJECT
    myProfile: {},

    // -----------------
    // LIST POST ARRAY OF OBJECTS
    listPost: [],
  },

  // -----------------------------------
  // ----------- MUTATIONS -----------------
  // -----------------------------------
  mutations: {
    CHANGE_PROFILE_IS_MODIFY(state) {
      state.myProfileModify = !state.myProfileModify;
    },
    CHANGE_IS_OPEN_MENU(state, menu) {
      if (state.header.isOpenMenu === menu) {
        state.header.isOpenMenu = "none";
      } else {
        state.header.isOpenMenu = menu;
      }
    },
    CHANGE_IS_OPEN_MENU_FORCE(state, menu) {
      state.header.isOpenMenu = menu;
    },
    STORE_LIST_POSTS(state, listPosts) {
      state.listPost = listPosts;
    },
    STORE_MY_PROFILE(state, profile) {
      state.myProfile = profile;
    },
  },

  // -----------------------------------
  // ----------- GETTERS -----------------
  // -----------------------------------

  // A UTILISER POUR TRIER LES POSTS
  getters: {},

  // -----------------------------------
  // ----------- ACTIONS -----------------
  // -----------------------------------
  actions: {
    openOrCloseMenuHeader(context, menu) {
      context.commit("CHANGE_IS_OPEN_MENU", menu);
    },
    openOrCloseMenuHeaderForce(context, menu) {
      context.commit("CHANGE_IS_OPEN_MENU_FORCE", menu);
    },
    changeProfileModifyOrShow(context) {
      context.commit("CHANGE_PROFILE_IS_MODIFY");
    },
    fetchMyProfile(context) {
      const myProfile = dataStatic.profilesList[0];
      context.commit("STORE_MY_PROFILE", myProfile);
    },
    fetchPostsList(context) {
      const list = dataStatic.postsList;
      context.commit("STORE_LIST_POSTS", list);
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

    async sendLogIn(bodyObject) {
      try {
        const response = await fetch(this.apiUrl.logIn, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          body: JSON.stringify(bodyObject),
        });

        return await response.json();
      } catch (error) {
        console.log(error);
      }
    },

  async sendForgottenPassword(bodyObject) {
    try {
      const response = await fetch(this.apiUrl.forgottenPassword, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(bodyObject),
      });

      return await response.json();
    } catch (error) {
      console.log(error);
    }
  },


    async fetchPosts({ commit }) {
      try {
        const response = await fetch(this.apiUrl.posts);
        commit("STORE_LIST_POSTS", await response.body.dataStatic.items);
      } catch (error) {
        console.log(error);
      }
    },

    async sendPostObject(bodyObject, methodToUse) {
      try {
        const response = await fetch(this.apiUrl.posts, {
          method: methodToUse,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          body: JSON.stringify(bodyObject),
        });

        return await response.json();
      } catch (error) {
        console.log(error);
      }
    },

    async fetchProfile({ commit }) {
      try {
        const response = await fetch(this.apiUrl.profile);
        commit("STORE_MY_PROFILE", await response.body.dataStatic.items);
      } catch (error) {
        console.log(error);
      }
    },

    async sendProfileObject(bodyObject, methodToUse) {
      try {
        const response = await fetch(this.apiUrl.profile, {
          method: methodToUse,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          body: JSON.stringify(bodyObject),
        });

        return await response.json();
      } catch (error) {
        console.log(error);
      }
    },
  },

  // -----------------------------------
  // ----------- MODULES -----------------
  // -----------------------------------
  modules: {},
});

//

//

//

//

//

//

//

//

//

//

//

// DANS INDEX.JS

// const headerModule = {
//   namespaced: true,
//   state: {
//     testState: true,
//   },
// };

// export default new Vuex.Store({
//   state: {
//     isOpenMenu: "none",
//   },
//   modules: {
//     header: headerModule,
//     testHeader: testHeaderModule,
//   },
// });

// DANS HOME

// <p class="h1 text-dark">
// normalement je suis aprés : <br> {{ header.testState }}
// </p>

// computed: {
//   ...mapState(['header', ['testState']]),
