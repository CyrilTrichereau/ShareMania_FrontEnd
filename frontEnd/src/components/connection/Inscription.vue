<template>
  <div class="inscription">
    <h2 class="inscriptionTitle text-primary">
      Inscription
    </h2>
    <div class="inscriptionBlocksWrapper">
      <InputBlock
        inputName="Pseudo"
        inputPlaceHolder="Ecrivez ici votre pseudo"
        @input-value="saveNewAlias"
        textInvalid="Le pseudo ne peut contenir que des majuscules, minuscules et chiffres. Minimum 5	caractères et maximum 12 caractères."
        patternType="alias"
      />
      <InputBlock
        inputName="Adresse email"
        inputPlaceHolder="Ecrivez ici votre email"
        inputType="email"
        @input-value="saveEmail"
        textInvalid="Merci d'entrer une adresse email valide"
        patternType="email"
      />
      <InputBlock
        inputName="Mot de passe"
        inputPlaceHolder="Ecrivez ici votre mot de passe"
        inputType="password"
        @input-value="savePassword"
        textInvalid="Le mot de passe doit contenir 8 caractères minimum, avec au moins: 1 majuscule, 1 minuscule, 1 chiffre et 1 caractere spécial ( + - = , ; . )"
        patternType="password"
      />
      <ServiceBlock
        class="inscriptionBlock"
        @select-value="saveService"
        :inscription="true"
        textInvalid="Veuillez sélectionner un service"
        :noChoiceSelected="serviceChoiceIsValid"
      />
      <InputFile
        text="Importer une photo de profil"
        @ascend-send-media-to-post-object="saveNewPictureProfile"
      />
    </div>
    <div
      class="inscriptionPictureBlock"
      v-if="profileToSave.urlPicture !== urlPictureForEmpty"
    >
      <img
        :src="profileToSave.urlPicture"
        :alt="'Photo de profil de ' + profileToSave.alias"
        class="inscriptionPictureBlockImage"
      />
      <Button
        text="Supprimer la photo de profil"
        :danger="true"
        @click.native="erasePictureProfile"
      />
    </div>
    <div class="inscriptionValidateWrapper" @click="saveProfileChanges">
      <Button text="Valider" />
    </div>
    <p
      class="text-danger inscriptionInvalidText"
      v-show="inscriptionIsNotValid"
    >
      Merci de compléter tous les champs pour valider votre inscription
    </p>
    <ConfirmationPopIn
      v-if="confirmationPopInIsOpen"
      redirectUrl="/"
      confirmationType="create"
    />
  </div>
</template>

<script>
import InputBlock from "@/components/form/InputBlock.vue";
import ServiceBlock from "@/components/form/ServiceBlock.vue";
import InputFile from "@/components/form/InputFile.vue";
import Button from "@/components/form/Button.vue";
import ConfirmationPopIn from "@/components/ConfirmationPopIn.vue";

export default {
  name: "Inscription",
  components: {
    InputBlock,
    ServiceBlock,
    InputFile,
    Button,
    ConfirmationPopIn,
  },
  data() {
    return {
      serviceChoiceIsValid: "none",
      confirmationPopInIsOpen: false,
      arrayIsValid: [false, false, false, false],
      inscriptionIsNotValid: false,
      urlPictureForEmpty:
        "http://localhost:8080/mediaStatic/unknowProfile250pxTinyfied.jpg",
      profileToSave: {
        email: "",
        password: "",
        alias: "",
        service: "",
        urlPicture:
          "http://localhost:8080/mediaStatic/unknowProfile250pxTinyfied.jpg",
        mediaFile: "",
      },
    };
  },
  methods: {
    saveEmail(payload) {
      this.profileToSave.email = payload[0];
      this.arrayIsValid[0] = payload[1];
    },
    savePassword(payload) {
      this.profileToSave.password = payload[0];
      this.arrayIsValid[1] = payload[1];
    },
    saveNewAlias(payload) {
      this.profileToSave.alias = payload[0];
      this.arrayIsValid[2] = payload[1];
    },
    saveService(payload) {
      this.profileToSave.service = payload;
      this.serviceChoiceIsValid = "success";
      this.arrayIsValid[3] = "success";
    },
    saveNewPictureProfile(payload) {
      this.profileToSave.urlPicture = payload[1];
      this.profileToSave.mediaFile = payload[0].target.files[0];
    },
    erasePictureProfile() {
      this.profileToSave.urlPicture = this.urlPictureForEmpty;
    },
    async saveProfileChanges() {
      let formCompleted = true;
      this.arrayIsValid.forEach((element) => {
        if (element !== "success") {
          formCompleted = false;
        }
      });
      if (formCompleted) {
        let responseFormData = new FormData();
        // Params
        const requestObject = [
          ["email", this.profileToSave.email],
          ["password", this.profileToSave.password],
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
            this.$store.state.apiUrl.entryPoint + "/users/register/",
            {
              method: "POST",
              body: responseFormData,
            }
          );
          responseNewUser = await response.json();
        } catch (error) {
          console.log(error);
        }

        // Store token in local storage
        localStorage.setItem("token", "Bearer " + responseNewUser.token);

        // Open confirmation pop in
        this.confirmationPopInIsOpen = !this.confirmationPopInIsOpen;
      } else {
        this.inscriptionIsNotValid = true;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.inscription {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-top: 2rem;
  &PictureBlock {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    &Image {
      width: 140px;
      height: 140px;
      border-radius: 500px;
      object-fit: cover;
      object-position: center;
    }
  }
  &Title {
    margin: 1rem 0;
  }
  &BlocksWrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
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
