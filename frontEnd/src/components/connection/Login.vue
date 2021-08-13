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
        @input-value="saveEmail"
    />
    <InputBlock
      inputName="Mot de passe"
      inputPlaceHolder="Ecrivez ici votre mot de passe"
      :titleLight="true"
        @input-value="savePassword"
    />
    <Button text="Valider" @click.native="logInToAccount"/>
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
import { mapActions } from "vuex";

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
      logIn: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["sendLogIn"]),
    saveEmail(payload) {
      this.logIn.email = payload;
    },
    savePassword(payload) {
      this.logIn.password = payload;
    },
    logInToAccount() {
      console.log(this.logIn)
      // this.sendLogIn(this.logIn);
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
    cursor: pointer;
  }
}
</style>
