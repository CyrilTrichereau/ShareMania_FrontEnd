<template>
  <div id="app">
    <!-- HEADER MOBILE AND SIDE BAR MENU FOR DESKTOP -->
    <HeaderMobile />
    <SideBarDesktop />
    <main class="main">
      <h6 class="mt-5"> .    .</h6>
      <h6 class="mt-5"> {{listPost9gag}} </h6>
      <!-- ADDING VIEWS PAGES -->
      <router-view />
    </main>
  </div>
</template>

<script>
import HeaderMobile from "@/components/header/HeaderMobile.vue";
import SideBarDesktop from "@/components/header/SideBarDesktop.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "App",
  components: {
    HeaderMobile,
    SideBarDesktop,
  },
  computed: {
    ...mapState(["listPost9gag"])
  },
  methods: {
    ...mapActions(["fetchPostsList", "fetchMyProfile", "fetchPosts9Gaga"]),
  },
  created() {
    this.fetchPostsList();
    this.fetchMyProfile();
    this.fetchPosts9Gaga();
  },
};
</script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  text-align: center;
}

@media (min-width: 992px) {
  .main {
    margin-left: 300px;
  }
}
</style>
