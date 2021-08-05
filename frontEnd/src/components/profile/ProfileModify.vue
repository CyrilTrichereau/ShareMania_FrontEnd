<template>
  <div class="profileModify card container">
    <img
      src="@/../public/images/testStatic/femaleProfile4.jpg"
      alt="Nom du profil"
      class="profileModifyPicture"
    />
    <div class="profileModifyContent">
      <Button text="Changer ma photo de profil" />
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
        <InputBlock
          inputName="Ancien mot de passe"
          inputPlaceHolder="Ancien mot de passe"
        />
      </div>
      <div class="bg-info profileModifyContentInputBlock">
        <InputBlock
          inputName="Nouveau mot de passe"
          inputPlaceHolder="Nouveau mot de passe"
        />
      </div>
      <div class="bg-info profileModifyContentInputBlock">
        <InputBlock
          inputName="Pseudo"
          inputPlaceHolder="Ecrivez ici votre pseudo"
        />
      </div>
      <div class="bg-info profileModifyContentInputBlock">
        <ServiceBlock class="profileModifyContentInputBlockComponent" />
      </div>
      <div
        class="profileModifyContentValidateWrapper"
        @click="confirmationPopInIsOpen = !confirmationPopInIsOpen"
      >
        <Button text="Sauvegarder mes changements" />
      </div>
      <ConfirmationPopIn
        v-if="confirmationPopInIsOpen"
        redirectUrl="/my-profile" confirmationType="modify"
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/form/Button.vue";
import InputBlock from "@/components/form/InputBlock.vue";
import ServiceBlock from "@/components/form/ServiceBlock.vue";
import ConfirmationPopIn from "@/components/ConfirmationPopIn.vue";

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
    };
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
  }
}
</style>
