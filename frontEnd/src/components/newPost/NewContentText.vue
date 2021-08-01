<template>
  <div class="bg-info newContentText">
    <div class="newContentTextHeader">
      <img
        src="../../../public/images/testStatic/femaleProfile4.jpg"
        alt="Nom du profil"
        class="newContentTextHeaderPicture"
      />
      <div class="newContentTextHeaderText">
        <p class="h4 text-primary">Nouvelle Publication</p>
        <p class="h6 text-secondary">Becassine32</p>
      </div>
    </div>
    <TextBlock class="newContentTextBlock" />
    <Button text="Valider"/>
  </div>
</template>

<script>
import TextBlock from "@/components/form/TextBlock.vue";
import Button from "@/components/form/Button.vue";

export default {
  name: "NewContentText",
  components: {
    TextBlock,
    Button,
  },
};
</script>

<style scoped lang="scss">
.newContentText {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  &Header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    width: 92%;
    max-width: 800px;
    &Picture {
      width: 80px;
      height: 80px;
      border-radius: 500px;
      object-fit: cover;
      object-position: center;
    }
  }
  &Block {
    width: 92%;
    max-width: 800px;
    margin-top: 1.5rem;
  }
}
</style>
