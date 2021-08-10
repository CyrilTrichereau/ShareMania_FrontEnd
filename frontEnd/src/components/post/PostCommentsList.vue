<template>
  <div class="displayComments">
    <div class="displayCommentsHeader">
      <p class="displayCommentsHeaderTitle text-primary">Commentaires</p>
      <div class="displayCommentsHeaderSorting">
        <SortingByButton />
      </div>
    </div>
    <div v-for="(comment, index) in commentsList" :key="index">
      <Comment 
            :alias="comment.profile.alias"
            :urlPicture="comment.profile.urlPicture"
            :time="comment.time"
            :text="comment.text"
            :onFireId="comment.onFire_id"
            :coldId="comment.cold_id"
      />
    </div>
  </div>
</template>

<script>
import SortingByButton from "@/components/form/SortingByButton.vue";
import Comment from "@/components/post/PostComment.vue";

export default {
  name: "PostCommentsList",
  components: {
    SortingByButton,
    Comment,
  },
  props: {
    commentsList: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style scoped lang="scss">
.displayComments {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  &Header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;

    &Title {
      font-size: 1.3rem;
      margin: 0;
    }
    &Sorting {
      margin: 0;
      padding: 0;
    }
  }
}
</style>
