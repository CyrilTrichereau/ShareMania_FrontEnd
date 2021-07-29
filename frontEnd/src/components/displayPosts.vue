<template>
  <div class="displayPosts">
    <div class="displayPostsHeader">
      <h1 class="text-primary m-0 displayPostsHeaderTitle">Fil d'actualités</h1>
      <SortingByButton />
    </div>
    <Post />
    <Post />
    <Post />
    <Post />
  </div>
</template>

<script>
// @ is an alias to /src
import SortingByButton from "@/components/formElements/sortingByButton.vue";
import Post from "@/components/postElements/post.vue";

export default {
  name: "DisplayPosts",
  components: {
    SortingByButton,
    Post,
  },
};
</script>

<style scoped lang="scss">
.displayPosts {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
    &Header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  max-width: 600px;
  &Title {
      font-size: 1.8rem;
  }

    }
}
</style>
