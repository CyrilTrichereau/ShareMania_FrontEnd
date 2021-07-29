<template>
  <div class="displayer9gag">
    <HeaderMobile />
    <SideBarDesktop />
    <div class="d-none d-lg-flex displayer9gagSideBarResponsive"></div>
    <DisplayPosts9gag class="mx-auto my-lg-4 displayer9gagPosts" />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMobile from "@/components/header/headerMobile.vue";
import SideBarDesktop from "@/components/header/sideBarDesktop.vue";
import DisplayPosts9gag from "@/components/displayPosts9gag.vue";

export default {
  name: "9gag",
  components: {
    HeaderMobile,
    SideBarDesktop,
    DisplayPosts9gag,
  },
};
</script>

<style scoped lang="scss">
.displayer9gag {
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
  &Posts {
    margin-top: 4rem;
    width: 100%;
  }
}
</style>
