<template>
  <div class="profileModify card container">
    <img
      src="../../../public/images/testStatic/femaleProfile4.jpg"
      alt="Nom du profil"
      class="profileModifyPicture"
    />
    <div class="profileModifyContent">
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
      <div class="bg-info profileModifyContentInputBlock">
        <PasswordBlock class="profileModifyContentInputBlockComponent" />
      </div>
      <div class="bg-info profileModifyContentInputBlock">
        <PasswordBlock class="profileModifyContentInputBlockComponent" />
      </div>
      <div class="bg-info profileModifyContentInputBlock">
        <AliasBlock class="profileModifyContentInputBlockComponent" />
      </div>
      <div class="bg-info profileModifyContentInputBlock">
        <ServiceBlock class="profileModifyContentInputBlockComponent" />
      </div>
      <ValidateButton class="profileModifyContentValidateButton" />
    </div>
  </div>
</template>

<script>
import ModifyPictureButton from "@/components/formElements/modifyPictureButton.vue";
import PasswordBlock from "@/components/formElements/passwordBlock.vue";
import AliasBlock from "@/components/formElements/aliasBlock.vue";
import ServiceBlock from "@/components/formElements/serviceBlock.vue";
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 160px;
  padding: 0;
  width: 92%;
  max-width: 600px;
  &Picture {
    position: relative;
    top: -140px;
    width: 280px;
    height: 280px;
    border-radius: 500px;
    object-fit: cover;
    object-position: center;
  }
  &Content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    top: -140px;

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
    &InputBlock {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 1rem 0;
      &Component {
        width: 90%;
        max-width: 350px;
      }
    }
    &ValidateButton {
      width: 100%;
    }
  }
}
</style>
