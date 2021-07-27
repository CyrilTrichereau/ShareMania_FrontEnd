<template>
  <div class="profileModify">
    <img
      src="../../../public/images/testStatic/femaleProfile4.jpg"
      alt="Nom du profil"
      class="profileModifyPicture"
    />

    <div class="profileModifyContent card container">
      <ModifyPictureButton class="profileModifyContentModifyPictureButton" />
      <div class="profileModifyContentStatus">
        <font-awesome-icon
          icon="shield-alt"
          class="text-success profileModifyContentStatusIcon"
        />
        <p class="text-success h4 profileModifyContentStatusText">
          Modérateur
        </p>
      </div>

      <!-- ------------------------- -->
      <!-- ------------------------- -->
      <!-- ------------------------- -->
      <div class="bg-info profileModifyContentOldPassword">
        <PasswordBlock class="profileModifyContentOldPasswordComponent" />
      </div>

      <!-- ------------------------- -->
      <!-- ------------------------- -->
      <!-- ------------------------- -->
      <div class="bg-info profileModifyContentNewPassword">
        <PasswordBlock class="profileModifyContentNewPasswordComponent" />
      </div>
      <!-- ------------------------- -->
      <!-- ------------------------- -->
      <!-- ------------------------- -->
      <div class="bg-info profileModifyContentAlias">
        <AliasBlock class="profileModifyContentAliasComponent" />
      </div>
      <!-- ------------------------- -->
      <!-- ------------------------- -->
      <!-- ------------------------- -->
      <div class="bg-info profileModifyContentService">
        <ServiceBlock class="profileModifyContentServiceComponent" />
      </div>

      <ValidateButton class="profileModifyContentValidateButton" />
    </div>
  </div>
</template>

<script>
import ModifyPictureButton from "@/components/formElements/modifyPictureButton.vue";
import PasswordBlock from "@/components/formElements/passwordBlock.vue";
import AliasBlock from "@/components/formElements/aliasBlock.vue";
import ServiceBlock from "@/components/formElements/passwordBlock.vue";
import ValidateButton from "@/components/formElements/validateButton.vue";

export default {
  name: "ProfileModify",
  components: {
    ModifyPictureButton,
    PasswordBlock,
    AliasBlock,
    ServiceBlock,
    ValidateButton,
  },
};
</script>

<style scoped lang="scss">
.profileModify {
  &Picture {
    width: 280px;
    height: 280px;
    border-radius: 500px;
    object-fit: cover;
    object-position: center;
    z-index: 99;
  }
  &Content {
    z-index: -1;
    top: -140px;
    padding: 160px 0 2rem 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 92%;
    &ModifyPictureButton {
        
    }
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
    &OldPassword {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 1rem 0;
      &Component {
        width: 90%;
      }
    }
    &NewPassword {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 1rem 0;
      &Component {
        width: 90%;
      }
    }
    &Alias {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 1rem 0;
      &Component {
        width: 90%;
      }
    }
    &Service {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 1rem 0;
      &Component {
        width: 90%;
      }
    }
    &ValidateButton {
      width: 100%;
    }
  }
}
</style>
