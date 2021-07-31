<template>
  <div class="home">
    <DisplayPosts class="mx-auto my-lg-4 homeDisplayPosts" />
  </div>
</template>

<script>
// @ is an alias to /src
import DisplayPosts from "@/components/PostsList.vue";

export default {
  name: "Home",
  components: {
    DisplayPosts,
  },
};
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 100%;
  &DisplayPosts {
    margin-top: 4rem;
    width: 100%;
  }
}
</style>
