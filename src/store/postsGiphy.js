const state = {
  gifDataSavedTemporary: { empty: true },
};

const mutations = {
  STORE_DATA_GIF_TEMPORARY(state, gifToSave) {
    state.gifDataSavedTemporary = gifToSave;
  },
};

const actions = {
  saveTemporaryGifDataForShare({ commit }, objectToSave) {
    commit("STORE_DATA_GIF_TEMPORARY", objectToSave);
  },
};
const getters = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
