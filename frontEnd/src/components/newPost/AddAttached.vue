<template>
  <div class="addAttached">
    <p class="h4 addAttachedText">Ajoutez du contenu à votre publication !</p>
    <div class="addAttachedFilter">
    <Button text="9GAG"/>
    <Button text="Image"/>
    <Button text="Vidéo"/>
    </div>
    <div class="addAttachedDisplay9gag">
        <PostsList title="Posts 9GAG !" :posts9gag="true" :smallTitle="true" />
</div>
  </div>
</template>

<script>
import Button from "@/components/form/Button.vue";
import PostsList from "@/components/PostsList.vue";

export default {
  name: "AddAttached",
  components: {
    PostsList,
    Button,
  },
};
</script>

<style scoped lang="scss">
.addAttached {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 1rem 0;
  width: 100%;
  &Text {
    margin: 1rem;
  }
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
