<template>
  <div class="home bg-white">
    <!-- <CreateDataBase /> -->

    <!-- HOME PAGE MESSAGE -->
    <Welcome />

    <!-- FEED POSTS -->
    <PostsList
      title="Fil d'actualités"
      :postsGiphy="false"
      @update-posts-list="keyComponent++"
      :key="keyComponent"
    />
  </div>
</template>

<script>
// import CreateDataBase from "@/components/CreateDataBase.vue";
import Welcome from "@/components/homePageInfos/Welcome.vue";
import PostsList from "@/components/PostsList.vue";
import * as utils from "@/assets/utils.js";

export default {
  name: "Home",
  data() {
    return {
      keyComponent: 0,
    };
  },
  components: {
    Welcome,
    PostsList,
    // CreateDataBase
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
