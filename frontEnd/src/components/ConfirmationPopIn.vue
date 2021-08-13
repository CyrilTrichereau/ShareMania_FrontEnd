<template>
  <div class="confirmationPopIn">
    <div class="card container bg-light confirmationPopInCard">
      <h3 class="text-success confirmationPopInCardTitle">{{ loopForType }}</h3>
      <h6 class="text-primary confirmationPopInCardSubtitle">
        Cliquez sur le bouton ci-dessous pour être redirigé.
      </h6>
      <router-link
        :to="redirectUrl"
        class="confirmationPopInCardRedirect"
        v-if="confirmationType === 'create'"
      >
        <Button text="Redirection" />
      </router-link>
      <div
        class="confirmationPopInCardRedirect"
        @click="closeWindowAndReloadProfile"
        v-else-if="confirmationType === 'modify'"
      >
        <Button text="Fermer" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/form/Button.vue";
import { mapActions } from "vuex";

export default {
  name: "ConfirmationPopIn",
  components: {
    Button,
  },
  props: {
    confirmationType: {
      type: String,
      required: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      createProfile: "Bravo, votre compte a été créé avec succés !",
      modifyProfile: "Bravo, votre compte a été modifié avec succés !",
      default: "",
    };
  },
  computed: {
    loopForType() {
      if (this.confirmationType === "create") {
        return this.createProfile;
      } else if (this.confirmationType === "modify") {
        return this.modifyProfile;
      } else {
        return this.default;
      }
    },
  },
  methods: {
    ...mapActions(["changeProfileModifyOrShow", "fetchMyProfile"]),
    closeWindowAndReloadProfile() {
      this.fetchMyProfile();
      this.changeProfileModifyOrShow();
    },
  },
};
</script>

<style scoped lang="scss">
.confirmationPopIn {
  z-index: 20 !important;
  width: 100%;
  height: 2000px;
  z-index: 20;
  position: fixed;
  top: 62px;
  left: 0;
  background: rgba(255, 255, 255, 0.9);

  &Card {
    width: 92%;
    max-width: 450px;
    margin-top: 2rem;
    padding: 0 0 2rem 0;
    &Title {
      padding: 2rem 2rem 1rem 2rem;
    }
    &Subtitle {
      margin: 0.5rem 1rem;
    }
    &Buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      &Wrapper {
        margin: 0 1rem;
      }
    }
  }
}
</style>
