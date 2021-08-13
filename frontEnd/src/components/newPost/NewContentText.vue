<template>
  <div class="newContent">
    <h1 class="text-primary newContentTitle">Nouvelle Publication</h1>
    <div class="bg-info newContentText">
      <div class="newContentTextHeader">
        <img
          :src="myProfile.urlPicture"
          :alt="'Photo de profil de ' + myProfile.alias"
          class="newContentTextHeaderPicture"
        />
        <p class="h4 text-secondary newContentTextHeaderName"> {{ myProfile.alias }} </p>
      </div>
      <div class="newContentTextMain">
        <div class="newContentTextMainBlock">
          <TextBlock 
          @input-value="saveContentText"/>
        </div>
        <Button text="Valider" @click.native="sendPost"/>
      </div>
    </div>
  </div>
</template>

<script>
import TextBlock from "@/components/form/TextBlock.vue";
import Button from "@/components/form/Button.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "NewContentText",
  components: {
    TextBlock,
    Button,
  },
  data() {
    return {
      post: {
        posterProfile: {
          alias: "",
          urlPicture: "",
          service: "",
          _id: "",
        },
        time: 0,
        content: {
          text: "",
          urlPicture: "",
        },
        onFire_id: [],
        cold_id: [],
        commentsList: [],
      },
    };
  },
  computed: {
    ...mapState(["myProfile", "myProfileModify"]),
  },
  methods: {
    ...mapActions(["sendPostObject"]),
    saveContentText(payload) {
      this.post.content.text = payload;
    },
    sendPost() {
      this.post.posterProfile.alias = this.myProfile.alias;
      this.post.posterProfile.urlPicture = this.myProfile.urlPicture;
      this.post.posterProfile.service = this.myProfile.service;
      this.post.posterProfile._id = this.myProfile._id;
      this.post.time = Date.now();
      console.log(this.post);
     // this.sendPostObject(this.post, "POST");
    },
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
