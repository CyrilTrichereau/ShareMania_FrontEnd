<template>
  <div class="container card bg-dark postGiphy">
    <img
      :src="post.images.original.webp"
      :alt="post.title"
      class="postGiphyPicture"
    />
    <div class="postGiphyFooter">
      <p class="postGiphyFooterComment text-light">
        {{ post.title }}
      </p>
      <div
        class="postGiphyFooterShareWrapper btn btn-primary"
        @click="shareGif"
      >
        <font-awesome-icon
          icon="share"
          class="text-light postGiphyFooterShareWrapperIcon"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostGiphy",
  data() {
    return {
      postGiphyToShare: {
        posterProfile: {
          alias: "",
          urlPicture: "",
        },
        content: {
          text: "",
          urlPicture: "",
        },
      },
    };
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
    descendNewPostSeasonning: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    shareGif() {
      if (Object.prototype.hasOwnProperty.call(this.post, "user")) {
        if (this.post.user.display_name !== "") {
          this.postGiphyToShare.posterProfile.alias =
            this.post.user.display_name;
        } else {
          this.postGiphyToShare.posterProfile.alias = "Unknown";
        }
        this.postGiphyToShare.posterProfile.urlPicture =
          this.post.user.avatar_url;
      } else {
        if (this.post.username !== "") {
          this.postGiphyToShare.posterProfile.alias = this.post.username;
        } else {
          this.postGiphyToShare.posterProfile.alias = "Unknown";
        }
        this.postGiphyToShare.posterProfile.urlPicture =
          this.$store.state.apiUrl.entryPoint +
          "/mediaStatic/unknow250pxTinyfied.jpg";
      }
      this.postGiphyToShare.content.text = this.post.title;
      this.postGiphyToShare.content.urlPicture = this.post.images.original.webp;
      this.$store.dispatch(
        "saveTemporaryGifDataForShare",
        this.postGiphyToShare
      );
      if (this.descendNewPostSeasonning) {
        this.$emit("share-a-giphy-post", this.postGiphyToShare);
      } else {
        this.$router.push("/new-post");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.postGiphy {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 1rem 0;
  width: 100%;
  max-width: 900px;
  &Picture {
    width: 100%;
    max-height: 550px;
    object-fit: cover;
    object-position: center;
  }
  &Footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin: 0;
    padding: 0.2rem 1rem;
    width: 100%;
    &Comment {
      margin: 0;
      padding: 0 0.5rem;
    }
    &ShareWrapper {
      text-align: right;
      font-size: 1.6rem;
      padding: 0 1rem;
      margin: 0;
    }
  }
}
</style>
