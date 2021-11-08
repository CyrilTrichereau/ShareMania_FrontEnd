<template>
  <div class="container card resetPassword">
    <div class="resetPasswordHeader">
      <div class="resetPasswordHeaderShareMania bg-primary">
        <img
          src="@/../public/images/groupomaniaLogoWhite100pxTinyfied.png"
          alt="ShareMania Logo"
          class="resetPasswordHeaderShareManiaLogo"
        />
        <p class="h1 text-light resetPasswordHeaderShareManiaText">
          ShareMania
        </p>
      </div>

      <div class="resetPasswordHeaderPresentation">
        <h1 class="h5 text-primary resetPasswordHeaderPresentationTitle">
          Vous avez oublié votre mot de passe ?
        </h1>
        <p class="resetPasswordHeaderPresentationText">
          Vous êtes sur la bonne page !
        </p>
      </div>
    </div>
    <div class="bg-primary resetPasswordMain">
      <div class="resetPasswordMainInputPasswords">
        <h2 class="h3 text-light resetPasswordMainInputPasswordsTitle">
          Réinitialisez votre mot de passe
        </h2>
        <InputBlock
          inputName="Nouveau mot de passe"
          inputPlaceHolder="Ecrivez ici votre nouveau mot de passe"
          inputType="password"
          :titleLight="true"
          @input-value="saveNewPassword"
          textInvalid="Le mot de passe doit contenir 8 caractères minimum, avec au moins: 1 majuscule, 1 minuscule, 1 chiffre et 1 caractere spécial ( + - = , ; . )"
          patternType="password"
        />
        <InputBlock
          inputName="Confirmez votre mot de passe"
          inputPlaceHolder="Confirmez votre mot de passe"
          inputType="password"
          :titleLight="true"
          @input-value="saveNewPasswordConfirm"
          textInvalid="Le mot de passe doit contenir 8 caractères minimum, avec au moins: 1 majuscule, 1 minuscule, 1 chiffre et 1 caractere spécial ( + - = , ; . )"
          patternType="password"
          @validate-input-with-enter="sendNewPassword"
        />
      </div>
      <ConfirmationPopIn
        v-if="confirmationPopInIsOpen"
        redirectUrl="/"
        confirmationType="modifyPassword"
      />

      <p class="h5 resetPasswordMainInvalidText" v-show="invalidText">
        Les deux mots de passe ne sont pas identiques
      </p>

      <div class="resetPasswordMainInvalid" v-show="invalidFromServer">
        <p class="h4 resetPasswordMainInvalidText">
          Le mot de passe n'a pas pu être mis à jour.
        </p>
        <p class="h5 resetPasswordMainInvalidText">
          Merci de recommencer la procédure de réinitialisation de mot de passe,
          ou de vous rapprocher de votre manager.
        </p>
      </div>
      <div class="resetPasswordMainValidate" @click="sendNewPassword">
        <Button text="Valider" />
      </div>
    </div>
  </div>
</template>

<script>
import * as utils from "@/assets/utils.js";
import InputBlock from "@/components/form/InputBlock.vue";
import Button from "@/components/form/Button.vue";
import ConfirmationPopIn from "@/components/ConfirmationPopIn.vue";

export default {
  name: "ConnectionPage",
  components: {
    InputBlock,
    Button,
    ConfirmationPopIn,
  },
  data() {
    return {
      confirmationPopInIsOpen: false,
      invalidText: false,
      invalidFromServer: false,
      newPassword: "",
      newPasswordIsValid: false,
      newPasswordConfirm: "",
      newPasswordConfirmIsValid: false,
    };
  },
  methods: {
    async sendNewPassword() {
      this.invalidText = false;
      this.invalidFromServer = false;
      // If new password and confirm password are valid input
      if (this.newPasswordIsValid && this.newPasswordConfirmIsValid) {
        // If new password and confirm password are not the same
        if (this.newPasswordIsValid === this.newPasswordConfirmIsValid) {
          //Prepare response
          let requestNewPassword = {
            newPassword: this.newPassword,
            token: this.$route.params.token,
          };
          let response = null;
          let responseLogged = null;
          console.log({ requestNewPassword: requestNewPassword });
          // Send new password request
          try {
            response = await fetch(
              this.$store.state.apiUrl.entryPoint + "/users/changePassword/",
              {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(requestNewPassword),
              }
            );
            responseLogged = await response.json();
          } catch (error) {
            console.log(error);
          }
          if (responseLogged) {
            if (responseLogged.error) {
              this.invalidFromServer = true;
            } else {
              console.log({ responseLogged: responseLogged });
              // Store token in local storage
              localStorage.setItem("token", "Bearer " + responseLogged.token);
              console.log("login success");
              this.confirmationPopInIsOpen = true;
            }
          } else {
            this.invalidFromServer = true;
          }
        } else {
          this.invalidText = true;
        }
      }
    },
    saveNewPassword(payload) {
      this.newPassword = payload[0];
      this.newPasswordIsValid = payload[1];
    },
    saveNewPasswordConfirm(payload) {
      this.newPasswordConfirm = payload[0];
      this.newPasswordConfirmIsValid = payload[1];
    },
  },
  async created() {
    const isValidToken = await utils.controlAuth();
    if (isValidToken) {
      this.$store.dispatch("fetchMyProfile");
      this.alreadyConnected = true;
      setTimeout(() => {
        this.$router.push({ name: "home" });
      }, 2000);
    }
  },
};
</script>

<style scoped lang="scss">
$danger: #c02200;

.resetPassword {
  width: 92%;
  padding: 0;
  overflow: hidden;
  margin: 5rem auto 4rem auto;
  &Header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 0;
    margin: 0;

    &ShareMania {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 0.3rem;
      padding: 1.5rem 0;
      &Logo {
        width: 2.7rem;
        margin: 0 0.5rem;
      }
      &Text {
        margin: 0;
      }
    }
    &Presentation {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin: 1.5rem 0;
      width: 90%;
      &Title {
        font-weight: 700;
      }
      &Text {
        width: 89%;
        margin: 0;
      }
    }
  }
  &Main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding: 2rem 0;
    &InputPasswords {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      width: 100%;
      padding: 0 1rem;
    }
    &Invalid {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      &Text {
        color: white;
        text-shadow: 1px 1px 1px $danger;
        margin: 0 2rem;
      }
    }
    &Validate {
      margin: 1rem;
    }
  }
}
</style>
