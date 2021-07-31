<template>
  <div class="displayPosts">
    <div class="displayPostsHeader">
      <h1 class="text-primary m-0 displayPostsHeaderTitle">9gag</h1>
      <SortingByButton />
    </div>
    <Post9gag />
    <Post9gag />
    <Post9gag />
    <Post9gag />
  </div>
</template>

<script>
import SortingByButton from "@/components/form/SortingByButton.vue";
import Post9gag from "@/components/post/Post9gag.vue";

export default {
  name: "Posts9gagList",
  components: {
    SortingByButton,
    Post9gag,
  },
};
</script>

<style scoped lang="scss">
.displayPosts {
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
    &Title {
      font-size: 1.8rem;
    }
  }
}
</style>
