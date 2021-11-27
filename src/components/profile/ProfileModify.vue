<template>
  <div class="profileModifyContent">
    <InputFile
      text="Changer ma photo de profil"
      @ascend-send-media-to-post-object="saveNewPictureProfile"
    />
    <div
      class="profileModifyContentStatus"
      v-if="$store.state.profile.myProfile.moderator"
    >
      <font-awesome-icon
        icon="shield-alt"
        class="text-success profileModifyContentStatusIcon"
      />
      <p class="text-success h4 profileModifyContentStatusText">Modérateur</p>
    </div>
    <div class="bg-info profileModifyContentInputBlock">
      <InputBlock
        inputName="Ancien mot de passe"
        inputType="password"
        inputPlaceHolder="Ancien mot de passe"
        @input-value="saveOldPassword"
      />
    </div>
    <div class="bg-info profileModifyContentInputBlock">
      <InputBlock
        inputName="Nouveau mot de passe"
        inputType="password"
        inputPlaceHolder="Nouveau mot de passe"
        @input-value="saveNewPassword"
        textInvalid="Le mot de passe doit contenir 8 caractères minimum, avec au moins: 1 majuscule, 1 minuscule, 1 chiffre et 1 caractere spécial ( + - = , ; . )"
        patternType="password"
      />
    </div>
    <div class="bg-info profileModifyContentInputBlock">
      <InputBlock
        inputName="Pseudo"
        :inputPlaceHolder="$store.state.profile.myProfile.alias"
        @input-value="saveNewAlias"
        textInvalid="Le pseudo ne peut contenir que des majuscules, minuscules et chiffres. Minimum 5	caractères et maximum 12 caractères."
        patternType="alias"
      />
    </div>
    <div class="bg-info profileModifyContentInputBlock">
      <ServiceBlock
        class="profileModifyContentInputBlockComponent"
        @select-value="saveService"
        textInvalid="Veuillez sélectionner un service"
      />
    </div>
    <p
      class="text-danger profileModifyContentInvalidText"
      v-show="formIsNotValid"
    >
      Pour pouvoir valider les modifications, corrigez les champs indiqués
    </p>
    <p
      class="text-danger profileModifyContentInvalidText"
      v-show="requestInvalid"
    >
      {{ messageRequestInvalid }}
    </p>
    <div
      class="profileModifyContentValidateWrapper"
      @click="saveProfileChanges"
    >
      <Button text="Sauvegarder mes changements" />
    </div>
    <div
      class="profileModifyContentValidateWrapper"
      @click="closeAndResetPicture"
    >
      <Button text="Quitter sans sauvegarder" :danger="true" />
    </div>
    <div class="profileModifyContentValidateConfirmationWrapper">
      <ConfirmationPopIn
        v-if="confirmationPopInIsOpen"
        redirectUrl="/my-profile"
        confirmationType="modify"
        @close-confirmation-pop-in="
          confirmationPopInIsOpen = !confirmationPopInIsOpen
        "
      />
    </div>
  </div>
</template>

<script>
import InputFile from "@/components/form/InputFile.vue";
import Button from "@/components/form/Button.vue";
import InputBlock from "@/components/form/InputBlock.vue";
import ServiceBlock from "@/components/form/ServiceBlock.vue";
import ConfirmationPopIn from "@/components/popIn/ConfirmationPopIn.vue";

export default {
  name: "ProfileModify",
  components: {
    InputFile,
    Button,
    InputBlock,
    ServiceBlock,
    ConfirmationPopIn,
  },
  data() {
    return {
      confirmationPopInIsOpen: false,
      arrayIsValid: [true, true, true],
      formIsNotValid: false,
      requestInvalid: false,
      messageRequestInvalid: "Mot de passe invalide",
      profileToSave: {
        _id: "",
        oldPassword: "",
        newPassword: "",
        alias: "",
        service: "",
        urlPicture: "",
        mediaFile: "",
      },
    };
  },
  methods: {
    saveOldPassword(payload) {
      this.profileToSave.oldPassword = payload[0];
      this.arrayIsValid[0] = payload[1];
    },
    saveNewPassword(payload) {
      this.profileToSave.newPassword = payload[0];
      this.arrayIsValid[1] = payload[1];
    },
    saveNewAlias(payload) {
      this.profileToSave.alias = payload[0];
      this.arrayIsValid[2] = payload[1];
    },
    saveService(payload) {
      this.profileToSave.service = payload;
    },
    saveNewPictureProfile(payload) {
      this.profileToSave.urlPicture = payload[1];
      this.profileToSave.mediaFile = payload[0].target.files[0];
      this.$emit("new-picture-profile", payload[1]);
    },
    async saveProfileChanges() {
      // First close alerts
      this.formIsNotValid = false;
      this.requestInvalid = false;

      // Then check values (oldPassword, newPassword and alias) from input with regex (informations from component)
      let isValidInput = true;
      this.arrayIsValid.forEach((element) => {
        if (element === "invalid") {
          isValidInput = false;
        }
      });

      if (isValidInput) {
        // Then, if values from input are valid, check if oldPassword or newPassword have entry and check if they are same
        let isPasswordValid = true;
        if (this.profileToSave.oldPassword && this.profileToSave.newPassword) {
          if (
            this.profileToSave.oldPassword == this.profileToSave.newPassword
          ) {
            this.messageRequestInvalid =
              "Le nouveau mot de passe est le même que l'ancien.";
            isPasswordValid = false;
          }
        } else if (
          this.profileToSave.oldPassword ||
          this.profileToSave.newPassword
        ) {
          this.messageRequestInvalid =
            "Merci de remplir les cases 'Ancien mot de passe' ET 'Nouveau mot de passe' afin de pouvoir valider le changement de mot de passe.";
          isPasswordValid = false;
        }

        if (isPasswordValid) {
          // Then, check if service is the same erase it from the data to send
          if (
            this.profileToSave.service ===
            this.$store.state.profile.myProfile.service
          ) {
            this.profileToSave.service = null;
          }

          // Then check if at least one input is filled
          if (
            this.profileToSave.newPassword ||
            this.profileToSave.alias ||
            this.profileToSave.service ||
            this.profileToSave.mediaFile
          ) {
            let responseFormData = new FormData();
            // Params
            const requestObject = [
              ["oldPassword", this.profileToSave.oldPassword],
              ["newPassword", this.profileToSave.newPassword],
              ["alias", this.profileToSave.alias],
              ["service", this.profileToSave.service],
              ["urlPicture", this.profileToSave.urlPicture],
            ];

            // Add file
            if (this.profileToSave.mediaFile) {
              try {
                responseFormData.append(
                  "mediaFile",
                  this.profileToSave.mediaFile,
                  this.profileToSave.mediaFile.name
                );
              } catch (error) {
                console.log(error);
              }
            }

            // Add data
            requestObject.forEach((value) => {
              try {
                responseFormData.append(value[0], value[1]);
              } catch (error) {
                console.log(error);
              }
            });

            let response = null;
            let responseNewUser = null;
            // fetch new post
            try {
              response = await fetch(
                this.$store.state.apiUrl.entryPoint + "/users/myProfile/",
                {
                  method: "PUT",
                  body: responseFormData,
                  headers: {
                    authorization: localStorage.getItem("token"),
                  },
                }
              );
              responseNewUser = await response.json();
            } catch (error) {
              console.log(error);
            }
            if (responseNewUser._id) {
              // If user is well updated, open confirmation pop in
              this.confirmationPopInIsOpen = !this.confirmationPopInIsOpen;
            } else {
              // Else, return error corresponding
              if (responseNewUser.error === "Invalid password") {
                this.messageRequestInvalid = "Mot de passe invalide.";
                this.requestInvalid = true;
                this.formIsNotValid = true;
              } else if (responseNewUser.error === "Same password") {
                this.messageRequestInvalid =
                  "Le nouveau mot de passe est le même que l'ancien.";
                this.requestInvalid = true;
                this.formIsNotValid = true;
              } else {
                this.formIsNotValid = true;
              }
            }
          } else {
            this.messageRequestInvalid = "Aucune donnée saisie.";
            this.formIsNotValid = true;
            this.requestInvalid = true;
          }
        } else {
          this.formIsNotValid = true;
          this.requestInvalid = true;
        }
      } else {
        this.formIsNotValid = true;
      }
    },
    closeAndResetPicture() {
      this.$emit(
        "new-picture-profile",
        this.$store.state.profile.myProfile.urlPicture
      );
      this.$store.dispatch("changeProfileModifyOrShow");
    },
  },

  created() {
    this.profileToSave._id = this.$store.state.profile.myProfile.id;
  },
};
</script>

<style scoped lang="scss">
.profileModifyContent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  &Status {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
    &Icon {
      font-size: 2rem;
    }
    &Text {
      margin: 0;
    }
  }
  &InputBlock {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 1rem 0;
    padding: 1rem 0;
  }
  &ValidateConfirmationWrapper {
    z-index: 20 !important;
    position: fixed;
  }
  &InvalidText {
    width: 100%;
    padding: 0.2rem 1rem;
    margin: 0.5rem 0;
    border-radius: 5px;
    $danger: #c02200;
    text-shadow: 0px 0px 1px $danger;
  }
}
</style>
