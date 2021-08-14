import * as dataStatic from "./dataStatic.js";

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
    this.state.listPost = listOfPosts;
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

  async sendPostObject(bodyObject, methodToUse) {
    try {
      const response = await fetch(this.apiUrl.posts, {
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
const getters = {
};

export default {
  state,
  getters,
  actions,
  mutations,
};
