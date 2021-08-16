const state = {
  listPostGiphy: [],
  gifDataSavedTemporary: { empty: true },
};

const mutations = {
  STORE_LIST_POSTS_GIPHY(state, listOfPosts) {
    this.state.listPostGiphy = listOfPosts;
  },
  STORE_DATA_GIF_TEMPORARY(state, gifToSave) {
    this.state.gifDataSavedTemporary = gifToSave;
  },
};

const actions = {
  async fetchPostsGiphyTrending({ commit }, numberOfPosts, startAtNumber) {
    try {
      const urlBuilded =
        this.state.apiUrl.giphyTrending +
        "?api_key=" +
        this.state.apiUrl.apiKey.forFeed +
        "&limit=" +
        numberOfPosts +
        "&offset=" +
        startAtNumber +
        "&rating=r";
      const response = await fetch(urlBuilded);
      const ResponseConverted = await response.json();
      await commit("STORE_LIST_POSTS_GIPHY", ResponseConverted.data);
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
