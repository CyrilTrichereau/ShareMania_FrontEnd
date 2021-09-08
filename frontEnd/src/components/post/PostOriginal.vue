<template>
  <div class="postOriginal bg-info" v-if="alias">
    <div class="postOriginalProfil" v-if="urlPicture">
      <img
        :src="urlPicture"
        :alt="'Photo de profil de ' + alias"
        class="postOriginalProfilPicture"
      />
      <p class="postOriginalProfilName text-primary">{{ alias }}</p>
    </div>
    <p class="postOriginalComment">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "PostOriginal",
  props: {
    alias: {
      type: String,
      require: true,
    },
    urlPicture: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
  },
};
</script>

<style scoped lang="scss">
.postOriginal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 2rem;
  padding: 0.5rem 1rem;
  border-radius: 0 0 15px 15px;

  &Profil {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    &Picture {
      width: 40px;
      height: 40px;
      border-radius: 50px;
      margin: 0 0.5rem;
      object-fit: cover;
      object-position: center;
    }
    &Name {
      font-weight: 600;
      margin: 0;
    }
  }
  &Comment {
    margin: 0.5rem 0;
  }
}
</style>
