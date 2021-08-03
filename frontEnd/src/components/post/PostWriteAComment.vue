<template>
  <div class="myComment">
    <p class="myCommentTitle text-light bg-secondary">Ajouter un commentaire</p>
    <div class="myCommentContent bg-info">
      <div class="myCommentContentProfile">
        <img
          src="@/../public/images/testStatic/femaleProfile2.jpg"
          alt="Nom du profil"
          class="myCommentContentProfilePicture"
        />
        <p class="myCommentContentProfileName text-primary">Becassine32</p>
      </div>
      <TextBlock class="myCommentContentText" />
      <Button text="Valider" />
    </div>
  </div>
</template>

<script>
import TextBlock from "@/components/form/TextBlock.vue";
import Button from "@/components/form/Button.vue";

export default {
  name: "PostWriteAComment",
  components: {
    TextBlock,
    Button,
  },
};
</script>

<style scoped lang="scss">
.myComment {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  &Title {
    width: 100%;
    font-size: 1.3rem;
    margin: 0;
    padding: 1rem;
    border-radius: 15px;
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
      margin-left: 10%;
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
  }
}
</style>
