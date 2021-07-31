<template>
  <div class="myComment">
    <p class="myCommentTitle text-primary">Ajouter un commentaire</p>
    <div class="myCommentContent bg-info">
      <div class="myCommentContentProfile">
        <img
          src="../../../public/images/testStatic/femaleProfile2.jpg"
          alt="Nom du profil"
          class="myCommentContentProfilePicture"
        />
        <p class="myCommentContentProfileName text-primary">Becassine32</p>
      </div>
      <TextBlock class="myCommentContentText"/>
      <ValidateButton class="myCommentContentValidateButton"/>
    </div>
  </div>
</template>

<script>
import TextBlock from "@/components/form/TextBlock.vue";
import ValidateButton from "@/components/form/ValidateButton.vue";

export default {
  name: "PostWriteAComment",
  components: {
    TextBlock, ValidateButton
  },
};
</script>

<style scoped lang="scss">
.myComment {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0;
  &Title {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  &Content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    &Profile {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      &Picture {
        width: 60px;
        height: 60px;
        border-radius: 50px;
        margin: 0 1rem;
        object-fit: cover;
        object-position: center;
      }
      &Name {
        font-weight: 600;
        font-size: 1.2rem;
        margin: 0;
      }
    }
    &Text {
      width: 90%;
      margin: 0.5rem 0;
    }
    &ValidateButton {
    }
  }
}
</style>
