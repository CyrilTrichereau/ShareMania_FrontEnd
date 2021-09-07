<template>
  <div class="newContent">
    <h1 class="text-primary newContentTitle">Nouvelle Publication</h1>
    <div class="bg-info newContentText">
      <div class="newContentTextHeader">
        <img
          :src="$store.state.profile.myProfile.urlPicture"
          :alt="'Photo de profil de ' + $store.state.profile.myProfile.alias"
          class="newContentTextHeaderPicture"
        />
        <p class="h4 text-secondary newContentTextHeaderName">
          {{ $store.state.profile.myProfile.alias }}
        </p>
      </div>
      <div class="newContentTextMain">
        <div class="newContentTextMainBlock">
          <TextBlock @input-value="saveContentText" />
        </div>
        <ContentCardShared
          :giphyToDisplay="postData"
          v-if="postData.content.urlPicture !== ''"
          @erase-gif-to-display="eraseGifToDisplay"
        />
        <Button text="Valider" @click.native="sendPost" />
      </div>
    </div>
  </div>
</template>

<script>
import TextBlock from "@/components/form/TextBlock.vue";
import Button from "@/components/form/Button.vue";
import ContentCardShared from "@/components/newPost/ContentCardShared.vue";

export default {
  name: "NewContentText",
  components: {
    TextBlock,
    Button,
    ContentCardShared,
  },
  props: {
    descendGifForSeasonningPost: {
      required: true,
    },
    mediaToAttachToPost: {
      required: true,
    },
  },
  data() {
    return {
      postData: {
        posterProfile: {
          alias: "",
          urlPicture: "",
          service: "",
          _id: "",
        },
        content: {
          text: "",
          urlPicture: "",
          originalPosterProfile: {
            alias: null,
            urlPicture: null,
            text: null,
          },
        },
      },
    };
  },
  watch: {
    descendGifForSeasonningPost: function(objectGif) {
      this.updatePostData(objectGif);
    },
    mediaToAttachToPost: function(mediaToAttach) {
      this.eraseGifToDisplay();
      if (mediaToAttach[0].target.files) {
        this.postData.mediaFile = mediaToAttach[0].target.files[0];
        this.postData.content.urlPicture = mediaToAttach[1];
      }
    },
  },
  methods: {
    saveContentText(payload) {
      this.postData.content.text = payload;
    },
    updatePostData(objectGiphy) {
      if (
        objectGiphy.posterProfile !== undefined &&
        objectGiphy.content !== undefined
      ) {
        this.postData.content.originalPosterProfile.alias =
          objectGiphy.posterProfile.alias;
        this.postData.content.originalPosterProfile.urlPicture =
          objectGiphy.posterProfile.urlPicture;
        this.postData.content.originalPosterProfile.text =
          objectGiphy.content.text;
        this.postData.content.urlPicture = objectGiphy.content.urlPicture;
        this.postData.mediaFile = "";
      }
    },
    eraseGifToDisplay() {
      const postGiphyToReplace = {
        posterProfile: {
          alias: "",
          urlPicture: "",
        },
        content: {
          text: "",
          urlPicture: "",
        },
      };
      this.updatePostData(postGiphyToReplace);
    },
    async sendPost() {
      // Init Response FormData
      let responseFormData = new FormData();

      // Params
      const requestObject = [
        ["userAlias", this.$store.state.profile.myProfile.alias],
        ["userUrlPicture", this.$store.state.profile.myProfile.urlPicture],
        ["userService", this.$store.state.profile.myProfile.service],
        ["contentText", this.postData.content.text],
        ["contentUrlPicture", this.postData.content.urlPicture],
        [
          "originalUserAlias",
          this.postData.content.originalPosterProfile.alias,
        ],
        [
          "originalUserUrlPicture",
          this.postData.content.originalPosterProfile.urlPicture,
        ],
        ["originalUserText", this.postData.content.originalPosterProfile.text],
      ];

      // Add file
      if (this.postData.mediaFile) {
        try {
          responseFormData.append(
            "mediaFile",
            this.postData.mediaFile,
            this.postData.mediaFile.name
          );
        } catch (error) {
          console.log(error);
        }
      }

      // Add data
      requestObject.forEach((value) => {
        try {
          responseFormData.append(value[0], value[1]);
        } catch (error) {
          console.log(error);
        }
      });

      // fetch new post
      try {
        let response = await fetch(
          this.$store.state.apiUrl.entryPoint + "/feedPosts/new/",
          {
            method: "POST",
            body: responseFormData,
            headers: {
              authorization: localStorage.getItem("token"),
            },
          }
        );
        response = await response.json();
        console.log({ responseBody: response });
      } catch (error) {
        console.log(error);
      }

      this.$store.dispatch("openOrCloseMenuHeaderForce", "none");
      this.$router.push({ name: "home" });
    },
  },
  mounted() {
    if (
      this.$store.state.postsGiphy.gifDataSavedTemporary !== { empty: true } &&
      this.$store.state.postsGiphy.gifDataSavedTemporary !== undefined
    ) {
      this.updatePostData(this.$store.state.postsGiphy.gifDataSavedTemporary);
    }
  },
};
</script>

<style scoped lang="scss">
.newContent {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  &Title {
    margin: 1rem 0;
  }
  &Text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    &Header {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      width: 88%;
      &Picture {
        width: 60px;
        height: 60px;
        border-radius: 500px;
        object-fit: cover;
        object-position: center;
      }
      &Name {
        margin: 0;
      }
    }
    &Main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 850px;
      &Block {
        width: 92%;
        max-width: 800px;
        margin-top: 0.5rem;
      }
    }
  }
}

@media (min-width: 992px) {
  .newContent {
    &Text {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      padding: 1rem 0;
      &Header {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: auto;
        margin-top: 1.5rem;
        &Picture {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
}
</style>
