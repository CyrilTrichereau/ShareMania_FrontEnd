<template>
  <div id="app">
    <!-- LINK BAR FOR PRODUCTION -- ERASE BEFORE PRODUCTION -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/new-post">Nouveau post</router-link> |
      <router-link to="/9gag">9gag</router-link> |
      <router-link to="/my-profile">Mon profil</router-link> |
      <router-link to="/login">Page de connexion</router-link> |
    </div>
    <!-- HEADER MOBILE AND SIDE BAR MENU FOR DESKTOP -->
    <HeaderMobile />
    <SideBarDesktop />
    <main class="main">
      <div class="d-none d-lg-flex mainSideBarResponsive"></div>
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
.main {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  &SideBarResponsive {
    width: 400px;
    height: 100%;
    position: relative;
    left: 0;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 99;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
