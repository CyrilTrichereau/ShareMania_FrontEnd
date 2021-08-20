<template>
  <div class="mx-auto my-lg-4 newPost">
    <NewContentText
      class="newPostNewContentText"
      :descendGifForSeasonningPost="gifForSeasonningPost"
      :mediaToAttachToPost="mediaToAttach"
    />
    <AddAttached
      class="newPostAddAttached"
      @ascend-share-a-giphy-post="descendInfoShareAGiphy"
      @send-media-to-post-object="descendSendMediaToPostObject"
    />
  </div>
</template>

<script>
import NewContentText from "@/components/newPost/NewContentText.vue";
import AddAttached from "@/components/newPost/AddAttached.vue";

export default {
  name: "NewPost",
  components: {
    NewContentText,
    AddAttached,
  },
  data() {
    return {
      gifForSeasonningPost: { isSeasonning: false },
      mediaToAttach: "",
    };
  },
  methods: {
    descendInfoShareAGiphy(payloadTest) {
      this.gifForSeasonningPost = payloadTest;
    },
    descendSendMediaToPostObject(payload) {
      this.mediaToAttach = payload;
    },
  },
  mounted() {
    this.$store.dispatch("fetchPostsGiphyTrending", {
      numberOfPosts: 20,
      startAtNumber: 0,
    });
  },
};
</script>

<style scoped lang="scss">
.newPost {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 4rem;
}
</style>
