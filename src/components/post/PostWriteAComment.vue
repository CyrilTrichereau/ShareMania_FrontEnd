<template>
  <div class="myComment" :key="keyComponent">
    <p class="myCommentTitle text-light bg-secondary">Ajouter un commentaire</p>
    <div class="myCommentContent bg-info">
      <div class="myCommentContentProfile">
        <img
          :src="$store.state.profile.myProfile.urlPicture"
          :alt="'Photo de profil de ' + $store.state.profile.myProfile.alias"
          class="myCommentContentProfilePicture"
        />
        <p class="myCommentContentProfileName text-primary">
          {{ $store.state.profile.myProfile.alias }}
        </p>
      </div>
      <div class="myCommentContentTextBlock">
        <TextBlock @input-value="saveContentText" />
        <p
          class="text-danger myCommentContentTextBlockInvalidText"
          v-show="displayInvalidText"
        >
          Le texte de votre publication doit contenir au minimum 6 caractères.
        </p>
      </div>
      <Button text="Valider" @click="sendNewComment" />
    </div>
  </div>
</template>

<script>
import TextBlock from "@/components/form/TextBlock.vue";
import Button from "@/components/form/Button.vue";

export default {
  name: "PostWriteAComment",
  components: {
    TextBlock,
    Button,
  },
  props: {
    commentObject: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      contentText: "",
      displayInvalidText: false,
      keyComponent: 0,
    };
  },
  methods: {
    saveContentText(payload) {
      this.contentText = payload;
    },
    async sendNewComment() {
      // Re init invalid text displaying
      this.displayInvalidText = false;
      // Control if regex text is respected (6 caracteres minimum)
      const regex = new RegExp(this.$store.state.pattern.text);
      if (regex.test(this.contentText)) {
        // Init new comment to save
        let dataNewComment = {
          post: {
            posterId: this.commentObject.posterId,
            postId: this.commentObject.postId,
            time: this.commentObject.time,
          },
          profile: {
            _id: this.$store.state.profile.myProfile.id,
            alias: this.$store.state.profile.myProfile.alias,
            urlPicture: this.$store.state.profile.myProfile.urlPicture,
          },
          text: this.contentText,
        };

        //send new comment POST
        let response = null;
        let responseNewComment = null;
        // fetch new post
        try {
          response = await fetch(
            this.$store.state.apiUrl.entryPoint + "/postComment/new/",
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                authorization: localStorage.getItem("token"),
              },
              body: JSON.stringify(dataNewComment),
            }
          );
          responseNewComment = await response.json();
          console.log({ responseNewComment: responseNewComment });
        } catch (error) {
          console.log(error);
        }
        this.keyComponent++;
        this.$emit("update-comments-list");
      } else {
        this.displayInvalidText = true;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.myComment {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  &Title {
    width: 100%;
    font-size: 1.3rem;
    margin: 0;
    padding: 1rem;
    border-radius: 15px;
  }
  &Content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    &Profile {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      margin-left: 10%;
      &Picture {
        width: 60px;
        height: 60px;
        border-radius: 50px;
        margin: 0 1rem;
        object-fit: cover;
        object-position: center;
      }
      &Name {
        font-weight: 600;
        font-size: 1.2rem;
        margin: 0;
      }
    }
    &TextBlock {
      width: 90%;
      margin: 0.5rem 0;
      &InvalidText {
        width: 100%;
        padding: 0.2rem 1rem;
        margin: 0.5rem 0;
        border-radius: 5px;
      }
    }
  }
}
</style>
