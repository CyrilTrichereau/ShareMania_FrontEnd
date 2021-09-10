<template>
  <div id="app">
    <!-- HEADER MOBILE AND SIDE BAR MENU FOR DESKTOP -->
    <HeaderMobile />
    <SideBarDesktop />
    <main class="main">
      <!-- ADDING VIEWS PAGES -->
      <router-view />
    </main>
  </div>
</template>

<script>
import HeaderMobile from "@/components/header/HeaderMobile.vue";
import SideBarDesktop from "@/components/header/SideBarDesktop.vue";

export default {
  name: "App",
  components: {
    HeaderMobile,
    SideBarDesktop,
  },
  beforeCreate() {
    this.$store.dispatch("fetchMyProfile");
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
