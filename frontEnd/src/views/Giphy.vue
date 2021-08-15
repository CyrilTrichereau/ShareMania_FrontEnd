<template>
  <div class="home">
    <PostsList title="Tendance !" :postsGiphy="true" />
  </div>
</template>

<script>
import PostsList from "@/components/PostsList.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    PostsList,
  },
  computed: {
    ...mapState(["listPostGiphy"]),
  },
  methods: {
    ...mapActions(["fetchPostsGiphyTrending"]),
  },
 async mounted() {
  await this.fetchPostsGiphyTrending(20, 0);
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
