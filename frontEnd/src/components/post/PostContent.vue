<template>
  <div class="postContent bg-info">
    <p class="postContentComment h5">
      Trop rigolo l'histoire de la patate qui meurt !
    </p>
    <img
      src="@/../public/images/testStatic/funPotatoes.jpg"
      alt="Mettre le commentaire posté"
      class="postContentPicture"
    />
  </div>
</template>

<script>
export default {
  name: "PostContent",
};
</script>

<style scoped lang="scss">
.postContent {
  border-radius: 15px 15px 0 0;
  &Comment {
    margin: 1.5rem 1.5rem;
    text-align: left;
  }
  &Picture {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>
