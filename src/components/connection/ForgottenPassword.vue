<template>
  <div class="forgottenPassword">
    <div class="forgottenPasswordSideBar"></div>
    <div class="forgottenPasswordWrapper">
      <div class="container card bg-light forgottenPasswordWrapperCard">
        <div class="bg-primary forgottenPasswordWrapperCardHeader">
          <button
            class="btn btn-primary forgottenPasswordWrapperCardHeaderCrossIcon"
            @click="closeWindowForgottenPassword"
          >
            <CrossIcon :colorThemePrimary="false" />
          </button>
          <h1 class="text-light forgottenPasswordWrapperCardHeaderTitle">
            Mot de passe oublié
          </h1>
        </div>
        <div class="bg-light forgottenPasswordWrapperCardInformations">
          <p
            class="h5 text-primary forgottenPasswordWrapperCardInformationsText"
          >
            Merci de renseigner votre adresse email.
          </p>
          <p
            class="h5 text-primary forgottenPasswordWrapperCardInformationsText"
          >
            Une fois celui-ci validé, nous vous enverrons un email sous 15 min
            afin de réinitialiser votre mot de passe.
          </p>
        </div>
        <div class="bg-primary forgottenPasswordWrapperCardInputEmail">
          <InputBlock
            inputName="Adresse email"
            inputPlaceHolder="Ecrivez ici votre email"
            inputType="email"
            :titleLight="true"
            @input-value="saveEmail"
            textInvalid="Adresse email invalide"
            patternType="email"
            @validate-input-with-enter="sendForgottenPasswordInfos"
          />
        </div>
        <div
          class="forgottenPasswordWrapperCardMessageSuccess"
          v-if="confirmationIsOpen"
        >
          <p
            class="text-success forgottenPasswordWrapperCardMessageSuccessText"
          >
            Si l'adresse est valide, un email de réinitialisation vient de
            partir.
          </p>
          <p
            class="text-success forgottenPasswordWrapperCardMessageSuccessText"
          >
            Suivez la procédure pour enregistrer un nouveau mot de passe.
          </p>
        </div>
        <div
          class="forgottenPasswordWrapperCardValidateButton"
          @click="sendForgottenPasswordInfos"
        >
          <Button text="Valider" />
        </div>
      </div>
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
      emailIsValid: false,
    };
  },
  methods: {
    saveEmail(payload) {
      this.emailForgotten = payload[0];
      this.emailIsValid = payload[1];
      this.confirmationIsOpen = false;
    },
    changingStateConfirmationIsOpen() {
      if (this.confirmationIsOpen === false) {
        this.confirmationIsOpen = true;
      }
    },
    closeWindowForgottenPassword() {
      this.$emit("close-window-forgotten-password");
    },
    async sendForgottenPasswordInfos() {
      this.confirmationIsOpen = false;
      // If adress email is a valid input
      if (this.emailIsValid === "success") {
        // Prepare sending request
        let requestForgottenPassword = {
          email: this.emailForgotten,
        };
        let response = null;
        let responseLogged = null;
        // fetch new post
        try {
          response = await fetch(
            this.$store.state.apiUrl.entryPoint + "/users/forgottenPassword/",
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(requestForgottenPassword),
            }
          );
          responseLogged = await response.json();
          console.log(responseLogged);
        } catch (error) {
          console.log(error);
        }
        this.confirmationIsOpen = true;
        setTimeout(() => {
          this.$emit("close-window-forgotten-password");
        }, 2000);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.forgottenPassword {
  z-index: 20;
  width: 100%;
  height: 2000px;
  position: fixed;
  display: flex;
  top: 62px;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  &SideBar {
    display: none;
  }
  &Wrapper {
    width: 100%;
    height: 100%;
    &Card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      width: 84%;
      max-width: 600px;
      margin-top: 2rem;
      padding: 0 0 2rem 0;
      &Header {
        width: 100%;
        padding: 1.5rem 0 0.5rem 0;
        &CrossIcon {
          position: absolute;
          width: 30px;
          height: 30px;
          top: 1rem;
          right: 1rem;
          padding: 0;
        }
        &Title {
          margin: 1rem 1rem;
        }
      }
      &Informations {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 1rem;
        margin: 0;
        padding: 1rem;
        &Text {
          margin: 0 1rem;
        }
      }
      &InputEmail {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 1rem;
      }
      &MessageSuccess {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.8rem;
        margin: 1rem;
        width: 80%;
        &Text {
          margin: 0;
        }
      }
    }
  }
}

@media (min-width: 992px) {
  .forgottenPassword {
    top: 0px;
    &SideBar {
      display: none;
      flex: 0 0 300px;
    }
    &Wrapper {
      &Card {
        flex: 1 1 auto;
        margin-top: 4rem;
      }
    }
  }
}
</style>
