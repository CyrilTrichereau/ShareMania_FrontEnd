import * as dataStatic from "@/assets/dataStatic.js";
// import * as endPointsApi from "@/assets/endPointsApi.js";

const state = {
  listPost: [],
  listPostsOrdered: {
    recent: [],
    popular: [],
    shared: [],
  },
};

const mutations = {
  STORE_LIST_POSTS(state, listOfPosts) {
    state.listPost = listOfPosts;
  },
};

const actions = {
  fetchPostsList(context) {
    const list = dataStatic.postsList;
    context.commit("STORE_LIST_POSTS", list);
  },
  async fetchPosts({ commit }) {
    try {
      const response = await fetch(this.state.apiUrl.posts);
      console.log(response.body);
      commit("STORE_LIST_POSTS", response.body);
    } catch (error) {
      console.log(error);
    }
  },
};
const getters = {
  byOrderRecent: (state) => {
    return state.listPost.sort((a, b) => (a.time > b.time ? -1 : 1));
  },
  byOrderPopular: (state) => {
    return state.listPost.sort((a, b) =>
      a.onFire_id.length / a.cold_id.length >
      b.onFire_id.length / b.cold_id.length
        ? -1
        : 1
    );
  },
  byOrderShared: (state) => {
    return state.listPost.sort((a, b) =>
      a.shareNumber > b.shareNumber ? -1 : 1
    );
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
