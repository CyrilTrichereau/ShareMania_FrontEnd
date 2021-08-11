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
        <p class="postHeaderTextSubtitleBlockTime">{{ elapsedTime(time) }}</p>
        <p class="postHeaderTextSubtitleBlockService">- {{ service }}</p>
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
  methods: {
    elapsedTime(time) {
      // calculate time elapsed in minutes
      let calcTime = Math.round((Date.now() / 1000 - time) / 60);
      let timeValue = "min";
      // if inferior at 60 min
      if (calcTime <= 60) {
        return calcTime.toString() + " " + timeValue;
      } else {
        // if inferior at 24 hours
        calcTime = Math.round(calcTime / 60);
        if (calcTime <= 24) {
          if (calcTime === 1) {
            timeValue = "heure";
          } else {
            timeValue = "heures";
          }
          return calcTime.toString() + " " + timeValue;
        } else {
          // if inferior at 30 days
          calcTime = Math.round(calcTime / 24);
          if (calcTime <= 30) {
            if (calcTime === 1) {
              timeValue = "jour";
            } else {
              timeValue = "jours";
            }
            return calcTime.toString() + " " + timeValue;
          } else {
            // if inferior at 12 months
            calcTime = Math.round(calcTime / 30);
            if (calcTime <= 12) {
              timeValue = "mois";

              return calcTime.toString() + " " + timeValue;
            } else {
              // else in years
              calcTime = Math.round(calcTime / 12);
              if (calcTime === 1) {
                timeValue = "an";
              } else {
                timeValue = "ans";
              }
              return calcTime.toString() + " " + timeValue;
            }
          }
        }
      }
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
