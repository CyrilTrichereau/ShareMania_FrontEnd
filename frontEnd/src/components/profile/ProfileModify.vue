<template>
  <div class="profileModifyContent">
    <InputFile
      text="Changer ma photo de profil"
      @ascend-send-media-to-post-object="saveNewPictureProfile"
    />
    <div class="profileModifyContentStatus" v-if="myProfile.moderator">
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
        inputPlaceHolder="Ancien mot de passe"
        @input-value="saveOldPassword"
      />
    </div>
    <div class="bg-info profileModifyContentInputBlock">
      <InputBlock
        inputName="Nouveau mot de passe"
        inputPlaceHolder="Nouveau mot de passe"
        @input-value="saveNewPassword"
      />
    </div>
    <div class="bg-info profileModifyContentInputBlock">
      <InputBlock
        inputName="Pseudo"
        :inputPlaceHolder="myProfile.alias"
        @input-value="saveNewAlias"
      />
    </div>
    <div class="bg-info profileModifyContentInputBlock">
      <ServiceBlock
        class="profileModifyContentInputBlockComponent"
        @select-value="saveService"
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
      @click="changeProfileModifyOrShow"
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
import ConfirmationPopIn from "@/components/ConfirmationPopIn.vue";
import { mapActions, mapState } from "vuex";

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
  computed: {
    ...mapState(["myProfile"]),
  },
  methods: {
    ...mapActions(["changeProfileModifyOrShow", "sendProfileChanges"]),
    saveOldPassword(payload) {
      this.profileToSave.oldPassword = payload;
    },
    saveNewPassword(payload) {
      this.profileToSave.newPassword = payload;
    },
    saveNewAlias(payload) {
      this.profileToSave.alias = payload;
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
      // this.sendProfileObject(this.profileToSave, "PUT");
      this.confirmationPopInIsOpen = !this.confirmationPopInIsOpen;
    },
  },
  created() {
    this.profileToSave._id = this.myProfile._id;
    this.profileToSave.alias = this.myProfile.alias;
    this.profileToSave.service = this.myProfile.service;
    this.profileToSave.urlPicture = this.myProfile.urlPicture;
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
}
</style>
