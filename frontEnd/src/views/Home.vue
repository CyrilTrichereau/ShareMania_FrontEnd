<template>
  <div class="home">
    <!-- <CreateDataBase /> -->
    <div class="homePostsList">
      <div class="homePostsListHeader">
        <h1 class="text-primary homePostsListHeaderTitle">
          Fil d'actualités
        </h1>
        <div class="homePostsListHeaderSortingBy">
          <SortingByButton @select-value="saveOrderPosts" />
        </div>
      </div>
      <div class="homePostsListMain" v-if="postsListOrderBy === 'recent'">
        <div
          class="homePostsListMainWrapper"
          v-for="(post, index) in byOrderRecent"
          :key="index"
        >
          <Post :post="post" />
        </div>
      </div>
      <div class="homePostsListMain" v-if="postsListOrderBy === 'popular'">
        <div
          class="homePostsListMainWrapper"
          v-for="(post, index) in byOrderPopular"
          :key="index"
        >
          <Post :post="post" />
        </div>
      </div>
      <div class="homePostsListMain" v-if="postsListOrderBy === 'shared'">
        <div
          class="homePostsListMainWrapper"
          v-for="(post, index) in byOrderShared"
          :key="index"
        >
          <Post :post="post" />
        </div>
      </div>
      <div class="homePostsListMain" v-else>
        <div
          class="homePostsListMainWrapper"
          v-for="(post, index) in listPost"
          :key="index"
        >
          <Post :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import CreateDataBase from "@/store/createDataBase/CreateDataBase.vue";
import SortingByButton from "@/components/form/SortingByButton.vue";
import Post from "@/components/post/Post.vue";
import { mapGetters, mapState } from "vuex";

export default {
  name: "Home",
  components: {
    // CreateDataBase,
    SortingByButton,
    Post,
  },
  data() {
    return {
      postsListOrderBy: "recent",
    };
  },
  computed: {
    ...mapState(["listPost", "listPostsOrdered", ["recent"]]),
    ...mapGetters(["byOrderRecent", "byOrderPopular", "byOrderShared"]),
  },
  methods: {
    saveOrderPosts(payload) {
      this.postsListOrderBy = payload;
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 4rem auto 0 auto;
  &PostsList {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    &Header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      width: 90%;
      max-width: 600px;
      margin: 1rem 0;
    }
    &Main {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      &Wrapper {
        width: 92%;
      }
    }
  }
}

@media (min-width: 992px) {
  .home {
    margin: 2rem auto 0 auto;
  }
}
</style>
