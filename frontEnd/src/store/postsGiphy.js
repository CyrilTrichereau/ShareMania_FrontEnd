const state = {
  listPostGiphy: [],
};

const mutations = {
  STORE_LIST_POSTS_GIPHY(state, listOfPosts) {
    this.state.listPostGiphy = listOfPosts;
  },
};

const actions = {
  async fetchPostsGiphyTrending({ commit }, numberOfPosts, startAtNumber) {
    try {
      const urlBuilded = (this.state.apiUrl.giphyTrending + "?api_key=" + this.state.apiUrl.apiKey.forFeed + "&limit=" + numberOfPosts + "&offset=" + startAtNumber +
        "&rating=r");
      const response = await fetch(urlBuilded);
      const ResponseConverted = await response.json();
      await commit("STORE_LIST_POSTS_GIPHY", ResponseConverted.data);
      console.log(this.state.listPostGiphy);
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
