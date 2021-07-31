<template>
  <div class="container card bg-light forgottenPassword">
    <h2 class="text-primary forgottenPasswordTitle">Mot de passe oublié</h2>
    <div class="bg-info forgottenPasswordInformations">
      <p class="forgottenPasswordInformationsText">
        Merci de renseigner votre adresse email ci-dessous. Une fois celui-ci
        validé, nous vous enverrons un email sous 15 min afin de réinitialiser
        votre mot de passe.
      </p>
    </div>
    <EmailBlock class="forgottenPasswordBlock" />
    <ValidateButton class="forgottenPasswordValidateButton" />
    <p class="text-success forgottenPasswordMessageSuccess">
      Un email de réinitialisation vient de partir. Suivez la procédure pour
      enregistrer un nouveau mot de passe.
    </p>
  </div>
</template>

<script>
import EmailBlock from "@/components/form/EmailBlock.vue";
import ValidateButton from "@/components/form/ValidateButton.vue";

export default {
  name: "ForgottenPassword",
  components: {
    EmailBlock,
    ValidateButton,
  },
};
</script>

<style scoped lang="scss">
.forgottenPassword {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 92%;
  padding: 0;
  &Title {
    margin: 2rem 0;
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
  &ValidateButton {
  }
  &MessageSuccess {
      width: 80%;
  }
}
</style>
