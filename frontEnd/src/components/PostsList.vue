<template>
  <div class="postsList">
    <div class="postsListHeader">
      <h1 class="text-primary postsListHeaderTitle" v-if="!smallTitle">
        {{ title }}
      </h1>
      <h4 class="text-primary postsListHeaderTitle" v-else>
        {{ title }}
      </h4>
      <div class="postsListHeaderSortingBy">
        <SortingByButton />
      </div>
    </div>

    <div class="postsListMain postsInternal" v-if="!posts9gag">
      <div v-for="(post, index) in listPost" :key="index">
        <Post :post="post" />
      </div>
    </div>

    <div class="postsListMain posts9Gag bg-success" v-else>
      <Post9gag />
      <Post9gag />
      <Post9gag />
      <Post9gag />
      <Post9gag />
      <Post9gag />
      <Post9gag />
      <Post9gag />
    </div>
  </div>
</template>

<script>
import SortingByButton from "@/components/form/SortingByButton.vue";
import Post from "@/components/post/Post.vue";
import Post9gag from "@/components/post/Post9gag.vue";
import { mapState } from "vuex";

export default {
  name: "PostsList",
  components: {
    SortingByButton,
    Post,
    Post9gag,
  },
  props: {
    title: {
      type: String,
      Required: true,
    },
    posts9gag: {
      type: Boolean,
      default: false,
    },
    smallTitle: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(["listPost"]),
  },
};
</script>

<style scoped lang="scss">
.postsList {
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
.smallTitleStyle {
  font-size: 1.8rem;
}
</style>
