<template>
  <div class="postHeader">
    <img
      :src="urlPicture"
      :alt="'Image de profil de ' + alias"
      class="postHeaderPictureProfile"
    />
    <div class="postHeaderText">
      <p class="postHeaderTextTitle text-primary">{{ alias }}</p>
      <div class="postHeaderTextSubtitleBlock">
        <p class="postHeaderTextSubtitleBlockTime">{{ timeElapsed }}</p>
        <p class="postHeaderTextSubtitleBlockService">- {{ service }}</p>
      </div>
    </div>
    <div class="postHeaderEllipsisButton">
      <EllipsisMenu
        firstLineText="Signaler la publication"
        secondLineText="Supprimer la publication"
        typeToErase="post"
        @confirm-erase="erasePost"
      />
    </div>
  </div>
</template>

<script>
import EllipsisMenu from "@/components/post/PostEllipsisMenu.vue";
import * as utils from "@/assets/utils.js";

export default {
  name: "PostHeader",
  components: {
    EllipsisMenu,
  },
  props: {
    alias: {
      type: String,
      require: true,
    },
    urlPicture: {
      type: String,
      require: true,
    },
    time: {
      type: Number,
      require: true,
    },
    service: {
      type: String,
      require: true,
    },
    dataForPostEraser: {
      type: Object,
      require: true,
    },
  },
  computed: {
    timeElapsed() {
      return utils.elapsedTime(this.time);
    },
  },
  methods: {
    async erasePost() {
      // Params
      let response = null;
      let responseErasing = null;
      // Fetch DELETE
      try {
        response = await fetch(
          this.$store.state.apiUrl.entryPoint +
            "/" +
            this.dataForPostEraser.postId +
            "/feedPosts",
          {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              authorization: localStorage.getItem("token"),
            },
            body: JSON.stringify(this.dataForPostEraser),
          }
        );
        responseErasing = await response.json();
        console.log(responseErasing);
      } catch (error) {
        console.log(error);
      }
      this.$router.go();
    },
  },
};
</script>

<style scoped lang="scss">
.postHeader {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin: 0.5rem 0;
  margin-bottom: 1.5rem;
  &PictureProfile {
    width: 70px;
    height: 70px;
    border-radius: 50px;
    margin: 0 0.5rem;
    object-fit: cover;
    object-position: center;
  }
  &Text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    &Title {
      margin: 0.5rem 0;
      font-size: 1.4rem;
      font-weight: 600;
    }
    &SubtitleBlock {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      font-size: 0.9rem;

      &Time {
        margin: 0;
        font-weight: 600;
      }
      &Service {
        margin: 0 0 0 0.3rem;
      }
    }
  }
  &EllipsisButton {
    position: absolute;
    right: 6%;
  }
}

@media screen and (max-width: 374px) {
  .postHeader {
    gap: 0;
    &TextTitle {
      font-size: 16px;
    }
  }
}
@media screen and (min-width: 500px) {
  .postHeader {
    justify-content: flex-start;
    gap: 1rem;
    padding-left: 1.5rem;
    margin: 0.5rem 0;
  }
}
</style>
