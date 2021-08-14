const state = {};

const mutations = {};

const actions = {
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
};

const getters = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
