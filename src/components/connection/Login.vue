<template>
  <div class="bg-primary login">
    <h2 class="loginTitle text-light h2">Connexion</h2>
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
      @validate-input-with-enter="logInToAccount"
    />
    <p v-show="loginFailed" class="loginInvalidText">
      Adresse email ou mot de passe invalide
    </p>
    <Button text="Valider" @click="logInToAccount" />
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
      emailIsValid: false,
      passwordIsValid: false,
      loginFailed: false,
    };
  },
  methods: {
    saveEmail(payload) {
      this.logIn.email = payload[0];
      if (payload[1] === "success") {
        this.emailIsValid = true;
      } else {
        this.emailIsValid = false;
      }
    },
    savePassword(payload) {
      this.logIn.password = payload[0];
      if (payload[1] === "success") {
        this.passwordIsValid = true;
      } else {
        this.passwordIsValid = false;
      }
    },
    async logInToAccount() {
      this.loginFailed = false;
      if (this.emailIsValid && this.passwordIsValid) {
        let response = null;
        let responseLogged = null;
        // Send login request
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
        if (responseLogged.token) {
          // Store token in local storage
          localStorage.setItem("token", "Bearer " + responseLogged.token);
          console.log("login success");
          setTimeout(() => {
            this.$router.push({ name: "home" });
          }, 100);
        } else {
          this.loginFailed = true;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
$danger: #c02200;
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
  &InvalidText {
    color: white;
    text-shadow: 1px 1px 1px $danger;
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

/* INVALID INPUT */
@keyframes headshake {
  25% {
    /* droite */
    transform: translateX(1%);
  }
  75% {
    /* gauche */
    transform: translateX(-1%);
  }
}
</style>
