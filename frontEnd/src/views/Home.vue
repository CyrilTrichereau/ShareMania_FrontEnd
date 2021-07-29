<template>
  <div class="home">
    <HeaderMobile />
    <SideBarDesktop />
    <div class="d-none d-lg-flex homeSideBarResponsive"></div>
    <DisplayPosts class="mx-auto my-lg-4 homeDisplayPosts" />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMobile from "@/components/header/headerMobile.vue";
import SideBarDesktop from "@/components/header/sideBarDesktop.vue";
import DisplayPosts from "@/components/displayPosts.vue";

export default {
  name: "Home",
  components: {
    HeaderMobile,
    SideBarDesktop,
    DisplayPosts,
  },
};
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 100%;

  &SideBarResponsive {
    width: 400px;
    height: 100%;
    position: relative;
    left: 0;
  }

  &DisplayPosts {
    margin-top: 4rem;
    width: 100%;
  }
}
</style>
