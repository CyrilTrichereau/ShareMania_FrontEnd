<template>
  <div class="myProfile">
    <h1 class="text-primary myProfileTitle">Mon profil</h1>
    <div class="myProfileBlock card container">
      <img
        :src="pictureProfileToShow"
        :alt="'Photo de profil de ' + myProfile.alias"
        class="myProfileBlockPicture"
      />
      <ProfileShowed v-if="!isOpen.modifyMyProfile" />
      <ProfileModify v-else @new-picture-profile="displayNewPictureProfile" />
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
  data() {
    return {
      pictureProfileToShow: "",
    };
  },
  computed: {
    ...mapState(["myProfile", "isOpen", ["modifyMyProfile"]]),
  },
  methods: {
    displayNewPictureProfile(payload) {
      this.pictureProfileToShow = payload;
    },
  },
  created() {
    this.pictureProfileToShow = this.myProfile.urlPicture;
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
    margin: 2rem;
  }
  &Block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 140px 0 0 0;
    margin: 140px 0 0 0;
    width: 92%;
    max-width: 600px;
    &Picture {
      position: absolute;
      width: 280px;
      height: 280px;
      top: -140px;
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
