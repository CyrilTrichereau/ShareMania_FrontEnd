<template>
  <div class="postsList">
    <div class="postsListHeader">
      <h1 class="text-primary postsListHeaderTitle" v-if="this.smallTitle === false">
        {{ this.title }}
      </h1>
      <h4 class="text-primary postsListHeaderTitle" v-if="this.smallTitle">
        {{ this.title }}
      </h4>
      <div class="postsListHeaderSortingBy">
        <SortingByButton />
      </div>
    </div>

    <div class="postsListMain postsInternal" v-if="posts9gag === false">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>

    <div class="postsListMain posts9Gag" v-if="posts9gag">
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
// @ is an alias to /src
import SortingByButton from "@/components/form/SortingByButton.vue";
import Post from "@/components/post/Post.vue";
import Post9gag from "@/components/post/Post9gag.vue";

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
