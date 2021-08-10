import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import * as dataStatic from "./dataStatic.js"

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
        state.header.isOpenMenu = 'none';
      } else {
        state.header.isOpenMenu = menu;
      }
    },
    CHANGE_IS_OPEN_MENU_FORCE(state, menu) {
      state.header.isOpenMenu = menu;
    },
    SAVE_LIST_POSTS(state, listPosts) {
      state.listPost = listPosts;
    },
    SAVE_MY_PROFILE(state, profile) {
      state.myProfile = profile;
    },
  },

  // -----------------------------------
  // ----------- GETTERS -----------------
  // -----------------------------------
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
    saveMyProfile(context) {
      const myProfile = dataStatic.profilesList[0]
      context.commit("SAVE_MY_PROFILE", myProfile);
    },
    savePostsList(context) {
      const list = dataStatic.postsList
      context.commit("SAVE_LIST_POSTS", list);
    },
    onFirePercentage(onFireArray, coldArray) {
      return Math.round(onFireArray.length / ((onFireArray.length + coldArray.length) / 100));
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
