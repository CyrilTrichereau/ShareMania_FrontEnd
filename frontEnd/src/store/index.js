import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import * as dataStatic from "./dataStatic.js";

export default new Vuex.Store({
  // -----------------------------------
  // ----------- STATE -----------------
  // -----------------------------------
  state: {
    header: {
      isOpenMenu: "none",
    },

    // -----------------
    // MY PROFILE OBJECT
    myProfile: {
      _id: "",
      urlPicture: "a",
      alias: "dede",
      moderator: false,
      service: "",
      email: "",
    },

    // -----------------
    // LIST POST ARRAY OF OBJECTS
    listPost: [
      {
        posterProfile: {
          alias: "",
          urlPicture: "",
          service: "",
        },
        _id: "",
        time: "",
        content: {
          type: "picture, video, 9gag",
          text: "",
          urlPicture: "",
          originalPosterProfile: {
            alias: "",
            urlPicture: "",
            text: "",
          },
        },
        onFire_Id: ["", ""],
        cold_Id: ["", ""],
        numberInteraction: "onFireId.lenght + coldId.lenght",
        percentageOnFire: 50,
        shareNumber: "share_Id.lenght",
        commentNumber: "commentsList.lenght",
        commentsList: [
          {
            profile: {
              alias: "",
              urlPicture: "",
            },
            time: "",
            text: "",
            onFire_Id: ["", ""],
            cold_Id: ["", ""],
            numberInteraction: "onFireId.lenght + coldId.lenght",
            percentageOnFire: 50,
          },
        ],
      },
    ],

    // -----------------
    // LIST POST ARRAY OF OBJECTS
    listPost9gag: [
      {
        posterProfile: {
          alias: "",
          urlPicture: "",
        },
        _id: "",
        time: "",
        content: {
          type: "picture, video, 9gag",
          text: "",
          urlPicture: "",
        },
        percentageLike: 50,
        commentNumber: 0,
      },
    ],
  },

  // -----------------------------------
  // ----------- MUTATIONS -----------------
  // -----------------------------------
  mutations: {
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
    fetchPosts9Gaga({ commit }) {
      fetch("https://9gag.com/v1/featured-posts", {
        method: "GET",
        headers: {
          cookie: "____lo=FR; ____ri=1635; ts1=a98b7934bf7740ecc7a3f8569be1ac64099e78aa",
        },
      })
        .then((response) => {
          commit("STORE_POSTS_NINEGAG", response.body.dataStatic.items);
        })
        .catch((error) => {
          console.log(error.statusText);
        });
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
