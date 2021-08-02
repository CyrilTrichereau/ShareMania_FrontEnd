<template>
  <div class="newContent">
    <h1 class="text-primary newContentTitle">Nouvelle Publication</h1>
    <div class="bg-info newContentText">
      <div class="newContentTextHeader">
        <img
          src="@/../public/images/testStatic/femaleProfile4.jpg"
          alt="Nom du profil"
          class="newContentTextHeaderPicture"
        />
        <p class="h4 text-secondary newContentTextHeaderName">Becassine32</p>
      </div>
      <div class="newContentTextMain">
        <div class="newContentTextMainBlock">
          <TextBlock />
        </div>
        <Button text="Valider" />
      </div>
    </div>
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
.newContent {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  &Title {
    margin: 1rem 0;
  }
  &Text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    &Header {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      width: 88%;
      &Picture {
        width: 60px;
        height: 60px;
        border-radius: 500px;
        object-fit: cover;
        object-position: center;
      }
      &Name {
        margin: 0;
      }
    }
    &Main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
        max-width: 850px;
      &Block {
        width: 92%;
        max-width: 800px;
        margin-top: 0.5rem;
      }
    }
  }
}

@media (min-width: 992px) {
  .newContent {
    &Text {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      padding: 1rem 0;
      &Header {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: auto;
        margin-top: 1.5rem;
        &Picture {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
}
</style>
