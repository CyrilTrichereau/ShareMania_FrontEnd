const state = {
  listPostGiphy: [],
  gifDataSavedTemporary: { empty: true },
};

const mutations = {
  STORE_LIST_POSTS_GIPHY(state, listOfPosts) {
    state.listPostGiphy = listOfPosts;
  },
  STORE_DATA_GIF_TEMPORARY(state, gifToSave) {
    state.gifDataSavedTemporary = gifToSave;
  },
};

const actions = {
  async fetchPostsGiphyTrending({ commit }, payload) {
    try {
      const urlBuilded =
        this.state.apiUrl.giphyTrending +
        "?api_key=" +
        this.state.apiUrl.apiKey.forFeed +
        "&limit=" +
        payload.numberOfPosts +
        "&offset=" +
        payload.startAtNumber +
        "&rating=r";
      const response = await fetch(urlBuilded);
      const responseConverted = await response.json();
      commit("STORE_LIST_POSTS_GIPHY", responseConverted.data);
    } catch (error) {
      console.log(error);
    }
  },
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
