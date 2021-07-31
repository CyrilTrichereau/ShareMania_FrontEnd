<template>
  <div class="displayer9gag">
    <Posts9gagList class="mx-auto my-lg-4 displayer9gagPosts" />
  </div>
</template>

<script>
// @ is an alias to /src
import Posts9gagList from "@/components/Posts9gagList.vue";

export default {
  name: "9gag",
  components: {
    Posts9gagList,
  },
};
</script>

<style scoped lang="scss">
.displayer9gag {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 100%;
  &Posts {
    margin-top: 4rem;
    width: 100%;
  }
}
</style>
