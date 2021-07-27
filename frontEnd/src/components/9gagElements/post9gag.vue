<template>
  <div class="container card col-11 bg-dark col-lg-8 p-0 my-1 post9gag">
    <HeaderPost9gag />
    <img
      src="../../../public/images/testStatic/funFrogs.jpg"
      alt="Mettre le commentaire"
      class="post9gagPicture"
    />
    <p class="post9gagComment text-light bg-primary">Trop cool la grenouille !</p>
  </div>
</template>

<script>
import HeaderPost9gag from "@/components/9gagElements/headerPost9gag.vue";

export default {
  name: "Post9gag",
  components: {
    HeaderPost9gag,
  },
};
</script>

<style scoped lang="scss">
.post9gag {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &Picture {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  &Comment {
    margin: 0rem;
    padding: 0.5rem 0;
    width: 100%;
  }
}
</style>
