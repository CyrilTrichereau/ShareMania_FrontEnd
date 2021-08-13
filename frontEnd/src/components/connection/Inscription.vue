<template>
  <div class="inscription">
    <h2 class="inscriptionTitle text-primary">
      Inscription
    </h2>
    <div class="inscriptionBlocksWrapper">
      <InputBlock
        inputName="Adresse email"
        inputPlaceHolder="Ecrivez ici votre email"
        inputType="email"
        @input-value="saveEmail"
      />
      <InputBlock
        inputName="Mot de passe"
        inputPlaceHolder="Ecrivez ici votre mot de passe"
        @input-value="savePassword"
      />
      <InputBlock
        inputName="Pseudo"
        inputPlaceHolder="Ecrivez ici votre pseudo"
        @input-value="saveNewAlias"
      />
      <ServiceBlock class="inscriptionBlock" @select-value="saveService" />
    </div>
    <div class="inscriptionValidateWrapper" @click="saveProfileChanges">
      <Button text="Valider" />
    </div>
    <ConfirmationPopIn
      v-if="confirmationPopInIsOpen"
      redirectUrl="/"
      confirmationType="create"
    />
  </div>
</template>

<script>
import InputBlock from "@/components/form/InputBlock.vue";
import ServiceBlock from "@/components/form/ServiceBlock.vue";
import Button from "@/components/form/Button.vue";
import ConfirmationPopIn from "@/components/ConfirmationPopIn.vue";
import { mapActions } from "vuex";

export default {
  name: "Inscription",
  components: {
    InputBlock,
    ServiceBlock,
    Button,
    ConfirmationPopIn,
  },
  data() {
    return {
      confirmationPopInIsOpen: false,
      profileToSave: {
        email: "",
        password: "",
        alias: "",
        service: "",
      },
    };
  },
  methods: {
    ...mapActions(["sendProfileChanges"]),
    saveEmail(payload) {
      this.profileToSave.email = payload;
    },
    savePassword(payload) {
      this.profileToSave.password = payload;
    },
    saveNewAlias(payload) {
      this.profileToSave.alias = payload;
    },
    saveService(payload) {
      this.profileToSave.service = payload;
    },
    saveProfileChanges() {
      // this.sendProfileObject(this.profileToSave, "POST");
      this.confirmationPopInIsOpen = !this.confirmationPopInIsOpen;
    },
  },
};
</script>

<style scoped lang="scss">
.inscription {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-top: 2rem;

  &Title {
    margin: 1rem 0;
  }
  &BlocksWrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
}
</style>
