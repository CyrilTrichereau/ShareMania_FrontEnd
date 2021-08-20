<template>
  <div class="home">
    <PostsList title="Tendance !" :postsGiphy="true" />
  </div>
</template>

<script>
import PostsList from "@/components/PostsList.vue";
export default {
  name: "Home",
  components: {
    PostsList,
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
}

@media (min-width: 992px) {
  .home {
    margin: 2rem auto 0 auto;
  }
}
</style>
