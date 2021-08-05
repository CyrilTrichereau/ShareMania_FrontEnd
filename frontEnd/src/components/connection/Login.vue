<template>
  <div class="bg-primary login">
    <h2 class="loginTitle text-light h2">
      Connexion
    </h2>
    <InputBlock
      inputName="Adresse email"
      inputPlaceHolder="Ecrivez ici votre email"
      inputType="email"
      :titleLight="true"
    />
    <InputBlock
      inputName="Mot de passe"
      inputPlaceHolder="Ecrivez ici votre mot de passe"
      :titleLight="true"
    />
    <Button text="Valider" />
    <a
      class="loginForgottenPassword text-light"
      @click="ForgottenPasswordIsOpen = !ForgottenPasswordIsOpen"
    >
      Mot de passe oublié ? <br />
      C'est par ici !
    </a>
    <ForgottenPassword
      v-show="ForgottenPasswordIsOpen"
      @close-window-forgotten-password="ForgottenPasswordIsOpen = !ForgottenPasswordIsOpen"
    />
  </div>
</template>

<script>
import InputBlock from "@/components/form/InputBlock.vue";
import Button from "@/components/form/Button.vue";
import ForgottenPassword from "@/components/connection/ForgottenPassword.vue";

export default {
  name: "Login",
  components: {
    InputBlock,
    Button,
    ForgottenPassword,
  },
  data() {
    return {
      ForgottenPasswordIsOpen: false,
      confirmationPopIn: false,
    };
  },
};
</script>

<style scoped lang="scss">
.login {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding-top: 2rem;
  &Title {
    margin: 1rem 0;
  }
  &Block {
    color: white;
    width: 80%;
  }
  &ForgottenPassword {
    padding: 1rem 0;
    cursor: pointer;
  }
}
</style>
