<template>
  <div class="comment">
    <img
      :src="commentObject.profile.urlPicture"
      :alt="'Profil de ' + commentObject.profile.alias"
      class="commentPictureProfile"
    />
    <div class="commentContent bg-info">
      <div class="commentContentHeader">
        <p class="commentContentHeaderNameProfile text-primary">
          {{ commentObject.profile.alias }}
        </p>
        <p class="commentContentHeaderTimePost text-secondary">
          {{ timeElapsed }}
        </p>
        <div class="commentContentHeaderEllipsisMenu">
          <EllipsisMenu
            :small="true"
            firstLineText="Signaler le commentaire"
            secondLineText="Supprimer le commentaire"
            typeToErase="comment"
            @confirm-erase="eraseComment"
            :displayEraseLine="canIEraseIt"
          />
        </div>
      </div>
      <p class="commentContentComment">
        {{ commentObject.text }}
      </p>
      <div class="commentContentWhiteLine bg-light"></div>
      <div class="commentContentInteractions">
        <div class="commentContentInteractionsFire" @click="makeItOnFire">
          <OnFire :small="true" :isActive="isActiveOnFire" />
        </div>
        <p class="commentContentInteractionsPercentage text-secondary">
          {{ averageCounterChecked }}
          %
        </p>
        <div class="commentContentInteractionsSnow" @click="makeItCold">
          <Cold :small="true" :isActive="isActiveCold" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EllipsisMenu from "@/components/post/PostEllipsisMenu.vue";
import OnFire from "@/components/icons/OnFire.vue";
import Cold from "@/components/icons/Cold.vue";
import * as utils from "@/assets/utils.js";

export default {
  name: "PostComment",
  components: {
    EllipsisMenu,
    OnFire,
    Cold,
  },
  props: {
    commentObject: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      isLikeComment: 0,
      averageCounterUpdated: "none",
    };
  },
  computed: {
    canIEraseIt() {
      if (
        this.$store.state.profile.myProfile.isModerator ||
        this.commentObject.profile._id === this.$store.state.profile.myProfile.id
      ) {
        return true;
      } else {
        return false;
      }
    },
    timeElapsed() {
      return utils.elapsedTime(this.commentObject.time);
    },
    isActiveOnFire() {
      if (this.isLikeComment === 1) {
        return true;
      } else {
        return false;
      }
    },
    isActiveCold() {
      if (this.isLikeComment === -1) {
        return true;
      } else {
        return false;
      }
    },
    averageCounterChecked() {
      if (this.averageCounterUpdated === "none") {
        if (this.commentObject.averageCounter) {
          return this.commentObject.averageCounter;
        } else {
          return 0;
        }
      } else {
        if (this.averageCounterUpdated) {
          return this.averageCounterUpdated;
        } else {
          return 0;
        }
      }
    },
  },
  methods: {
    async eraseComment() {
      // Params
      let response = null;
      let responseErasing = null;
      let dataOfComment = {
        posterId: this.commentObject.profile._id,
        commentId: this.commentObject._id,
        time: this.commentObject.time,
      };
      // Fetch DELETE
      try {
        response = await fetch(
          this.$store.state.apiUrl.entryPoint +
            "/" +
            dataOfComment.commentId +
            "/postComment",
          {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              authorization: localStorage.getItem("token"),
            },
            body: JSON.stringify(dataOfComment),
          }
        );
        responseErasing = await response.json();
        console.log(responseErasing);
      } catch (error) {
        console.log(error);
      }
      this.$router.go();
    },
    async makeItOnFire() {
      let response = null;
      let responseOnFire = null;
      // fetch new post
      try {
        response = await fetch(
          this.$store.state.apiUrl.entryPoint +
            "/postComment/" +
            this.commentObject._id +
            "/vote/like/",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              authorization: localStorage.getItem("token"),
            },
          }
        );
        responseOnFire = await response.json();
        console.log({ responseOnFire: responseOnFire });
      } catch (error) {
        console.log(error);
      }
      // Update counters : onFire, Cold and average counter
      this.averageCounterUpdated = responseOnFire.averageCounter;
      this.isLikeComment = responseOnFire.isLike;
    },
    async makeItCold() {
      let response = null;
      let responseCold = null;
      // fetch new post
      try {
        response = await fetch(
          this.$store.state.apiUrl.entryPoint +
            "/postComment/" +
            this.commentObject._id +
            "/vote/dislike/",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              authorization: localStorage.getItem("token"),
            },
          }
        );
        responseCold = await response.json();
        console.log({ responseCold: responseCold });
      } catch (error) {
        console.log(error);
      }
      // Update counters : onFire, Cold and average counter
      this.averageCounterUpdated = responseCold.averageCounter;
      this.isLikeComment = responseCold.isLike;
    },
  },
  created() {
    if (this.commentObject.isLike === -1 || this.commentObject.isLike === 1) {
      this.isLikeComment = this.commentObject.isLike;
    }
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
