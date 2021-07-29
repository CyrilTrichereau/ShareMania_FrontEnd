<template>
  <div class="newPost">
    <HeaderMobile />
    <SideBarDesktop />
    <div class="d-none d-lg-flex newPostSideBarResponsive"></div>
    <div class="mx-auto my-lg-4 newPostContent">
      <NewContentText class="newPostContentNewContentText" />
      <AddAttached class="newPostContentAddAttached" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMobile from "@/components/header/headerMobile.vue";
import SideBarDesktop from "@/components/header/sideBarDesktop.vue";
import NewContentText from "@/components/newPostElements/newContentText.vue";
import AddAttached from "@/components/newPostElements/addAttached.vue";

export default {
  name: "NewPost",
  components: {
    HeaderMobile,
    SideBarDesktop,
    NewContentText,
    AddAttached,
  },
};
</script>

<style scoped lang="scss">
.newPost {
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
  &Content {
    margin-top: 4rem;
    width: 100%;
  }
}
</style>
