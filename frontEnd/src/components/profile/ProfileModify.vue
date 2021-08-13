<template>
  <div class="profileModify card container">
    <Button text="Changer ma photo de profil" />
    <div class="profileModifyContent">
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
  </div>
</template>

<script>
import Button from "@/components/form/Button.vue";
import InputBlock from "@/components/form/InputBlock.vue";
import ServiceBlock from "@/components/form/ServiceBlock.vue";
import ConfirmationPopIn from "@/components/ConfirmationPopIn.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "ProfileModify",
  components: {
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
      },
    };
  },
  computed: {
    ...mapState(["myProfile", "myProfileModify"]),
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
    saveProfileChanges() {
      this.profileToSave._id = this.myProfile._id;
      // this.sendProfileObject(this.profileToSave, "PUT");
      this.confirmationPopInIsOpen = !this.confirmationPopInIsOpen;
    },
  },
};
</script>

<style scoped lang="scss">
.profileModify {
  z-index: 1 !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 140px 0 0 0;
  margin: 140px 0 0 0;
  width: 92%;
  max-width: 600px;
  &Content {
    position: relative;
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
}
</style>
