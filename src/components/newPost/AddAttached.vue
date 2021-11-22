<template>
  <div class="addAttached">
    <p class="h4 addAttachedText">Ajoutez du contenu à votre publication !</p>
    <div class="addAttachedFilter">
      <Button
        text="Giphy"
        @click="isGiphyDisplayerOpen = !isGiphyDisplayerOpen"
        :secondary="returnIsGiphyDisplayerOpen"
      />
      <InputFile
        text="Importer une image ou une vidéo"
        @ascend-send-media-to-post-object="sendMediaToPostObject"
      />

      <div class="addAttachedDisplayGiphy" v-show="isGiphyDisplayerOpen">
        <PostsList
          title="Posts Giphy !"
          :postsGiphy="true"
          :smallTitle="true"
          :newPostSeasonning="true"
          @ascend-share-a-giphy-post="ascendInfoShareAGiphy"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/form/Button.vue";
import InputFile from "@/components/form/InputFile.vue";
import PostsList from "@/components/PostsList.vue";

export default {
  name: "AddAttached",
  components: {
    PostsList,
    Button,
    InputFile,
  },
  data() {
    return {
      isGiphyDisplayerOpen: false,
    };
  },
  computed: {
    returnIsGiphyDisplayerOpen() {
      if (!this.isGiphyDisplayerOpen) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    ascendInfoShareAGiphy(payload) {
      this.isGiphyDisplayerOpen = false;
      this.$emit("ascend-share-a-giphy-post", payload);
    },
    sendMediaToPostObject(payload) {
      this.$emit("send-media-to-post-object", payload);
    },
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
    flex-wrap: wrap;
    width: 100%;
    max-width: 900px;
  }
  &DisplayGiphy {
    margin: 1rem 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
</style>
