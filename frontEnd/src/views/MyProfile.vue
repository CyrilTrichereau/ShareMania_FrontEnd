<template>
  <div class="myProfile">
    <HeaderMobile />
    <SideBarDesktop />
    <div class="d-none d-lg-flex myProfileSideBarResponsive"></div>
    <div class="mx-auto my-lg-4 myProfileTest">
      <ProfileShowed />
      <ProfileModify />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMobile from "@/components/header/headerMobile.vue";
import SideBarDesktop from "@/components/header/sideBarDesktop.vue";
import ProfileShowed from "@/components/profileElements/profileShowed.vue";
import ProfileModify from "@/components/profileElements/profileModify.vue";

export default {
  name: "MyProfile",
  components: {
    HeaderMobile,
    SideBarDesktop,
    ProfileShowed,
    ProfileModify,
  },
};
</script>

<style scoped lang="scss">
.myProfile {
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

  &Test {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-top: 4rem;
  }
}
</style>
