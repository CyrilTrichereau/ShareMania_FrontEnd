<template>
  <div class="postContent bg-info">
    <p class="h5 bg-light text-primary postContentComment">
      {{ text }}
    </p>
    <img
      :src="urlPicture"
      :alt="text"
      class="postContentPicture"
      v-if="!isVideo"
    />
    <video
      :src="urlPicture"
      :alt="text"
      class="postContentPicture"
      controls
      preload="metadata"
      loop
      muted
      v-else
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
  computed: {
    fileType() {
      let typeMime = this.urlPicture.split(".").pop();
      return typeMime;
    },
    isVideo() {
      const videoTypesArray = ["mp4", "MP4", "avi", "AVI", "mkv", "MKV", "webm", "WEBM"];
      let isVideoType = false;
      videoTypesArray.forEach((type) => {
        if (this.fileType == type) {
          isVideoType = true;
        }
      });
      return isVideoType;
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.postContent {
  border-radius: 15px;
  &Comment {
    margin: 1rem 1rem 0 1rem;
    padding: 1rem 1rem 0.5rem 1rem;
    font-weight: 700;
    text-align: center;
    border-radius: 15px;
  }
  &Picture {
    width: 100%;
    max-height: 550px;
    margin: 0.5rem 0;
    object-fit: contain;
    object-position: center;
  }
}
</style>
