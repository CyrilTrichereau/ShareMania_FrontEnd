<template>
  <div class="comment">
    <img
      :src="urlPicture"
      :alt="'Profil de ' + alias"
      class="commentPictureProfile"
    />
    <div class="commentContent bg-info">
      <div class="commentContentHeader">
        <p class="commentContentHeaderNameProfile text-primary">
          {{ alias }}
        </p>
        <p class="commentContentHeaderTimePost text-secondary">
          Il y a {{ elapsedTime(time) }}
        </p>
        <div class="commentContentHeaderEllipsisMenu">
          <EllipsisMenu
            :small="true"
            firstLineText="Signaler le commentaire"
            secondLineText="Supprimer le commentaire"
            typeToErase="comment"
          />
        </div>
      </div>
      <p class="commentContentComment">
        {{ text }}
      </p>
      <div class="commentContentWhiteLine bg-light"></div>
      <div class="commentContentInteractions">
        <div class="commentContentInteractionsFire">
          <OnFire :small="true" />
        </div>
        <p class="commentContentInteractionsPercentage text-secondary">
          {{ onFirePercentage(onFireId, coldId) }} %
        </p>
        <div class="commentContentInteractionsSnow">
          <Cold :small="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EllipsisMenu from "@/components/post/PostEllipsisMenu.vue";
import OnFire from "@/components/icons/OnFire.vue";
import Cold from "@/components/icons/Cold.vue";

export default {
  name: "PostComment",
  components: {
    EllipsisMenu,
    OnFire,
    Cold,
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
    text: {
      type: String,
      require: true,
    },
    onFireId: {
      type: Array,
      require: true,
    },
    coldId: {
      type: Array,
      require: true,
    },
  },
  methods: {
    onFirePercentage(onFireArray, coldArray) {
      return Math.round(
        onFireArray.length / ((onFireArray.length + coldArray.length) / 100)
      );
    },
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
.comment {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 1rem 0;
  width: 92%;
  &PictureProfile {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin: 0 2%;
    object-fit: cover;
    object-position: center;
  }
  &Content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 83%;
    border-radius: 15px;
    &Header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      margin: 0.5rem 0;

      &NameProfile {
        margin: 0;
      }
      &TimePost {
        margin: 0;
      }
    }
    &Comment {
      width: 90%;
    }
    &WhiteLine {
      width: 80%;
      height: 0.2rem;
      border-radius: 25px;
    }
    &Interactions {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 90%;
      max-width: 260px;
      margin: 0 10%;
      &Fire {
        font-size: 1.4rem;
      }
      &Percentage {
        font-weight: 700;
        margin: 0;
      }
      &Snow {
        font-size: 1.4rem;
        color: rgb(107, 159, 255);
      }
    }
  }
}

@media screen and (max-width: 374px) {
  .commentContentHeader {
    flex-wrap: wrap;
    &NameProfile {
      width: 80%;
    }
    &TimePost {
      order: 3;
      width: 80%;
    }
  }
}
</style>
