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
import SortingByButton from "@/components/formElements/sortingByButton.vue";
import Post9gag from "@/components/9gagElements/post9gag.vue";

export default {
  name: "DisplayPosts",
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
  flex-wrap: wrap;
    &Header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  &Title {
      font-size: 1.8rem;
  }

    }
}
</style>
