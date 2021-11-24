<template>
  <div class="bg-white giphy">
    <PostsList title="Petite sélection de gifs tendance !" :postsGiphy="true" />
  </div>
</template>

<script>
import PostsList from "@/components/PostsList.vue";
import * as utils from "@/assets/utils.js";
export default {
  name: "Giphy",
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
  },
};
</script>

<style scoped lang="scss">
.giphy {
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
