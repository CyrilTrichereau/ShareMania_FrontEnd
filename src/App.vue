<template>
  <div class="app">
    <!-- HEADER MOBILE AND SIDE BAR MENU FOR DESKTOP -->
    <HeaderMobile />
    <div class="appSideBar">
      <SideBarDesktop />
    </div>
    <main class="appMain">
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
};
</script>

<style lang="scss">
.app {
  height: 100%;
  width: 100%;
  display: flex;
  &Main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    text-align: center;
  }
}
@media (min-width: 992px) {
  .app {
    &SideBar {
      flex: 0 0 300px;
    }
    &Main {
      flex: 1 1 auto;
    }
  }
}
</style>
