<template>
  <div class="postHeader">
    <img
      :src="urlPicture"
      :alt="'Image de profil de ' + alias "
      class="postHeaderPictureProfile"
    />
    <div class="postHeaderText">
      <p class="postHeaderTextTitle text-primary"> {{ alias }} </p>
      <div class="postHeaderTextSubtitleBlock">
        <p class="postHeaderTextSubtitleBlockTime"> {{ time }} </p>
        <p class="postHeaderTextSubtitleBlockService">-  {{ service }} </p>
      </div>
    </div>
    <div class="postHeaderEllipsisButton">
      <EllipsisMenu
        firstLineText="Signaler la publication"
        secondLineText="Supprimer la publication"
        typeToErase="post"
      />
    </div>
  </div>
</template>

<script>
import EllipsisMenu from "@/components/post/PostEllipsisMenu.vue";

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
        margin: 0;
      }
    }
  }
  &EllipsisButton {
    position: absolute;
    right: 0.5rem;
    font-size: 1.6rem;
  }
}
</style>
