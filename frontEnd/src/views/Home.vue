<template>
  <div class="home">
    <!-- <CreateDataBase /> -->
    <div class="homePostsList">
      <div class="homePostsListHeader">
        <h1 class="text-primary homePostsListHeaderTitle">
          Fil d'actualités
        </h1>
        <div class="homePostsListHeaderSortingBy">
          <SortingByButton />
        </div>
      </div>
      <div
        class="homePostsListMain"
        v-for="(post, index) in listPost"
        :key="index"
      >
        <Post :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
// import CreateDataBase from "@/store/createDataBase/CreateDataBase.vue";
import SortingByButton from "@/components/form/SortingByButton.vue";
import Post from "@/components/post/Post.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    // CreateDataBase,
    SortingByButton,
    Post,
  },
  computed: {
    ...mapState(["listPost"]),
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
      width: 92%;
    }
  }
}

@media (min-width: 992px) {
  .home {
    margin: 2rem auto 0 auto;
  }
}
</style>
