<template>
  <div class="9gag">
    <HeaderMobile />
    <DisplayPosts9gag class="displayPosts9gag" />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMobile from "@/components/header/headerMobile.vue";
import DisplayPosts9gag from "@/components/displayPosts9gag.vue";

export default {
  name: "9gag",
  components: {
    HeaderMobile,
    DisplayPosts9gag,
  },
};
</script>

<style scoped lang="scss">
.displayPosts {
  margin-top: 4rem;
}
</style>
