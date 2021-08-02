<template>
  <div class="myProfile">
    <h1 class="text-primary myProfileTitle">Modifier mon profil</h1>
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
  width: 100%;
  margin: 4rem auto 0 auto;
  &Title {
    margin: 1rem;

  }
}

@media (min-width: 992px) {
  .myProfile {
    margin: 2rem auto 0 auto;
  }
}
</style>
