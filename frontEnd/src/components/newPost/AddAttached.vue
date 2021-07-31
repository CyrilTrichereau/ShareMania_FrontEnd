<template>
  <div class="addAttached">
    <p class="h5">Ajoutez du contenu à votre publication !</p>
    <div class="addAttachedFilter">
      <button class="btn btn-primary addAttachedFilter9gag">
        9GAG
      </button>
      <button class="btn btn-primary addAttachedFilterImage">
        Image
      </button>
      <button class="btn btn-primary addAttachedFilterVideo">
        Vidéo
      </button>
    </div>
    <DisplayPosts9gag class="addAttachedDisplay9gag" />
  </div>
</template>

<script>
import DisplayPosts9gag from "@/components/Posts9gagList.vue";

export default {
  name: "AddAttached",
  components: {
    DisplayPosts9gag,
  },
};
</script>

<style scoped lang="scss">
.addAttached {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 2rem 0;
  width: 100%;
  &Filter {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 900px;
  }
  &Display9gag {
    margin: 3rem 0;
  }
}
</style>
