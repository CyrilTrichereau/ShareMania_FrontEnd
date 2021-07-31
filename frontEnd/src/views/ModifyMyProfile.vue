<template>
  <div class="mx-auto my-lg-4 myProfile">
    <ProfileModify />
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileModify from "@/components/profile/ProfileModify.vue";

export default {
  name: "MyProfile",
  components: {
    ProfileModify,
  },
};
</script>

<style scoped lang="scss">
.myProfile {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 4rem;
}
</style>
