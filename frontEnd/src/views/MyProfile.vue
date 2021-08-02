<template>
  <div class="myProfile">
    <h1 class="text-primary myProfileTitle">Mon profil</h1>
    <ProfileShowed />
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileShowed from "@/components/profile/ProfileShowed.vue";

export default {
  name: "MyProfile",
  components: {
    ProfileShowed,
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
