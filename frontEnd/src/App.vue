<template>
  <div id="app">
    <!-- LINK BAR FOR PRODUCTION -- ERASE BEFORE PRODUCTION -->
    <NavBarDev />
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
import NavBarDev from "@/components/NavBarDev.vue";
import HeaderMobile from "@/components/header/HeaderMobile.vue";
import SideBarDesktop from "@/components/header/SideBarDesktop.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    NavBarDev,
    HeaderMobile,
    SideBarDesktop,
  },
  methods: {
    ...mapActions(["savePostsList", "saveMyProfile"]),
  },
  created() {
    this.savePostsList();
    this.saveMyProfile();
  },
};
</script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: row;
  justify-content: center;
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
