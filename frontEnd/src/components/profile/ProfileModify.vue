<template>
  <div class="profileModifyContent">
    <InputFile
      text="Changer ma photo de profil"
      @ascend-send-media-to-post-object="saveNewPictureProfile"
    />
    <div class="profileModifyContentStatus" v-if="$store.state.profile.myProfile.moderator">
      <font-awesome-icon
        icon="shield-alt"
        class="text-success profileModifyContentStatusIcon"
      />
      <p class="text-success h4 profileModifyContentStatusText">
        Modérateur
      </p>
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
        textInvalid="Le pseudo ne peut contenir que des majuscules, minuscules et chiffres"
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
    <div
      class="profileModifyContentValidateWrapper"
      @click="saveProfileChanges"
    >
      <Button text="Sauvegarder mes changements" />
    </div>
    <div
      class="profileModifyContentValidateWrapper"
      @click="$store.dispatch('changeProfileModifyOrShow')"
    >
      <Button text="Quitter sans sauvegarder" :danger="true" />
    </div>
    <p
      class="text-danger profileModifyContentInvalidText"
      v-show="formIsNotValid"
    >
      Pour pouvoir valider les modifications, corrigez les champs indiqués
    </p>
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
import ConfirmationPopIn from "@/components/ConfirmationPopIn.vue";

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
      profileToSave: {
        _id: "",
        oldPassword: "",
        newPassword: "",
        alias: "",
        service: "",
        urlPicture: "",
        mediaPicture: "",
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
      this.profileToSave.mediaPicture = payload[0];
      this.$emit("new-picture-profile", payload[1]);
    },
    saveProfileChanges() {
      let formCompleted = true;
      this.arrayIsValid.forEach((element) => {
        if (element !== "success") {
          formCompleted = false;
        }
      });
      if (formCompleted) {
        console.log(this.profileToSave);
        // this.sendProfileObject(this.profileToSave, "PUT");
        this.confirmationPopInIsOpen = !this.confirmationPopInIsOpen;
      } else {
        this.formIsNotValid = true;
      }
    },
  },
  created() {
    this.profileToSave._id = this.$store.state.profile.myProfile._id;
    this.profileToSave.alias = this.$store.state.profile.myProfile.alias;
    this.profileToSave.service = this.$store.state.profile.myProfile.service;
    this.profileToSave.urlPicture = this.$store.state.profile.myProfile.urlPicture;
    this.profileToSave.mediaPicture = "";
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
