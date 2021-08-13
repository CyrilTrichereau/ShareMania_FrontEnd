<template>
  <div class="myProfile">
    <h1 class="text-primary myProfileTitle">Mon profil</h1>
    <div class="myProfileBlock">
      <img
        :src="myProfile.urlPicture"
        :alt="'Photo de profil de ' + myProfile.alias"
        class="myProfileBlockPicture"
      />
      <ProfileShowed v-if="!myProfileModify"/>
      <ProfileModify v-else/>
    </div>
  </div>
</template>

<script>
import ProfileShowed from "@/components/profile/ProfileShowed.vue";
import ProfileModify from "@/components/profile/ProfileModify.vue";
import { mapState } from "vuex";

export default {
  name: "MyProfile",
  components: {
    ProfileShowed,
    ProfileModify,
  },
  computed: {
    ...mapState(["myProfile", "myProfileModify"]),
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
  &Block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0;
    margin: 0;
    width: 100%;
    &Picture {
      z-index: 2 !important;
      position: absolute;
      width: 280px;
      height: 280px;
      border-radius: 500px;
      object-fit: cover;
      object-position: center;
    }
  }
}

@media (min-width: 992px) {
  .myProfile {
    margin: 2rem auto 0 auto;
  }
}
</style>
