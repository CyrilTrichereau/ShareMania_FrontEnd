import * as dataStatic from "./dataStatic.js";

let state = {
  myProfile: {},
};

const mutations = {
  STORE_MY_PROFILE(state, profileToSave) {
   this.state.myProfile = profileToSave;
  },
};

const actions = {
  fetchMyProfile(context) {
    const myProfile = dataStatic.profilesList[27];
    context.commit("STORE_MY_PROFILE", myProfile);
  },

  async fetchProfile({ commit }) {
    try {
      const response = await fetch(this.state.apiUrl.profile);
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
};

const getters = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
