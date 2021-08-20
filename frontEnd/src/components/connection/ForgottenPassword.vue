<template>
  <div class="forgottenPassword">
    <div class="container card bg-light forgottenPasswordCard">
      <button
        class="btn btn-primary forgottenPasswordCardCrossIcon"
        @click="closeWindowForgottenPassword"
      >
        <CrossIcon />
      </button>
      <h1 class="text-primary forgottenPasswordCardTitle">
        Mot de passe oublié
      </h1>
      <div class="bg-info forgottenPasswordCardInformations">
        <p class="forgottenPasswordCardInformationsText">
          Merci de renseigner votre adresse email ci-dessous. Une fois celui-ci
          validé, nous vous enverrons un email sous 15 min afin de réinitialiser
          votre mot de passe.
        </p>
      </div>
      <InputBlock
        inputName="Adresse email"
        inputPlaceHolder="Ecrivez ici votre email"
        inputType="email"
        @input-value="saveEmail"
        textInvalid="Adresse email invalide"
        patternType="email"
      />
      <div
        class="forgottenPasswordCardValidateButton"
        @click="changingStateConfirmationIsOpen"
      >
        <Button text="Valider" @click.native="sendForgottenPasswordInfos" />
      </div>
      <p
        class="text-success forgottenPasswordCardMessageSuccess"
        v-if="confirmationIsOpen"
      >
        Un email de réinitialisation vient de partir. Suivez la procédure pour
        enregistrer un nouveau mot de passe.
      </p>
    </div>
  </div>
</template>

<script>
import InputBlock from "@/components/form/InputBlock.vue";
import Button from "@/components/form/Button.vue";
import CrossIcon from "@/components/icons/CrossIcon.vue";

export default {
  name: "ForgottenPassword",
  components: {
    InputBlock,
    Button,
    CrossIcon,
  },
  data() {
    return {
      confirmationIsOpen: false,
      emailForgotten: "",
    };
  },
  methods: {
    saveEmail(payload) {
      this.emailForgotten = payload;
    },
    changingStateConfirmationIsOpen() {
      if (this.confirmationIsOpen === false) {
        this.confirmationIsOpen = true;
      }
    },
    closeWindowForgottenPassword() {
      this.$emit("close-window-forgotten-password");
    },
    sendForgottenPasswordInfos() {
      console.log(this.emailForgotten);
      // this.$store.dispatch("sendForgottenPassword", this.emailForgotten);
    },
  },
};
</script>

<style scoped lang="scss">
.forgottenPassword {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  background: white;
  top: 62.64px;
  &Card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 92%;
    padding: 0;
    margin: 1rem 0;
    &CrossIcon {
      position: absolute;
      width: 30px;
      height: 30px;
      top: 4%;
      right: 5%;
      padding: 0;
    }
    &Title {
      margin: 1rem 3rem;
    }
    &Informations {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      &Text {
        margin: 0.5rem 0;
        width: 80%;
      }
    }
    &Block {
      width: 80%;
    }
    &MessageSuccess {
      width: 80%;
    }
  }
}
</style>
