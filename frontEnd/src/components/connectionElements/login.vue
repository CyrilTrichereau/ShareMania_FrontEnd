<template>
  <div class="bg-primary login">
    <p class="loginTitle text-light h2">Connexion</p>
    <EmailBlock class="loginEmail" />
    <PasswordBlock class="loginPassword" />
    <ValidateButton class="loginValidateButton" />
    <p class="loginForgottenPassword text-light">
      Mot de passe oublié ? <br />
      C'est par ici !
    </p>
  </div>
</template>

<script>
import EmailBlock from "@/components/formElements/emailBlock.vue";
import PasswordBlock from "@/components/formElements/passwordBlock.vue";
import ValidateButton from "@/components/formElements/validateButton.vue";

export default {
  name: "Login",
  components: {
    EmailBlock,
    PasswordBlock,
    ValidateButton,
  },
};
</script>

<style scoped lang="scss">
.login {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 2rem;
  &Title {
    margin: 1rem 0;
  }
  &Email {
    color: white;
  }
  &Password {
    color: white;
  }
  &ValidateButton {
    width: 100%;
  }
  &ForgottenPassword {
    padding: 1rem 0;
  }
}
</style>
