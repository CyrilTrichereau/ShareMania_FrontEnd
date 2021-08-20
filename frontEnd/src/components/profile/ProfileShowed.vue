<template>
  <div class="profileContent">
    <div class="profileContentStatus" v-if="$store.state.profile.myProfile.moderator">
      <font-awesome-icon
        icon="shield-alt"
        class="text-success profileContentStatusIcon"
      />
      <p class="text-success h4 profileContentStatusText">
        Modérateur
      </p>
    </div>
    <div class="bg-info profileContentBlock">
      <p class="text-primary h4 profileContentBlockTitle">
        Adresse email
      </p>
      <p class="profileContentBlockText">
        {{ $store.state.profile.myProfile.email }}
      </p>
    </div>
    <div class="bg-info profileContentBlock">
      <p class="text-primary h4 profileContentBlockTitle">
        Mot de passe
      </p>
      <p class="profileContentBlockText">
        **********
      </p>
    </div>
    <div class="bg-info profileContentBlock">
      <p class="text-primary h4 profileContentBlockTitle">
        Pseudo
      </p>
      <p class="profileContentBlockText">
        {{ $store.state.profile.myProfile.alias }}
      </p>
    </div>
    <div class="bg-info profileContentBlock">
      <p class="text-primary h4 profileContentBlockTitle">
        Service
      </p>
      <p class="profileContentBlockText">
        {{ $store.state.profile.myProfile.service }}
      </p>
    </div>
    <Button text="Modifier" @click.native="$store.dispatch('changeProfileModifyOrShow')" />
    <Button
      text="Supprimer mon compte"
      :danger="true"
      @click.native="eraseConfirmationIsOpen = !eraseConfirmationIsOpen"
    />
    <div class="profileContentValidateConfirmationWrapper">
      <EraseConfirm
        typeToErase="profile"
        v-show="eraseConfirmationIsOpen"
        @close-erase-confirmation-window="
          eraseConfirmationIsOpen = !eraseConfirmationIsOpen
        "
        @confirmation-erase="eraseProfile"
        urlToRedirect="/login"
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/form/Button.vue";
import EraseConfirm from "@/components/EraseConfirm.vue";

export default {
  name: "ProfileShowed",
  components: {
    Button,
    EraseConfirm,
  },
  data() {
    return {
      eraseConfirmationIsOpen: false,
    };
  },
  methods: {
    eraseProfile() {
      let profileForErasing = {};
      profileForErasing._id = this.$store.state.profile.myProfile._id;
      profileForErasing.alias = this.$store.state.profile.myProfile.alias;
      profileForErasing.email = this.$store.state.profile.myProfile.email;
      console.log(profileForErasing);
      this.$router.push({ name: 'login' })
    },
  },
};
</script>

<style scoped lang="scss">
.profileContent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100%;

  &Status {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
    &Icon {
      font-size: 2rem;
    }
    &Text {
      margin: 0;
    }
  }
  &Block {
    padding-top: 1rem;
    margin: 1rem 0;
    width: 100%;
  }
  &ValidateConfirmationWrapper {
    z-index: 20;
    position: fixed;
  }
}
</style>
