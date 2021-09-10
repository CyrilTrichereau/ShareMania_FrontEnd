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
      textInvalid="Adresse email invalide"
      patternType="email"
    />
    <InputBlock
      inputName="Mot de passe"
      inputPlaceHolder="Ecrivez ici votre mot de passe"
      inputType="password"
      :titleLight="true"
      @input-value="savePassword"
      textInvalid="Adresse email ou mot de passe invalide"
      patternType=""
    />
    <Button text="Valider" @click.native="logInToAccount" />
    <a
      class="loginForgottenPassword text-light"
      @click="ForgottenPasswordIsOpen = !ForgottenPasswordIsOpen"
    >
      Mot de passe oublié ? <br />
      C'est par ici !
    </a>
    <ForgottenPassword
      v-show="ForgottenPasswordIsOpen"
      @close-window-forgotten-password="
        ForgottenPasswordIsOpen = !ForgottenPasswordIsOpen
      "
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
      logIn: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    saveEmail(payload) {
      this.logIn.email = payload[0];
    },
    savePassword(payload) {
      this.logIn.password = payload[0];
    },
    async logInToAccount() {
      let response = null;
      let responseLogged = null;
      // fetch new post
      try {
        response = await fetch(
          this.$store.state.apiUrl.entryPoint + "/users/login/",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.logIn),
          }
        );
        responseLogged = await response.json();
      } catch (error) {
        console.log(error);
      }
      // Store token in local storage
      localStorage.setItem("token", "Bearer " + responseLogged.token);
      console.log("login success");
      setTimeout(() => {
        this.$router.push({ name: "home" });
      }, 100);
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
