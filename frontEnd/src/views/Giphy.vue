<template>
  <div class="home">
    <PostsList title="Petite sélection de gifs tendance !" :postsGiphy="true" />
  </div>
</template>

<script>
import PostsList from "@/components/PostsList.vue";
import * as utils from "@/assets/utils.js";
export default {
  name: "Home",
  components: {
    PostsList,
  },
  async created() {
    const isValidToken = await utils.controlAuth();
    if (!isValidToken) {
      this.$router.push("login");
    } else {
      this.$store.dispatch("fetchMyProfile");
    }
    await this.$store.dispatch("fetchMyProfile");
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
