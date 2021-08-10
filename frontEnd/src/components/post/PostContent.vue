<template>
  <div class="postContent bg-info">
    <p class="postContentComment h5">
      {{ text }}
    </p>
    <img
      :src="urlPicture"
      :alt="text"
      class="postContentPicture"
    />
  </div>
</template>

<script>
export default {
  name: "PostContent",
  props: {
    text: {
      type: String,
      require: true,
    },
    urlPicture: {
      type: String,
      require: true,
    },
  },
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
