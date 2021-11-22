<template>
  <div class="container card content">
    <div class="container card bg-dark contentCard">
      <img
        :src="giphyToDisplay.content.urlPicture"
        :alt="giphyToDisplay.content.originalPosterProfile.text"
        class="contentCardPicture"
        v-if="!isVideo"
      />
      <video
        :src="giphyToDisplay.content.urlPicture"
        :alt="giphyToDisplay.content.originalPosterProfile.text"
        class="contentCardPicture"
        controls
        preload="metadata"
        loop
        muted
        v-else
      />
      <p class="text-light contentCardText">
        {{ giphyToDisplay.content.originalPosterProfile.text }}
      </p>
    </div>
    <Button text="Supprimer" @click="sendEraseGifToDisplay" :danger="true" />
  </div>
</template>

<script>
import Button from "@/components/form/Button.vue";

export default {
  name: "ContentCardShared",
  components: {
    Button,
  },
  props: {
    giphyToDisplay: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isVideo() {
      const typeMime = this.giphyToDisplay.content.urlPicture.split(".").pop();
      const videoTypesArray = [
        "mp4",
        "MP4",
        "avi",
        "AVI",
        "mkv",
        "MKV",
        "webm",
        "WEBM",
      ];
      let isVideoType = false;
      videoTypesArray.forEach((type) => {
        if (typeMime == type) {
          isVideoType = true;
        }
      });
      return isVideoType;
    },
  },
  methods: {
    sendEraseGifToDisplay() {
      this.$emit("erase-gif-to-display");
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 92%;
  padding: 0;
  margin: 0;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  &Card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0;
    margin: 0;
    max-width: 850px;
    &Picture {
      width: 100%;
    }
    &Text {
      padding: 0.5rem 1rem;
      margin: 0;
    }
  }
}
</style>
