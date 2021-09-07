let state = {
  myProfile: {},
};

const mutations = {
  STORE_MY_PROFILE(state, profileToSave) {
    state.myProfile = profileToSave;
  },
};

const actions = {
  async fetchMyProfile(context) {
    // Get posts
    try {
      const response = await fetch(
        this.state.apiUrl.entryPoint + "/users/myProfile",
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      let myProfileResponse = await response.json();
      context.commit("STORE_MY_PROFILE", myProfileResponse);
      console.log(myProfileResponse);
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
