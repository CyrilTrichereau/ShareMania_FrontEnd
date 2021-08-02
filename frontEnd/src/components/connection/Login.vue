<template>
  <div class="bg-primary login">
    <p class="loginTitle text-light h2">Connexion</p>
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
      @click="changingStateForgottenPasswordIsOpen"
    >
      Mot de passe oublié ? <br />
      C'est par ici !
    </a>
    <ForgottenPassword v-if="ForgottenPasswordIsOpen" @close-window-forgotten-password="changingStateForgottenPasswordIsOpen"/>
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
    };
  },
  methods: {
    changingStateForgottenPasswordIsOpen() {
      if (this.ForgottenPasswordIsOpen === false) {
        this.ForgottenPasswordIsOpen = true;
      } else {
        this.ForgottenPasswordIsOpen = false;
      }
    },
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
  }
}
</style>
